import dayjs from "dayjs";
//hooks
import { useRef } from "react";
import { useTaskLink } from "../../hooks/useTaskLink";
import { useTaskDraggable } from "../../hooks/useTaskDraggable";
//interfaces
import { Task } from "../../interfaces";
//styles
import styles from './Board.module.scss'
//components
import { TaskStatusChangeBtn } from "../../components/ui/TaskStatusChangeBtn/TaskStatusChangeBtn";
import { TaskDeleteBtn } from "../../components/ui/TaskDeleteBtn/TaskDeleteBtn";
import { TaskPrioChangeBtn } from "../../components/ui/TaskPrioChangeBtn/TaskPrioChangeBtn";

interface TaskCardProps {
    task: Task
}

export const TaskCard = ({ task }: TaskCardProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const { linkAttributes } = useTaskLink(task, ref)
    const { draggableAttributes } = useTaskDraggable(task, ref)

    return (
        <div className={styles.taskCard} ref={ref} {...linkAttributes} {...draggableAttributes}>
            <p>{task.description}</p>
            {task.dueDate && task.fromDate && <span className={styles.date}>
                {dayjs.unix(task.fromDate).format('DD/MM HH:mm')}  -  {dayjs.unix(task.dueDate).format('DD/MM HH:mm')}
            </span>}
            <hr />
            <div className={styles.infoButtonRow}>
                <TaskPrioChangeBtn task={task} />
                <div>
                    <TaskStatusChangeBtn task={task} />
                </div>
                <TaskDeleteBtn task={task} />
            </div>
        </div>
    );
}
