import { UserContext } from '../contexts/UserContext'
//hooks
import { useState, useContext } from 'react'
//firebase
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'

export const useLogout = () => {
  const { dispatch } = useContext(UserContext)
  const [isPending, setisPending] = useState(false)
  const [error, setError] = useState(null)

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
