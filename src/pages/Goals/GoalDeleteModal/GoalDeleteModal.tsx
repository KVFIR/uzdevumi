//interfaces
import { Goal } from "../../../interfaces";
//hooks
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../../hooks/useDataContext";
import { useDb } from "../../../hooks/useDb";
//styles
import styles from './GoalDeleteModal.module.scss'
//components
import { DeleteModal } from "../../../components/modals/DeleteModal/DeleteModal";

interface GoalDeleteModalProps {
    goal: Goal
}

export const GoalDeleteModal = ({ goal }: GoalDeleteModalProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const { goalSteps } = useDataContext()
    const { removeDocument: removeGoal } = useDb('goals')
    const { removeDocument: removeGoalStep } = useDb('goalSteps')

    const handleDelete = () => {
        removeGoal(goal.id!)
        goalSteps?.filter(goalStep => goalStep.goalID === goal.id).forEach(goalStep => {
            removeGoalStep(goalStep.id!)
        })
        navigate(-1)
    }

    return (
        <>
            <button
                className={styles.openModalButton}
                type='button'
                onClick={() => { setIsOpen(true) }}>
                Delete Goal
            </button>
            <DeleteModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title='Remove Goal'
                description='This action will pernamently remove this status and all associated with it steps, including tasks displayed in other part of application'
                handleDeleteBtnClick={handleDelete}
            />
        </>
    );
}