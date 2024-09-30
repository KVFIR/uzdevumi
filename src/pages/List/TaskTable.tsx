//interfaces
import { Status, Task } from '../../interfaces'
//hooks
import { useState, useRef } from 'react'
import { useDataContext } from '../../hooks/useDataContext'
import { useStatusOnDrop } from '../../hooks/useStatusOnDrop'
//styles
import styles from './List.module.scss'
//components
import { AnimatedPopover } from '../../components/AnimatedPopover/AnimatedPopover'
import { AddTaskForm } from '../../components/forms/AddTaskForm/AddTaskForm'
import { StatusOrderChangeBtn } from '../../components/ui/StatusOrderChangeBtn/StatusOrderChangeBtn'
import { StatusDeleteModal } from '../../components/ui/StatusDeleteModal/StatusDeleteModal'
import { StatusHideBtn } from '../../components/ui/StatusHideBtn/StatusHideBtn'
import { TaskTableItem } from '../../components/TaskTableItem/TaskTableItem'

interface TaskTableProps {
    status: Status
}

export const TaskTable = ({ status }: TaskTableProps) => {

    const ref = useRef<HTMLTableElement>(null)
    const { tasks } = useDataContext()
    const [showTable, setShowTable] = useState(true)
    const statusTasks = tasks?.filter((i: Task) => i.statusId === status.id)
    const { statusOnDropAttributes } = useStatusOnDrop(status, ref)

    return (
        <table className={styles.listContainer} ref={ref} {...statusOnDropAttributes}>
            <caption>
                <StatusHideBtn showStatus={showTable} setShowStatus={setShowTable} />
                <span
                    className={styles.statusText}
                    style={{ backgroundColor: status.color }}>
                    {status.name.toUpperCase()}
                </span>
                <AnimatedPopover
                    className={styles.addTaskBtn}
                    buttonText='+'
                    aria-label='Click to open window where you can add new task'
                    type='button'
                >
                    <AddTaskForm
                        className={styles.addTaskForm}
                        defaultStatus={status}
                    />
                </AnimatedPopover>
            </caption>
            <tbody>
                <tr>
                    <th colSpan={2} aria-hidden='true' />
                    <th className={`${styles.thDueDate} ${styles.smallCell}`}>
                        Due:
                    </th>
                    <th className={styles.smallCell}>
                        <StatusOrderChangeBtn
                            variant='up'
                            elemId={status.id!}
                            current={status}
                        />
                        <StatusOrderChangeBtn
                            variant='down'
                            elemId={status.id!}
                            current={status} />
                    </th>
                    <th className={styles.smallCell}>
                        <StatusDeleteModal status={status} />
                    </th>
                </tr>
                {showTable ? <>
                    {!statusTasks || statusTasks.length === 0 ?
                        <tr>
                            <td
                                className={styles.noTasks}
                                colSpan={5}>
                                No tasks
                            </td>
                        </tr>
                        : statusTasks.map((task: Task) => (
                            <TaskTableItem key={task.id} task={task} draggable />
                        ))}</>
                    :
                    <tr>
                        <td
                            colSpan={5}
                            className={styles.hiddenTableCell} />
                    </tr>}
            </tbody>
        </table >
    );
}

