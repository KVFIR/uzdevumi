import styles from './PriorityChangeInput.module.scss'

interface PriorityChangeInputProps {
    priority: string
    setPriority: React.Dispatch<React.SetStateAction<string>>
}

const getPrio = (priority: string) => {
    if (priority === 'low') return 'medium'
    if (priority === 'medium') return 'high'
    if (priority === 'high') return 'low'
    return 'low'
}

const PriorityChangeInput = ({ priority, setPriority }: PriorityChangeInputProps) => {

    const handleClick = () => {
        setPriority(getPrio(priority))
    }

    return (
        <input
            type='button'
            className={`${styles.PriorityChangeInput} ${styles[priority]}`}
            onClick={handleClick}
        />
    );
}

export default PriorityChangeInput;