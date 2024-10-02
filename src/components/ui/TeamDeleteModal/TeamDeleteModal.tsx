//interfaces
import { Team } from "../../../interfaces";
import { ComponentPropsWithoutRef } from 'react'
//styles
import styles from './TeamDeleteModal.module.scss'
//hooks
import { useState } from 'react'
import { useDataContext } from "../../../hooks/useDataContext";
import { useDb } from "../../../hooks/useDb";
//components
import { DeleteModal } from "../../Modals/DeleteModal/DeleteModal";

interface TeamDeleteModalProps {
    team: Team
    className: string
}

export const TeamDeleteModal = ({ team, className, ...props }: TeamDeleteModalProps & ComponentPropsWithoutRef<'button'>) => {
    const [isOpen, setIsOpen] = useState(false)
    const { tasks, statuses } = useDataContext()
    const { removeDocument: removeTask } = useDb('tasks')
    const { removeDocument: removeStatus } = useDb('statuses')
    const { removeDocument: removeTeam } = useDb('teams')

    const handleDelete = () => {
        tasks?.filter(task => task.teamId === team.id).forEach(task => removeTask(task.id!))
        statuses?.filter(status => status.teamId === team.id).forEach(team => removeStatus(team.id!))
        removeTeam(team.id!)
        setIsOpen(false)
    }

    return (
        <>
            <button
                onClick={() => { setIsOpen(true) }}
                className={`${styles.openDialogButton} ${className}`}
                aria-label='Click to open window where you can remove team'
                {...props}
            />
            <DeleteModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title='Remove Team'
                description='This action will pernamently remove this team and all associated with it statuses and tasks. Are you absolutely sure?'
                handleDeleteBtnClick={handleDelete}
            />
        </>
    );
}