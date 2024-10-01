import { FormEvent, useState } from "react";
//interfaces
import { Goal } from "../../../interfaces";
//hooks
import { useNavigate } from "react-router-dom";
import { useDb } from "../../../hooks/useDb";
//styles
import styles from './NewGoal.module.scss'
//components
import { AddStep } from "../AddStep/AddStep";
import { GoalSteps } from "../GoalSteps/GoalSteps";
import { Layout } from "../../../components/Layout/Layout/Layout";
import { useNewGoalContext } from "../../../hooks/useNewGoalContext";

export const NewGoal = () => {
    const navigate = useNavigate()
    const { addDocument: addGoal } = useDb('goals')
    const { addDocument: addGoalStep } = useDb('goalSteps')
    const newGoalCtx = useNewGoalContext()
    const [title, setTitle] = useState('New Goal')
    const [description, setDescription] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const newGoal: Goal = {
            title: title,
            description: description
        }
        addGoal(newGoal).then(ref => {
            if (ref && newGoalCtx?.steps) {
                newGoalCtx.steps.forEach(step => {
                    addGoalStep({ ...step, goalID: ref.id })
                })
                navigate('/goals')
            }
        })
    }

    return (
        <Layout title={'Goals'}>
            <form className={styles.addGoalForm} id='newGoalForm' onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        className={`${styles.formInput} ${styles.goalTitle}`}
                        type="text"
                        maxLength={25}
                        required
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>
                <label>
                    Description: (optional)
                    <input
                        className={styles.formInput}
                        type="text"
                        maxLength={200}
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </label>
                <GoalSteps steps={newGoalCtx?.steps} />
            </form>
            <AddStep />
            <button
                className={styles.submitButton}
                type='submit'
                form='newGoalForm'>
                Save new goal
            </button>
        </Layout>
    );
}