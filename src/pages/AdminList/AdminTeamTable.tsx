import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react'
import { useDataContext } from '../../hooks/useDataContext'
import { useTeamTasks } from '../../hooks/useTeamTasks'
import { useTeamOnDrop } from '../../hooks/useTeamOnDrop'
import styles from './AdminList.module.scss'
import { AnimatedPopover } from '../../components/AnimatedPopover/AnimatedPopover'
import { AddTaskForm } from '../../components/forms/AddTaskForm/AddTaskForm'
import { TaskTableItem } from '../../components/TaskTableItem/TaskTableItem'
import { Team, Task } from '../../interfaces'
import { TeamOrderChangeBtn } from '../../components/ui/TeamOrderChangeBtn/TeamOrderChangeBtn'
import { TeamHideBtn } from '../../components/ui/TeamHideBtn/TeamHideBtn' 

interface AdminTeamTableProps {
    team: Team
}

export const AdminTeamTable = ({ team }: AdminTeamTableProps) => {
    const { t } = useTranslation();
    const ref = useRef<HTMLTableElement>(null)
    const { tasks: allTasks } = useDataContext()
    const [showTable, setShowTable] = useState(true)
    const teamTasks = allTasks?.filter((task: Task) => task.teamId === team.id)
    const { teamOnDropAttributes } = useTeamOnDrop(team, ref)

    return (
        <table className={styles.listContainer} ref={ref} {...teamOnDropAttributes}>
            <caption onClick={() => setShowTable(!showTable)}>
                <TeamHideBtn showTeam={showTable} setShowTeam={setShowTable} />
                <span 
                    className={styles.teamText} 
                    style={{ backgroundColor: team.color, cursor: 'pointer' }}
                >
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
                    <th colSpan={2} aria-hidden='true' />
                    <th className={`${styles.thDueDate} ${styles.smallCell}`}>
                        {t('tasks.dueDate')}:
                    </th>
                    <th className={styles.smallCell}>
                        <TeamOrderChangeBtn
                            variant='up'
                            elemId={team.id!}
                            current={team}
                        />
                        <TeamOrderChangeBtn
                            variant='down'
                            elemId={team.id!}
                            current={team}
                        />
                    </th>
                </tr>
                {showTable ? <>
                    {!teamTasks || teamTasks.length === 0 ?
                        <tr>
                            <td
                                className={styles.noTasks}
                                colSpan={4}>
                                {t('tasks.noTasks')}
                            </td>
                        </tr>
                        : teamTasks.map((task: Task) => (
                            <TaskTableItem key={task.id} task={task} draggable />
                        ))}</>
                    :
                    <tr>
                        <td
                            colSpan={4}
                            className={styles.hiddenTableCell} />
                    </tr>}
            </tbody>
        </table>
    );
}