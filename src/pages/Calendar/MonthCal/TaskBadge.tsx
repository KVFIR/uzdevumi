//interfaces
import { Task } from "../../../interfaces";
//hooks
import { useDataContext } from "../../../hooks/useDataContext";
import { useRef } from "react";
import { useTaskLink } from "../../../hooks/useTaskLink";
//styles
import styles from './MonthCal.module.scss'

interface TaskBadgeProps {
    task: Task
}

export const TaskBadge = ({ task }: TaskBadgeProps) => {
    const { statuses } = useDataContext()
    const ref = useRef<HTMLDivElement>(null)
    const { linkAttributes } = useTaskLink(task, ref)

    return (
        <div
            ref={ref}
            {...linkAttributes}
            style={{
                backgroundColor: statuses?.find((status) => status.id! === task.statusId)?.color,
            }}
            className={styles.taskBadge}
        />
    );
}
