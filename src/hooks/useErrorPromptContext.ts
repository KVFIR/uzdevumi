import { useContext } from 'react'
import { ErrorPromptContext, ErrorPromptContextInterface } from '../contexts/ErrorPromptContext'

export const useErrorPromptContext = () => {
  return useContext(ErrorPromptContext) as ErrorPromptContextInterface
}
