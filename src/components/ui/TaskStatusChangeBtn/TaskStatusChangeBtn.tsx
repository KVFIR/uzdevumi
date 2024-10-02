//interfaces
import { MouseEvent } from 'react';
import { Team, Task } from '../../../interfaces';
//hooks
import { useDataContext } from '../../../hooks/useDataContext';
import { useDb } from '../../../hooks/useDb';
//styles
import styles from './TaskStatusChangeBtn.module.scss'
//components
import { AnimatedPopover } from '../../AnimatedPopover/AnimatedPopover'

interface TaskStatusChangeBtnProps {
    task: Task
    team?: Team
}

export const TaskStatusChangeBtn = ({ task, team }: TaskStatusChangeBtnProps) => {
    const { updateDocument } = useDb('tasks')
    const { statuses, teams } = useDataContext()
    const currentTaskStatus = statuses?.find(status => status.id === task.statusId)
    const currentTaskTeam = teams?.find(team => team.id === task.teamId)
    const teamStatuses = team ? statuses?.filter(s => s.teamId === team.id!) : statuses?.filter(s => s.teamId === currentTaskTeam?.id)
    const btnColor = currentTaskStatus && currentTaskStatus.color

    const handleClick = (e: MouseEvent, statusId: string) => {
        e.stopPropagation();
        if (statusId === task.statusId) return
        updateDocument(task.id!, { statusId: statusId })
    }

    return (
        <AnimatedPopover
            className={styles.outsideBtn}
            style={{ backgroundColor: btnColor }}
            aria-label='Click to open list of available statuses'
        >
            <div className={styles.container}>
                {teamStatuses && teamStatuses.map((status) => (
                    <button
                        key={status.id}
                        onClick={(e) => { handleClick(e, status.id!) }}
                        style={{ backgroundColor: status.color }}>
                        {status.name}
                    </button>
                ))}
            </div>
        </AnimatedPopover>
    );
}