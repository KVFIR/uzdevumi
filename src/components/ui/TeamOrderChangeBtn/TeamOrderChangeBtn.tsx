import { Team } from '../../../interfaces'
import styles from './TeamOrderChangeBtn.module.scss'
import { useDb } from '../../../hooks/useDb'
import { useDataContext } from '../../../hooks/useDataContext'

interface TeamOrderChangeBtnProps {
    variant: 'up' | 'down'
    elemId: string
    current: Team
}

export const TeamOrderChangeBtn = ({ variant, elemId, current }: TeamOrderChangeBtnProps) => {
    const { teams, updateTeams } = useDataContext()
    const { updateDocument } = useDb('teams')

    const handleClick = () => {
        if (!teams) return

        const currentIndex = teams.findIndex(team => team.id === elemId)
        if (currentIndex === -1) return

        let inc = variant === 'up' ? -1 : 1
        const adjacent = teams[currentIndex + inc]
        if (!adjacent) return

        updateDocument(elemId, { orderIndex: adjacent.orderIndex })
        updateDocument(adjacent.id!, { orderIndex: current.orderIndex })

        const newTeams = [...teams]
        newTeams[currentIndex] = { ...adjacent, orderIndex: current.orderIndex }
        newTeams[currentIndex + inc] = { ...current, orderIndex: adjacent.orderIndex }

        updateTeams(newTeams)
    }

    return (
        <button
            className={`${styles[variant]} ${styles.orderButton}`}
            onClick={handleClick}
            aria-label={`Change team order to appear ${variant === 'up' ? 'before previous' : 'after next'} team`}
        />
    )
}