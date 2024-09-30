//interfaces
import { NumberGoalStep } from "../../../interfaces";
//styles
import styles from './Steps.module.scss'
//components
import { GoalStepCheckbox } from "../../../components/ui/GoalStepCheckbox/GoalStepCheckbox";
import { GoalStepNumberInputs } from "../../../components/ui/GoalStepNumberInputs/GoalStepNumberInputs";
import { GoalStepNumButtons } from "../../../components/ui/GoalStepNumButtons/GoalStepNumButtons";
import { GoalStepDeleteBtn } from "../../../components/ui/GoalStepDeleteBtn/GoalStepDeleteBtn";


interface NumberStepProps {
    step: NumberGoalStep
}

export const NumberStep = ({ step }: NumberStepProps) => {
    return (
        <tr>
            <td className={styles.smallCell}>
                <GoalStepCheckbox goalStep={step} />
            </td>
            <td className={styles.numberInputCell}>
                <GoalStepNumberInputs goalStep={step} />
            </td>
            <td className={styles.descriptionCell}>
                {step.description}
            </td>
            <td colSpan={2} className={styles.centerCell}>
                <GoalStepNumButtons goalStep={step} />
            </td>
            <td className={styles.smallCell}>
                <GoalStepDeleteBtn goalStep={step} />
            </td>
        </tr>
    );
}