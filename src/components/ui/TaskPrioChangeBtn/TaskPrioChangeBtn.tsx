import { getNewPrio } from "../../../utils/getNewPrio";
//interfaces
import { Task } from "../../../interfaces";
//hooks
import { useDb } from "../../../hooks/useDb";
//styles
import styles from './TaskPrioChangeBtn.module.scss'


interface TaskPrioChangeProps {
    task: Task
}

export const TaskPrioChangeBtn = ({ task: { id, priority } }: TaskPrioChangeProps) => {
    const { updateDocument } = useDb('tasks') // handle error res here

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        updateDocument(id!, { priority: getNewPrio(priority) })
    }

    return (
        <button
            type='button'
            aria-label={`Current priorty: ${priority} click to change`}
            className={`${styles.prioButton} ${styles[priority]}`}
            onClick={handleClick}
        />
    );
}