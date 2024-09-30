import { FormEvent, ChangeEvent, useState } from 'react';
//interfaces
import { BooleanGoalStep } from '../../../interfaces';
//hooks
import { useDb } from '../../../hooks/useDb';
import { useNewGoalContext } from '../../../hooks/useNewGoalContext';
//styles
import styles from './AddGoalStepForm.module.scss'

interface AddBooleanStepFormProps {
    goalID: string | undefined
}

export const AddBooleanStepForm = ({ goalID }: AddBooleanStepFormProps) => {
    const { addDocument } = useDb('goalSteps')
    const [description, setDescription] = useState('')
    const newGoalCtx = useNewGoalContext()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const step: BooleanGoalStep = {
            type: 'boolean',
            description: description,
            progress: 0
        }
        newGoalCtx ? newGoalCtx.addStepInNewGoal(step) : addDocument({ ...step, goalID: goalID })
        setDescription('')
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
                    placeholder='Is something done or not?'
                    value={description}
                    onChange={handleDescriptionChange}
                    required={true}
                />
            </label>
            <button className={styles.submitButton} type='submit'>
                Add step
            </button>
        </form>
    );
}
