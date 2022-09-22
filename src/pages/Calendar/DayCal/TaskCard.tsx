import dayjs, { Dayjs } from "dayjs";
//interfaces
import { Task } from "../../../interfaces";
//hooks
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../../hooks/useDataContext";
//styles
import styles from './DayCal.module.scss'

interface TaskCardProps {
    task: Task
    date: Dayjs
}

export const TaskCard = ({ task, date }: TaskCardProps) => {
    const navigate = useNavigate()
    const { statuses } = useDataContext()
    const fromDate = dayjs.unix(task.fromDate!)
    const dueDate = dayjs.unix(task.dueDate!)

    return (
        <div
            className={styles.taskCard}
            style={{
                gridRowStart: fromDate.isSame(date, 'day') ? fromDate.hour() + 1 : 1,
                gridRowEnd: dueDate.isSame(date, 'day') ? dueDate.hour() + 1 : 25,
                backgroundColor: statuses?.find((status) => task.statusId === status.id!)?.color,
            }}
            onClick={() => { navigate(`/Dashboard/${task.id}`) }}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === 'Space') navigate(`/Dashboard/${task.id}`) }}
            aria-label={'Click to move to task page'}
            role='link'
            tabIndex={0}
        >
            <p>
                {task.description}
                <br />
                <span className={styles.timeSpan} >
                    {fromDate.format('HH:mm')}-{dueDate.format('HH:mm')}
                    <br />
                    {fromDate.format('DD/MM/RRRR') !== dueDate.format('DD/MM/RRRR') && <>{fromDate.format('DD/MM')}-{dueDate.format('DD/MM')}<br /></>}
                </span>
            </p>
        </div>
    );
}