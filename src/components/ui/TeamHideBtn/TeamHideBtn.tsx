import styles from './TeamHideBtn.module.scss'

interface TeamHideBtnProps {
    showTeam: boolean
    setShowTeam: React.Dispatch<React.SetStateAction<boolean>>
}

export const TeamHideBtn = ({ showTeam, setShowTeam }: TeamHideBtnProps) => {
    return (
        <button
            className={styles.hideButton}
            onClick={() => { setShowTeam(!showTeam) }}
            aria-label='Click to collapse team table'
        />
    );
}