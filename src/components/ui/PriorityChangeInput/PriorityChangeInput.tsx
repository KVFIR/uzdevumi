import { getNewPrio } from '../../../utils/getNewPrio'
import styles from './PriorityChangeInput.module.scss'

interface PriorityChangeInputProps {
    priority: string
    setPriority: React.Dispatch<React.SetStateAction<string>>
}

export const PriorityChangeInput = ({ priority, setPriority }: PriorityChangeInputProps) => {
    const handleClick = () => {
        setPriority(getNewPrio(priority))
    }

    return (
        <input
            type='button'
            aria-label={`Current priorty: ${priority} click to change`}
            className={`${styles.PriorityChangeInput} ${styles[priority]}`}
            onClick={handleClick}
        />
    );
}