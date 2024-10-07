import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react'
import { useDataContext } from '../../hooks/useDataContext'
import { useTeamTasks } from '../../hooks/useTeamTasks'
import styles from './AdminList.module.scss'
import { AnimatedPopover } from '../../components/AnimatedPopover/AnimatedPopover'
import { AddTaskForm } from '../../components/forms/AddTaskForm/AddTaskForm'
import { TaskTableItem } from '../../components/TaskTableItem/TaskTableItem'
import { Team, Task, Status } from '../../interfaces'

interface AdminTeamTableProps {
    team: Team
}

export const AdminTeamTable = ({ team }: AdminTeamTableProps) => {
    const { t } = useTranslation();
    const ref = useRef<HTMLTableElement>(null)
    const { statuses } = useDataContext()
    const [showTable, setShowTable] = useState(true)
    const { tasks } = useTeamTasks(team.id || '')

    // Найдем первый статус для текущей команды
    const defaultStatus = statuses?.find((status: Status) => status.teamId === team.id)

    return (
        <table className={styles.listContainer} ref={ref}>
            <caption>
                <span
                    className={styles.teamText}
                    style={{ backgroundColor: team.color }}>
                    {team.name.toUpperCase()}
                </span>
                <AnimatedPopover
                    className={styles.addTaskBtn}
                    buttonText='+'
                    aria-label={t('help.clickToAddNewTask')}
                    type='button'
                >
                    <AddTaskForm
                        className={styles.addTaskForm}
                        defaultStatus={defaultStatus}
                        teamId={team.id}
                        showTeamSelect={false} // Добавляем этот проп, чтобы скрыть выбор команды
                    />
                </AnimatedPopover>
            </caption>
            <tbody>
                <tr>
                    <th colSpan={2} aria-hidden='true' />
                    <th className={`${styles.thDueDate} ${styles.smallCell}`}>
                        {t('tasks.dueDate')}:
                    </th>
                    <th className={styles.smallCell}>
                        {t('tasks.status')}
                    </th>
                </tr>
                {showTable ? (
                    tasks && tasks.length > 0 ? (
                        tasks.map((task: Task) => (
                            <TaskTableItem key={task.id} task={task} draggable />
                        ))
                    ) : (
                        <tr>
                            <td
                                className={styles.noTasks}
                                colSpan={5}>
                                {t('tasks.noTasks')}
                            </td>
                        </tr>
                    )
                ) : (
                    <tr>
                        <td
                            colSpan={5}
                            className={styles.hiddenTableCell} />
                    </tr>
                )}
            </tbody>
        </table>
    );
}