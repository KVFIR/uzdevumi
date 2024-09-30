import { UserContext } from '../contexts/UserContext'
//hooks
import { useErrorPromptContext } from './useErrorPromptContext'
import { useState, useContext } from 'react'
//utils
import { getErrorMessage } from '../utils/getErrorMessage'
//firebase
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogin = () => {
  const { dispatch } = useContext(UserContext)
  const [errorMessage, setErrorMessage] = useState<null | string>(null)
  const { setIsError } = useErrorPromptContext()

  const login = (email: string, password: string) => {
    setErrorMessage(null)
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        dispatch({ type: 'LOGIN', payload: response.user })
      })
      .catch((err) => {
        const message = getErrorMessage(err.code)
        setErrorMessage(message)
        !message && setIsError(true)
        // displays error message when user passes wrong email/password, every other auth error fires ErrorPrompt
      })
  }

  return { errorMessage, login }
}
