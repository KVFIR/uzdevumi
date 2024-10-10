import React, { createContext, useEffect, useState } from "react";
import { useCollectionSub } from '../hooks/useCollectionSub';
import { Task, Team, Status, Goal, NumberGoalStep, BooleanGoalStep, TaskGoalStep } from '../interfaces'

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
    teams: Team[] | null
    statuses: Status[] | null
    goals: Goal[] | null
    goalSteps: (NumberGoalStep | BooleanGoalStep | TaskGoalStep)[] | null
    selectedTeam: Team | null
    setSelectedTeam: React.Dispatch<React.SetStateAction<Team | null>>
    isPending: boolean
    updateTeams: (teams: Team[]) => void
}

export const DataContext = createContext<DataContextInterface | null>(null)

export const DataContextProvider = ({ children, uid }: DataContextProviderProps) => {
    const teams = useCollectionSub('teams', uid) as collectionData<Team>
    const tasks = useCollectionSub('tasks', uid) as collectionData<Task>
    const statuses = useCollectionSub('statuses', uid) as collectionData<Status>
    const goals = useCollectionSub('goals', uid) as collectionData<Goal>
    const goalSteps = useCollectionSub('goalSteps', uid) as collectionData<(NumberGoalStep | BooleanGoalStep | TaskGoalStep)>
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)
    const [teamsData, setTeamsData] = useState<Team[] | null>(null)

    useEffect(() => {
        teams.data && setSelectedTeam(teams.data[0])
        teams.data && setTeamsData(teams.data)
    }, [teams.data])

    const updateTeams = (newTeams: Team[]) => {
        setTeamsData(newTeams)
    }

    const isAnyDataPending = teams.isPending && tasks.isPending && statuses.isPending && goals.isPending && goalSteps.isPending

    const data = {
        tasks: tasks.data,
        teams: teamsData,
        statuses: statuses.data && statuses.data.sort((a, b) => a.orderIndex - b.orderIndex),
        selectedTeam,
        setSelectedTeam,
        goals: goals.data,
        goalSteps: goalSteps.data,
        isPending: isAnyDataPending,
        updateTeams,
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}