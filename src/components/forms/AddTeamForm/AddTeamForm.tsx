import { useState } from 'react'
import { useDb } from '../../../hooks/useDb'
import { useDataContext } from '../../../hooks/useDataContext'
import styles from './AddTeamForm.module.scss'

interface AddTeamFormProps {
    handleShowAddTeamForm: () => void
}

export const AddTeamForm = ({ handleShowAddTeamForm }: AddTeamFormProps) => {
    const [name, setName] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [selectedColor, setSelectedColor] = useState('#000000')
    const { addDocument } = useDb('teams')
    const { teams } = useDataContext()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)

        if (!name) {
            setError('Please enter a team name')
            return
        }

        const newTeam = {
            name,
            color: selectedColor,
            orderIndex: teams ? teams.length : 0
        }

        try {
            const teamRef = await addDocument(newTeam)
            if (teamRef && teamRef.id) {
                const defaultStatuses = [
                    { name: 'PIEŠĶIRTS', color: '#FFD700', teamId: teamRef.id, orderIndex: 0 },
                    { name: 'DARBĪBĀ', color: '#1E90FF', teamId: teamRef.id, orderIndex: 1 },
                    { name: 'IZPILDĪTS', color: '#32CD32', teamId: teamRef.id, orderIndex: 2 }
                ]
                
                for (const status of defaultStatuses) {
                    await addDocument(status, 'statuses')
                }
            }
            handleShowAddTeamForm()
        } catch (err) {
            setError('Failed to add team')
        }
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