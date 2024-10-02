//hooks
import { useState } from 'react'
import { useDb } from '../../../hooks/useDb'
//styles
import styles from './AddTeamForm.module.scss'

interface AddTeamFormProps {
    handleShowAddTeamForm: () => void
}

export const AddTeamForm = ({ handleShowAddTeamForm }: AddTeamFormProps) => {
    const [name, setName] = useState('')
    const { addDocument } = useDb('teams')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addDocument({ name: name })
        handleShowAddTeamForm()
    }


    return (
        <div className={styles.formContainer}>
            <h3>Add new Team</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Team name:
                    <input required type='text' value={name} onChange={(e) => { setName(e.target.value) }} maxLength={25} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}