import { createContext, useState, ReactNode } from "react";
import { BooleanGoalStep, NumberGoalStep, TaskGoalStep } from "../interfaces";

interface NewGoalContextProviderProps {
    children: ReactNode
}

export interface NewGoalContextInterface {
    addStepInNewGoal: (step: NumberGoalStep | BooleanGoalStep | TaskGoalStep) => void
    updateStepInNewGoal: (stepId: string, changeObj: {}) => void
    removeStepInNewGoal: (stepId: string) => void
    steps: (NumberGoalStep | BooleanGoalStep | TaskGoalStep)[]
}
export const NewGoalContext = createContext<NewGoalContextInterface | null>(null)

export const NewGoalContextProvider = ({ children }: NewGoalContextProviderProps) => {
    const [steps, setSteps] = useState<(NumberGoalStep | BooleanGoalStep | TaskGoalStep)[]>([])

    const addStepInNewGoal = (step: NumberGoalStep | BooleanGoalStep | TaskGoalStep) => {
        setSteps(current => [...current, { ...step, id: ((new Date()).getTime()).toString() }])
    }

    const updateStepInNewGoal = (stepId: string, changeObj: {}) => {
        setSteps(current => current.map(step => {
            return step.id === stepId ? { ...step, ...changeObj } : step
        }))
    }

    const removeStepInNewGoal = (stepId: string) => {
        setSteps(current => current.filter(step => step.id !== stepId))
    }

    return (
        <NewGoalContext.Provider value={{ steps, addStepInNewGoal, updateStepInNewGoal, removeStepInNewGoal }}>
            {children}
        </NewGoalContext.Provider>
    )
}

