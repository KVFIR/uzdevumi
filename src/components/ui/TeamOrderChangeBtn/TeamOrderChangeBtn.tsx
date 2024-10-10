import { useDataContext } from '../../../hooks/useDataContext'
import { useDb } from '../../../hooks/useDb'
import { Team } from '../../../interfaces'
import styles from './TeamOrderChangeBtn.module.scss'

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

        const currentIndex = teams.findIndex(t => t.id === elemId)
        if (currentIndex === -1) return

        const inc = variant === 'up' ? -1 : 1
        const adjacentIndex = currentIndex + inc
        
        // Проверяем, не выходим ли мы за границы массива
        if (adjacentIndex < 0 || adjacentIndex >= teams.length) return

        const adjacentTeam = teams[adjacentIndex]

        const newTeams = [...teams]
        // Меняем местами текущую команду и соседнюю
        newTeams[currentIndex] = adjacentTeam
        newTeams[adjacentIndex] = current

        // Обновляем orderIndex для обеих команд
        newTeams[currentIndex].orderIndex = currentIndex
        newTeams[adjacentIndex].orderIndex = adjacentIndex

        // Обновляем базу данных
        updateDocument(elemId, { orderIndex: adjacentIndex })
        updateDocument(adjacentTeam.id!, { orderIndex: currentIndex })

        // Обновляем состояние приложения
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