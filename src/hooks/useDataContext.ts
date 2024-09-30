import { useContext } from 'react'
import { DataContext, DataContextInterface } from '../contexts/DataContext'

export const useDataContext = () => {
  return useContext(DataContext) as DataContextInterface
}
