import { useContext } from 'react'
import { useErrorPromptContext } from './useErrorPromptContext'
import { addDoc, collection, deleteDoc, doc, updateDoc, getDocs, query, where, arrayUnion } from 'firebase/firestore'
import { db } from '../firebase/config'
import { UserContext } from '../contexts/UserContext'
import { User, Team } from '../interfaces'

export const useDb = (col: string) => {
  const userContext = useContext(UserContext)
  const { setIsError } = useErrorPromptContext()

  if (!userContext) {
    throw new Error("useDb must be used within a UserContextProvider")
  }

  const { user } = userContext

  const addDocument = async (doc: any, collectionName: string = col) => {
    if (collectionName === 'teams' && user?.role !== 'admin') {
      throw new Error('Only admins can add teams')
    }
    try {
      const ref = await addDoc(collection(db, collectionName), { ...doc, uid: user?.uid })
      return ref
    } catch {
      setIsError(true)
    }
  }

  const removeDocument = async (docID: string) => {
    if (col === 'teams' && user?.role !== 'admin') {
      throw new Error('Only admins can remove teams')
    }
    try {
      await deleteDoc(doc(collection(db, col), docID))
    } catch {
      setIsError(true)
    }
  }

  const updateDocument = async (docID: string, changesObj: any) => {
    if (col === 'teams' && user?.role !== 'admin') {
      throw new Error('Only admins can update teams')
    }
    try {
      await updateDoc(doc(collection(db, col), docID), changesObj)
    } catch {
      setIsError(true)
    }
  }

  const getUsers = async (): Promise<User[]> => {
    if (user?.role !== 'admin') {
      throw new Error('Only admins can get all users')
    }
    try {
      const usersSnapshot = await getDocs(collection(db, 'users'))
      return usersSnapshot.docs.map(doc => ({ ...doc.data(), uid: doc.id } as User))
    } catch (error) {
      setIsError(true)
      throw error
    }
  }

  const getTeams = async (): Promise<Team[]> => {
    try {
      const teamsSnapshot = await getDocs(collection(db, 'teams'))
      return teamsSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Team))
    } catch (error) {
      setIsError(true)
      throw error
    }
  }

  const assignTeamToUser = async (userId: string, teamId: string) => {
    if (user?.role !== 'admin') {
      throw new Error('Only admins can assign teams to users')
    }
    try {
      await updateDoc(doc(db, 'users', userId), {
        teamIds: arrayUnion(teamId)
      })
    } catch (error) {
      setIsError(true)
      throw error
    }
  }

  return { addDocument, removeDocument, updateDocument, getUsers, getTeams, assignTeamToUser }
}