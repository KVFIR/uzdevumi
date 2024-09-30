//interfaces
import { GoalStep } from '../../../interfaces'
//hooks
import { useDb } from '../../../hooks/useDb'
import { useNewGoalContext } from "../../../hooks/useNewGoalContext";
//styles
import styles from './GoalStepDeleteBtn.module.scss'

interface GoalStepDeleteBtnProps {
    goalStep: GoalStep
}

export const GoalStepDeleteBtn = ({ goalStep }: GoalStepDeleteBtnProps) => {
    const { removeDocument } = useDb('goalSteps')
    const newGoalCtx = useNewGoalContext()

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (newGoalCtx) {
            newGoalCtx.removeStepInNewGoal(goalStep.id!)
            return
        }
        removeDocument(goalStep.id!)
    }

    return (
        <button
            className={styles.deleteGoalStepBtn}
            aria-label='Delete goal step'
            onClick={handleClick}
        />
    );
}
