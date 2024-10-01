
import React, { createContext, useEffect, useState } from "react";
import { useCollectionSub } from '../hooks/useCollectionSub';
import { Task, Space, Status, Goal, NumberGoalStep, BooleanGoalStep, TaskGoalStep } from '../interfaces'

interface DataContextProviderProps {
    children: React.ReactNode
    uid: string
}

interface collectionData<T> {
    data: T[] | null,
    isPending: boolean,
}

export interface DataContextInterface {
    tasks: Task[] | null
    spaces: Space[] | null
    statuses: Status[] | null
    goals: Goal[] | null
    goalSteps: (NumberGoalStep | BooleanGoalStep | TaskGoalStep)[] | null
    selectedSpace: Space | null
    setSelectedSpace: React.Dispatch<React.SetStateAction<Space | null>>
    isPending: boolean
}

export const DataContext = createContext<DataContextInterface | null>(null)

export const DataContextProvider = ({ children, uid }: DataContextProviderProps) => {
    const spaces = useCollectionSub('spaces', uid) as collectionData<Space>
    const tasks = useCollectionSub('tasks', uid) as collectionData<Task>
    const statuses = useCollectionSub('statuses', uid) as collectionData<Status>
    const goals = useCollectionSub('goals', uid) as collectionData<Goal>
    const goalSteps = useCollectionSub('goalSteps', uid) as collectionData<(NumberGoalStep | BooleanGoalStep | TaskGoalStep)>
    const [selectedSpace, setSelectedSpace] = useState<Space | null>(null)

    const isAnyDataPending = spaces.isPending && tasks.isPending && statuses.isPending && goals.isPending && goalSteps.isPending

    useEffect(() => {
        spaces.data && setSelectedSpace(spaces.data[0])
    }, [spaces.data])

    const data = {
        tasks: tasks.data,
        spaces: spaces.data,
        statuses: statuses.data && statuses.data.sort((a, b) => a.orderIndex - b.orderIndex),
        selectedSpace,
        setSelectedSpace,
        goals: goals.data,
        goalSteps: goalSteps.data,
        isPending: isAnyDataPending,
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}