import { UserContext } from '../contexts/UserContext'
import { useErrorPromptContext } from './useErrorPromptContext'
import { useState, useContext } from 'react'
import { getErrorMessage } from '../utils/getErrorMessage'
import { auth, db } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { User } from '../interfaces'

export const useLogin = () => {
  const userContext = useContext(UserContext)
  const [errorMessage, setErrorMessage] = useState<null | string>(null)
  const { setIsError } = useErrorPromptContext()

  if (!userContext) {
    throw new Error("useLogin must be used within a UserContextProvider")
  }

  const { dispatch } = userContext

  const login = async (email: string, password: string) => {
    setErrorMessage(null)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const { uid } = userCredential.user

      const userDocRef = doc(db, 'users', uid)
      const userDoc = await getDoc(userDocRef)

      if (userDoc.exists()) {
        const userData = userDoc.data() as User
        dispatch({ type: 'LOGIN', payload: userData })
      } else {
        throw new Error('User document does not exist')
      }
    } catch (err: any) {
      const message = getErrorMessage(err.code)
      setErrorMessage(message || 'An unexpected error occurred')
      !message && setIsError(true)
    }
  }

  return { errorMessage, login }
}
