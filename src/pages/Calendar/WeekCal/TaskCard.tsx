import dayjs, { Dayjs } from "dayjs";
//interfaces
import { Task } from "../../../interfaces";
//hooks
import { useRef } from "react";
import { useTaskLink } from "../../../hooks/useTaskLink";
import { useDataContext } from "../../../hooks/useDataContext";
//utils
import isBetween from 'dayjs/plugin/isBetween'
//styles
import styles from './WeekCal.module.scss'

dayjs.extend(isBetween)

interface TaskCardProps {
    task: Task
    date: Dayjs
}

export const TaskCard = ({ task, date }: TaskCardProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const { linkAttributes } = useTaskLink(task, ref)
    const { statuses } = useDataContext()
    const fromDate = dayjs.unix(task.fromDate!)
    const dueDate = dayjs.unix(task.dueDate!)

    return (
        <div
            ref={ref}
            {...linkAttributes}
            className={styles.taskCard}
            style={{
                gridRowStart: fromDate.isSame(date, 'day') ? fromDate.hour() + 1 : 1,
                gridRowEnd: dueDate.isSame(date, 'day') ? dueDate.hour() + 1 : 25,
                backgroundColor: statuses?.find((status) => status.id! === task.statusId)?.color,
            }}
        >
            <p>{task.description}</p>
        </div>
    );
}