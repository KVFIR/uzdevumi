//interfaces
import { NumberGoalStep } from "../../../interfaces";
//hooks
import { useDb } from "../../../hooks/useDb";
import { useNewGoalContext } from "../../../hooks/useNewGoalContext";
//styles
import styles from './GoalStepNumButtons.module.scss'

interface GoalStepNumButtonsProps {
    goalStep: NumberGoalStep
}

const getIncChangeObj = (value: number, target: number, progress: number) => {
    if (value + 1 < target && progress !== 1) return { value: value + 1, progress: value / target }
    if (value + 1 === target && progress !== 1) return { value: target, progress: 1 }
    return {}
}

const getDecChangeObj = (value: number, target: number) => {
    if (value > 0 && target >= value) return { value: value - 1, progress: (value - 1) / target }
    return {}
}

export const GoalStepNumButtons = ({ goalStep: { id, value, target, progress } }: GoalStepNumButtonsProps) => {
    const { updateDocument } = useDb('goalSteps')
    const newGoalCtx = useNewGoalContext()

    const handleIncButtonClick = () => {
        const updatedValues = getIncChangeObj(value, target, progress)

        if (newGoalCtx) {
            newGoalCtx.updateStepInNewGoal(id!, updatedValues)
            return
        }
        updateDocument(id!, updatedValues)
    }

    const handleDecButtonClick = () => {
        const updatedValues = getDecChangeObj(value, target)

        if (newGoalCtx) {
            newGoalCtx.updateStepInNewGoal(id!, updatedValues)
            return
        }
        updateDocument(id!, updatedValues)
    }

    return (
        <>
            <button
                onClick={handleIncButtonClick}
                className={`${styles.incButton} ${styles.numButton}`}
                aria-label='Increment current value by one'
            >+</button>
            <button
                onClick={handleDecButtonClick}
                className={`${styles.decButton} ${styles.numButton}`}
                aria-label='Decrement current value by one'
            >-</button>
        </>
    );
}