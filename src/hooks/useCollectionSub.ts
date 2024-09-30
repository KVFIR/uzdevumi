//interfaces
import { Task, Space, Status, GoalStep, Goal } from '../interfaces'
//hooks
import { useState, useEffect } from 'react'
import { useErrorPromptContext } from './useErrorPromptContext'
//firebase
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

type Data = Task[] | Space[] | Status[] | Goal[] | GoalStep[]

export const useCollectionSub = (c: string, uid: string) => {
  const [isPending, setIsPending] = useState(false)
  const [data, setData] = useState<Data | null>(null)
  const { setIsError } = useErrorPromptContext()

  useEffect(() => {
    setIsPending(true)
    const col = query(collection(db, c), where('uid', '==', uid))
    const unsubscribe = onSnapshot(
      col,
      (snapshot) => {
        const newData = snapshot.docs.map((i) => ({
          ...i.data(),
          id: i.id,
        })) as Data
        setData(newData)
        setIsPending(false)
      },
      () => {
        setIsError(true)
      }
    )

    return () => {
      unsubscribe()
    }
  }, [c, uid, setIsError])

  return { data, isPending }
}
