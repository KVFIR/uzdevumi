//interfaces
import { MouseEvent } from 'react';
import { Space, Task } from '../../../interfaces';
//hooks
import { useDataContext } from '../../../hooks/useDataContext';
import { useDb } from '../../../hooks/useDb';
//styles
import styles from './TaskStatusChangeBtn.module.scss'
//components
import { AnimatedPopover } from '../../AnimatedPopover/AnimatedPopover'

interface TaskStatusChangeBtnProps {
    task: Task
    space?: Space
}

export const TaskStatusChangeBtn = ({ task, space }: TaskStatusChangeBtnProps) => {
    const { updateDocument } = useDb('tasks')
    const { statuses, spaces } = useDataContext()
    const currentTaskStatus = statuses?.find(status => status.id === task.statusId)
    const currentTaskSpace = spaces?.find(space => space.id === task.spaceId)
    const spaceStatuses = space ? statuses?.filter(s => s.spaceId === space.id!) : statuses?.filter(s => s.spaceId === currentTaskSpace?.id)
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
                {spaceStatuses && spaceStatuses.map((status) => (
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