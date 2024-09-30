//interfaces
import { Status } from '../../../interfaces'
//styles
import styles from './StatusOrderChangeBtn.module.scss'
//hooks
import { useDb } from '../../../hooks/useDb'
import { useDataContext } from '../../../hooks/useDataContext'

interface StatusOrderChangeBtnProps {
    variant: 'up' | 'down' | 'left' | 'right'
    elemId: string
    current: Status
}

export const StatusOrderChangeBtn = ({ variant, elemId, current }: StatusOrderChangeBtnProps) => {
    const { statuses, selectedSpace } = useDataContext()
    const currentSpaceStatuses = statuses?.filter(s => s.spaceId === selectedSpace?.id!)
    const { updateDocument } = useDb('statuses')

    const handleClick = () => {
        let inc = variant === 'up' || variant === 'left' ? -1 : 1
        const adjacent = currentSpaceStatuses && currentSpaceStatuses[currentSpaceStatuses.findIndex((status) => status.id === elemId) + inc]
        if (!adjacent) return
        updateDocument(elemId, { orderIndex: adjacent.orderIndex })
        updateDocument(adjacent.id!, { orderIndex: current.orderIndex })
    }

    return (
        <button
            className={`${styles[variant]} ${styles.orderButton}`}
            onClick={handleClick}
            aria-label={`Change status section order to appear ${variant === 'up' || variant === 'left' ? 'before previous' : 'after next'} status section`}
        />
    );
}