import { useState, useEffect } from 'react'
import { useDataContext } from './useDataContext'
import { Task } from '../interfaces'

export const useTeamTasks = (teamId: string) => {
    const [tasks, setTasks] = useState<Task[]>([])
    const { tasks: allTasks } = useDataContext()

    useEffect(() => {
        if (allTasks) {
            const teamTasks = allTasks.filter((task: Task) => task.teamId === teamId)
            setTasks(teamTasks)
        }
    }, [allTasks, teamId])

    return { tasks }
}