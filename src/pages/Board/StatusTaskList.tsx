//interfaces
import { Status } from "../../interfaces";
//hooks
import { useRef } from "react";
import { useDataContext } from "../../hooks/useDataContext";
import { useStatusOnDrop } from "../../hooks/useStatusOnDrop";
//styles
import styles from './Board.module.scss'
//components
import { AnimatedPopover } from "../../components/AnimatedPopover/AnimatedPopover";
import { TaskCard } from "./TaskCard";
import { AddTaskForm } from "../../components/forms/AddTaskForm/AddTaskForm";

interface StatusTaskListProps {
    status: Status
}

export const StatusTaskList = ({ status }: StatusTaskListProps) => {
    const { tasks } = useDataContext()
    const ref = useRef<HTMLDivElement>(null)
    const { statusOnDropAttributes } = useStatusOnDrop(status, ref)
    const statusTasks = tasks?.filter(task => task.statusId === status.id!)

    return (
        <div className={styles.taskContainer} {...statusOnDropAttributes} ref={ref}>
            <AnimatedPopover className={styles.addTaskBtn} buttonText='Add new task'>
                <AddTaskForm
                    defaultStatus={status}
                />
            </AnimatedPopover>
            {statusTasks?.map(task => (
                <TaskCard
                    key={task.id}
                    task={task}
                />
            ))}
        </div>
    );
}