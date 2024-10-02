import { UserContext } from '../contexts/UserContext'
//hooks
import { useState, useContext } from 'react'
//firebase
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'

export const useLogout = () => {
  const userContext = useContext(UserContext)
  const [isPending, setisPending] = useState(false)
  const [error, setError] = useState(null)

  if (!userContext) {
    throw new Error("useLogout must be used within a UserContextProvider")
  }

  const { dispatch } = userContext

  const logout = () => {
    setisPending(true)
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' })
        setisPending(false)
      })
      .catch((error) => {
        setisPending(false)
        setError(error.message)
      })
  }
  return { logout, isPending, error }
}
