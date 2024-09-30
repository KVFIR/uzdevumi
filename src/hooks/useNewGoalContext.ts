import { useContext } from 'react'
import { NewGoalContext } from '../contexts/NewGoalContext'

export const useNewGoalContext = () => {
  return useContext(NewGoalContext)
}
