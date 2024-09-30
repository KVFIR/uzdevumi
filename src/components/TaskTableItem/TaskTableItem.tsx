import dayjs from 'dayjs';
//interfaces
import { Task } from '../../interfaces';
//hooks
import { useRef } from 'react';
import { useTaskLink } from '../../hooks/useTaskLink';
import { useTaskDraggable } from '../../hooks/useTaskDraggable';
//styles
import styles from './TaskTableItem.module.scss'
//components
import { TaskDeleteBtn } from '../ui/TaskDeleteBtn/TaskDeleteBtn';
import { TaskPrioChangeBtn } from '../ui/TaskPrioChangeBtn/TaskPrioChangeBtn';
import { TaskStatusChangeBtn } from '../ui/TaskStatusChangeBtn/TaskStatusChangeBtn';

interface TaskTableItemProps {
    task: Task
    draggable?: boolean
}

export const TaskTableItem = ({ task, draggable }: TaskTableItemProps) => {
    const ref = useRef<HTMLTableRowElement>(null)
    const { linkAttributes } = useTaskLink(task, ref)
    const { draggableAttributes } = useTaskDraggable(task, ref)
    const dragAttributes = draggable ? draggableAttributes : {}

    return (
        <tr
            ref={ref}
            className={styles.tableRow}
            {...linkAttributes}
            {...dragAttributes}
        >
            <td className={styles.smallCell}>
                <TaskStatusChangeBtn task={task} />
            </td>
            <td>
                <p>{task.description}</p>
            </td>
            <td className={`${styles.smallCell} ${styles.itemDate}`}>
                {task.dueDate ? dayjs.unix(task.dueDate).format('DD/MM') : '-/-'}
            </td>
            <td className={styles.smallCell}>
                <TaskPrioChangeBtn task={task} />
            </td>
            <td className={styles.smallCell}>
                <TaskDeleteBtn task={task} />
            </td>
        </tr>
    );
}
