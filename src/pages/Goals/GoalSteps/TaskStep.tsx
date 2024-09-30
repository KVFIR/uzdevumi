import dayjs from "dayjs";
//interfaces
import { Task, TaskGoalStep } from "../../../interfaces";
//hooks
import { useRef } from "react";
import { useTaskLink } from "../../../hooks/useTaskLink";
//styles
import styles from './Steps.module.scss'
//components
import { GoalStepCheckbox } from "../../../components/ui/GoalStepCheckbox/GoalStepCheckbox";
import { TaskPrioChangeBtn } from "../../../components/ui/TaskPrioChangeBtn/TaskPrioChangeBtn";
import { TaskStatusChangeBtn } from "../../../components/ui/TaskStatusChangeBtn/TaskStatusChangeBtn";
import { TaskDeleteBtn } from "../../../components/ui/TaskDeleteBtn/TaskDeleteBtn";

type TaskStepProps = {
    step: TaskGoalStep
    task: Task
}

export const TaskStep = ({ step, task }: TaskStepProps) => {
    const ref = useRef<HTMLTableRowElement>(null)
    const { linkAttributes } = useTaskLink(task, ref)

    return (
        <tr className={styles.taskStep} ref={ref} {...linkAttributes}>
            {task && <>
                <td className={styles.smallCell}>
                    <GoalStepCheckbox goalStep={step} />
                </td>
                <td className={styles.numberInputCell}>
                    <div className={styles.icon}>
                        <TaskStatusChangeBtn task={task} />
                    </div>
                </td>
                <td className={styles.descriptionCell}>
                    {task.description}
                </td>
                <td className={styles.dueDate}>
                    {task.dueDate ? dayjs.unix(task.dueDate).format('DD/MM') : ' '}
                </td>
                <td className={styles.smallCell}>
                    <TaskPrioChangeBtn task={task} />
                </td>
                <td className={styles.smallCell}>
                    <TaskDeleteBtn task={task} />
                </td>
            </>}
        </tr>
    );
}