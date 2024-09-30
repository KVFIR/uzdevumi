//interfaces
import { BooleanGoalStep } from "../../../interfaces";
//styles
import styles from './Steps.module.scss';
//components
import { GoalStepCheckbox } from "../../../components/ui/GoalStepCheckbox/GoalStepCheckbox";
import { GoalStepSwitch } from "../../../components/ui/GoalStepSwitch/GoalStepSwitch";
import { GoalStepDeleteBtn } from "../../../components/ui/GoalStepDeleteBtn/GoalStepDeleteBtn";

interface BooleanStepProps {
    step: BooleanGoalStep
}

export const BooleanStep = ({ step }: BooleanStepProps) => {
    return (
        <tr>
            <td className={styles.smallCell}>
                <GoalStepCheckbox goalStep={step} />
            </td>
            <td className={styles.booleanStatusCell}>{step.progress === 1 ? "True" : "False"}</td>
            <td className={styles.descriptionCell}>{step.description}</td>
            <td colSpan={2}>
                <GoalStepSwitch goalStep={step} />
            </td>
            <td className={styles.smallCell}>
                <GoalStepDeleteBtn goalStep={step} />
            </td>
        </tr>
    );
}