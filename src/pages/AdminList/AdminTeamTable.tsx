import { useTranslation } from 'react-i18next';
import { useState, useRef, useMemo } from 'react'
import { useDataContext } from '../../hooks/useDataContext'
import { useTeamTasks } from '../../hooks/useTeamTasks'
import { useTeamOnDrop } from '../../hooks/useTeamOnDrop'
import styles from './AdminList.module.scss'
import { AnimatedPopover } from '../../components/AnimatedPopover/AnimatedPopover'
import { AddTaskForm } from '../../components/forms/AddTaskForm/AddTaskForm'
import { TaskTableItem } from '../../components/TaskTableItem/TaskTableItem'
import { Team, Task } from '../../interfaces'

interface AdminTeamTableProps {
    team: Team
}

export const AdminTeamTable = ({ team }: AdminTeamTableProps) => {
    const { t } = useTranslation();
    const ref = useRef<HTMLTableElement>(null)
    const { statuses } = useDataContext()
    const [showTable, setShowTable] = useState(true)
    const { tasks } = useTeamTasks(team.id || '')
    const { teamOnDropAttributes } = useTeamOnDrop(team, ref)

    const [filterStatus, setFilterStatus] = useState<string>('all')
    const [sortBy, setSortBy] = useState<'dueDate' | 'priority'>('dueDate')
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

    const filteredAndSortedTasks = useMemo(() => {
        let filtered = tasks
        if (filterStatus !== 'all') {
            filtered = tasks.filter(task => task.statusId === filterStatus)
        }

        return filtered.sort((a, b) => {
            if (sortBy === 'dueDate') {
                return sortOrder === 'asc' 
                    ? (new Date(a.dueDate || 0).getTime() - new Date(b.dueDate || 0).getTime())
                    : (new Date(b.dueDate || 0).getTime() - new Date(a.dueDate || 0).getTime())
            } else {
                const priorityA = typeof a.priority === 'number' ? a.priority : 0;
                const priorityB = typeof b.priority === 'number' ? b.priority : 0;
                return sortOrder === 'asc'
                    ? priorityA - priorityB
                    : priorityB - priorityA
            }
        })
    }, [tasks, filterStatus, sortBy, sortOrder])

    return (
        <table className={styles.listContainer} ref={ref} {...teamOnDropAttributes}>
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
                        defaultTeam={team}
                    />
                </AnimatedPopover>
            </caption>
            <tbody>
                <tr>
                    <th colSpan={2}>
                        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                            <option value="all">{t('filter.allStatuses')}</option>
                            {statuses && statuses.map(status => (
                                <option key={status.id} value={status.id}>{status.name}</option>
                            ))}
                        </select>
                    </th>
                    <th>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'dueDate' | 'priority')}>
                            <option value="dueDate">{t('sort.dueDate')}</option>
                            <option value="priority">{t('sort.priority')}</option>
                        </select>
                    </th>
                    <th>
                        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                            {sortOrder === 'asc' ? '↑' : '↓'}
                        </button>
                    </th>
                </tr>
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
                    filteredAndSortedTasks.length > 0 ? (
                        filteredAndSortedTasks.map((task: Task) => (
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