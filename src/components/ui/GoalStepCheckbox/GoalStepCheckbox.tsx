//interfaces
import { BooleanGoalStep, NumberGoalStep, TaskGoalStep } from "../../../interfaces";
//hooks
import { useDb } from "../../../hooks/useDb";
import { useNewGoalContext } from "../../../hooks/useNewGoalContext";

interface GoalStepCheckboxProps {
    goalStep: NumberGoalStep | BooleanGoalStep | TaskGoalStep
}

const getChangesObj = (goalStep: NumberGoalStep | BooleanGoalStep | TaskGoalStep) => {
    let obj = {
        progress: goalStep.progress === 1 ? 0 : 1
    }

    if (goalStep.type === 'number') return {
        ...obj,
        value: goalStep.target
    }

    return obj
}

export const GoalStepCheckbox = ({ goalStep }: GoalStepCheckboxProps) => {
    const { updateDocument } = useDb('goalSteps')
    const newGoalCtx = useNewGoalContext()

    const handleChange = () => {
        if (newGoalCtx) {
            newGoalCtx.updateStepInNewGoal(goalStep.id!, getChangesObj(goalStep))
            return
        }
        updateDocument(goalStep.id!, getChangesObj(goalStep))
    }

    return (
        <input
            type='checkbox'
            aria-label="Mark or unmark goalstep as checked"
            checked={goalStep.progress === 1}
            onChange={handleChange}
        />
    );
}