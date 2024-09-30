import { UserContext } from '../contexts/UserContext'
//hooks/contexts
import { useContext } from 'react'
import { useErrorPromptContext } from './useErrorPromptContext'
//firebase
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

export const useDb = (col: string) => {
  const { user } = useContext(UserContext)
  const { setIsError } = useErrorPromptContext()

  const addDocument = async (doc: any) => {
    try {
      const ref = await addDoc(collection(db, col), { ...doc, uid: user?.uid })
      return ref
    } catch {
      setIsError(true)
    }
  }

  const removeDocument = async (docID: string) => {
    try {
      await deleteDoc(doc(collection(db, col), docID))
    } catch {
      setIsError(true)
    }
  }

  const updateDocument = async (docID: string, changesObj: any) => {
    try {
      await updateDoc(doc(collection(db, col), docID), changesObj)
    } catch {
      setIsError(true)
    }
  }

  return { addDocument, removeDocument, updateDocument }
}
