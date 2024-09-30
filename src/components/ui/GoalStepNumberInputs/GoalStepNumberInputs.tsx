//interfaces
import { NumberGoalStep } from "../../../interfaces";
//hooks
import { useDb } from "../../../hooks/useDb";
import { useNewGoalContext } from "../../../hooks/useNewGoalContext";
//styles
import styles from './GoalStepNumberInputs.module.scss'

interface GoalStepNumberInputsProps {
    goalStep: NumberGoalStep
}

const getValueChangeObj = (input: string, target: number) => {
    const inputValue = parseInt(input)
    if (input === '' || inputValue < 0) return { value: 0 }
    if (inputValue < target) return { value: inputValue, progress: inputValue / target }
    if (inputValue >= target) return { value: target, progress: 1 }
    return {}
}

const getTargetChangeObj = (input: string, value: number, target: number) => {
    const inputValue = parseInt(input)
    if (input === '') return { target: 0, value: 0, progress: 0 }
    if (inputValue > value) return { target: inputValue, progress: value / inputValue }
    if (inputValue <= value) return { target: inputValue, value: inputValue, progress: 1 }
    return {}
}

export const GoalStepNumberInputs = ({ goalStep: { value, target, id } }: GoalStepNumberInputsProps) => {
    const { updateDocument } = useDb('goalSteps')
    const newGoalCtx = useNewGoalContext()

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedValues = getValueChangeObj(e.target.value, target)
        if (newGoalCtx) {
            newGoalCtx.updateStepInNewGoal(id!, updatedValues)
            return
        }
        updateDocument(id!, updatedValues)
    }

    const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedValues = getTargetChangeObj(e.target.value, value, target)
        if (newGoalCtx) {
            newGoalCtx.updateStepInNewGoal(id!, updatedValues)
            return
        }
        updateDocument(id!, updatedValues)
    }

    return (
        <div className={styles.goalStepNumberInputs}>
            <input
                className={styles.valueInput}
                type="number"
                aria-label='Current number step value'
                max={target}
                value={value}
                onChange={handleValueChange} />
            <input
                className={styles.targetInput}
                type="number"
                aria-label='Current number step target'
                value={target}
                min={value}
                onChange={handleTargetChange} />
        </div>
    );
}