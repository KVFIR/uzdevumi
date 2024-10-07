import { useContext } from 'react'
import { useErrorPromptContext } from './useErrorPromptContext'
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { UserContext } from '../contexts/UserContext'

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

  return { addDocument, removeDocument, updateDocument }
}