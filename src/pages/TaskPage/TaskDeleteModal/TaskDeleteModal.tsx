//hooks
import { useDb } from "../../../hooks/useDb";
import { useDataContext } from "../../../hooks/useDataContext";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
//interfaces
import { Task } from "../../../interfaces";
//styles
import styles from './TaskDeleteModal.module.scss'
//components
import { DeleteModal } from "../../../components/modals/DeleteModal/DeleteModal";

interface TaskDeleteModalProps {
    task: Task
}

export const TaskDeleteModal = ({ task }: TaskDeleteModalProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const { goalSteps } = useDataContext()
    const navigate = useNavigate()
    const { removeDocument: removeTask } = useDb('tasks')
    const { removeDocument: removeGoalStep } = useDb('goalSteps')

    const handleDelete = () => {
        removeTask(task.id!)
        const goalStep = goalSteps?.find(goalStep => goalStep.type === 'task' && goalStep.taskID === task.id)
        if (goalStep) {
            removeGoalStep(goalStep.id!)
        }
        setIsOpen(false)
        navigate(-1)
    }

    return (
        <>
            <button
                className={styles.openModalButton}
                type='button'
                onClick={() => { setIsOpen(true) }}>
                Delete task
            </button>
            <DeleteModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title='Remove Task'
                description='This action will permanently remove this task.
                If this task was created as a step of goal, it will be also removed from goal page.'
                handleDeleteBtnClick={handleDelete}
            />
        </>
    );
}