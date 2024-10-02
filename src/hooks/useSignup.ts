import { UserContext } from '../contexts/UserContext'
import { useState, useContext } from 'react'
import { useErrorPromptContext } from './useErrorPromptContext'
import { openAppHelp } from '../utils/openAppHelp'
import { getErrorMessage } from '../utils/getErrorMessage'
import { auth, db } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { addDefaultContent } from '../utils/addDefaultContent'
import { User } from '../interfaces'

export const useSignup = () => {
  const userContext = useContext(UserContext)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { setIsError } = useErrorPromptContext()

  if (!userContext) {
    throw new Error("useSignup must be used within a UserContextProvider")
  }

  const { dispatch } = userContext

  const signup = async (email: string, password: string) => {
    setErrorMessage(null)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const newUser: User = {
        uid: userCredential.user.uid,
        email: userCredential.user.email!,
        role: 'user',
      }
      await setDoc(doc(db, 'users', newUser.uid), newUser)
      await addDefaultContent(newUser.uid)
      dispatch({ type: 'LOGIN', payload: newUser })
      openAppHelp()
    } catch (err: any) {
      const message = getErrorMessage(err.code)
      setErrorMessage(message)
      !message && setIsError(true)
    }
  }

  return { errorMessage, signup }
}
