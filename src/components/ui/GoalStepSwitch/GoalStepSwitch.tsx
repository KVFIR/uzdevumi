//interfaces
import { BooleanGoalStep } from "../../../interfaces";
//hooks
import { useDb } from "../../../hooks/useDb";
import { useNewGoalContext } from "../../../hooks/useNewGoalContext";
//styles
import styles from './GoalStepSwitch.module.scss'
//components
import { Switch } from "@headlessui/react";

interface GoalStepSwitchProps {
    goalStep: BooleanGoalStep
}

export const GoalStepSwitch = ({ goalStep }: GoalStepSwitchProps) => {
    const { updateDocument } = useDb('goalSteps')
    const newGoalCtx = useNewGoalContext()

    const handleChange = () => {
        const updatedValues = { progress: goalStep.progress === 1 ? 0 : 1 }

        if (newGoalCtx) {
            newGoalCtx.updateStepInNewGoal(goalStep.id!, updatedValues)
        }
        updateDocument(goalStep.id!, updatedValues)
    }

    return (
        <Switch
            className={styles.goalStepSwitch}
            checked={goalStep.progress === 1}
            onChange={handleChange}
            aria-label='Check or uncheck current step as completed'
        >
            <span className={(goalStep.progress === 1) ? styles.switchInnerEnabled : styles.switchInnerDisabled} />
        </Switch>
    );
}