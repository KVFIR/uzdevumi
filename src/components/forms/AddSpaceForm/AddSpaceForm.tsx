//hooks
import { useState } from 'react'
import { useDb } from '../../../hooks/useDb'
//styles
import styles from './AddSpaceForm.module.scss'

interface AddSpaceFormProps {
    handleShowAddSpaceForm: () => void
}

export const AddSpaceForm = ({ handleShowAddSpaceForm }: AddSpaceFormProps) => {
    const [name, setName] = useState('')
    const { addDocument } = useDb('spaces')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addDocument({ name: name })
        handleShowAddSpaceForm()
    }


    return (
        <div className={styles.formContainer}>
            <h3>Add new Space</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Space name:
                    <input required type='text' value={name} onChange={(e) => { setName(e.target.value) }} maxLength={25} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}