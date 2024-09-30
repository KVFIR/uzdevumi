import { FormEvent, ChangeEvent, useState } from 'react'
//interfaces
import { NumberGoalStep } from '../../../interfaces'
//hooks
import { useDb } from '../../../hooks/useDb'
import { useNewGoalContext } from "../../../hooks/useNewGoalContext";
//styles
import styles from './AddGoalStepForm.module.scss'

interface AddNumberStepFormProps {
    goalID: string | undefined
}

export const AddNumberStepForm = ({ goalID }: AddNumberStepFormProps) => {
    const { addDocument } = useDb('goalSteps')
    const newGoalCtx = useNewGoalContext()
    const [description, setDescription] = useState('')
    const [target, setTarget] = useState(0)
    const [value, setValue] = useState(0)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const step: NumberGoalStep = {
            type: 'number',
            description: description,
            value: value,
            target: target,
            progress: target !== 0 ? value / target : 1
        }

        newGoalCtx ? newGoalCtx.addStepInNewGoal(step) : addDocument({ ...step, goalID: goalID })
        setDescription('')
        setValue(0)
        setTarget(0)
    }

    const handleTargetChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseInt(e.target.value)
        if (inputValue < value) {
            setTarget(value)
        } else {
            setTarget(inputValue)
        }
    }

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseInt(e.target.value)
        if (inputValue > target) {
            setValue(target)
        } else {
            setValue(inputValue)
        }
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Description:
                <input
                    className={styles.textInput}
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder='ex. I have to write 40 pages'
                    required={true}
                />
            </label>
            <label>
                Target:
                <input
                    type="number"
                    className={styles.textInput}
                    value={target}
                    pattern="^[0-9]*$"
                    min={value}
                    onChange={handleTargetChange}
                    required={true}
                    placeholder='40' />
            </label>
            <label>
                Begin with:
                <input
                    type="number"
                    className={styles.textInput}
                    value={value}
                    min={0}
                    pattern="^[0-9]*$"
                    onChange={handleValueChange}
                    required={true} />
            </label>
            <button className={styles.submitButton} type='submit'>Add step</button>
        </form>
    );
}