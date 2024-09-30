//interfaces
import { Space } from "../../../interfaces";
import { ComponentPropsWithoutRef } from 'react'
//styles
import styles from './SpaceDeleteModal.module.scss'
//hooks
import { useState } from 'react'
import { useDataContext } from "../../../hooks/useDataContext";
import { useDb } from "../../../hooks/useDb";
//components
import { DeleteModal } from "../../modals/DeleteModal/DeleteModal";

interface SpaceDeleteModalProps {
    space: Space
    className: string
}

export const SpaceDeleteModal = ({ space, className, ...props }: SpaceDeleteModalProps & ComponentPropsWithoutRef<'button'>) => {
    const [isOpen, setIsOpen] = useState(false)
    const { tasks, statuses } = useDataContext()
    const { removeDocument: removeTask } = useDb('tasks')
    const { removeDocument: removeStatus } = useDb('statuses')
    const { removeDocument: removeSpace } = useDb('spaces')

    const handleDelete = () => {
        tasks?.filter(task => task.spaceId === space.id).forEach(task => removeTask(task.id!))
        statuses?.filter(status => status.spaceId === space.id).forEach(space => removeStatus(space.id!))
        removeSpace(space.id!)
        setIsOpen(false)
    }

    return (
        <>
            <button
                onClick={() => { setIsOpen(true) }}
                className={`${styles.openDialogButton} ${className}`}
                aria-label='Click to open window where you can remove space'
                {...props}
            />
            <DeleteModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title='Remove Space'
                description='This action will pernamently remove this space and all associated with it statuses and tasks. Are you absolutely sure?'
                handleDeleteBtnClick={handleDelete}
            />
        </>
    );
}