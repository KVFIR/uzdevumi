//interfaces
import { Team, Status } from "../../../interfaces";
//hooks
import { useEffect } from 'react'
import { useDataContext } from "../../../hooks/useDataContext";
//styles
import styles from './StatusSelectInput.module.scss'

interface StatusSelectInputProps {
    team: Team | null
    status: Status | null
    setStatus: React.Dispatch<React.SetStateAction<Status | null>>
}

export const StatusSelectInput = ({ team, status, setStatus }: StatusSelectInputProps) => {
    const { statuses, selectedTeam } = useDataContext()
    const teamStatuses = team ? statuses?.filter(s => s.teamId === team.id) : statuses?.filter(s => s.teamId === selectedTeam?.id)

    useEffect(() => {
        if (!teamStatuses) {
            setStatus(null)
            return
        } // if team have no statuses set status to null 

        if (teamStatuses.find(s => s.id === status?.id) === undefined) {
            setStatus(teamStatuses[0])
        } //if team does not contain status passed by props, set status to first one in selected team
    }, [teamStatuses, setStatus, status?.id])

    return (
        <select
            id='teamSelect'
            className={styles.statusSelectInput}
            value={status?.id}
            required
            onChange={(e) => {
                setStatus(teamStatuses?.find(s => s.id === e.target.value)!)
            }}
            style={{ backgroundColor: status?.color }}
        >
            {!teamStatuses || teamStatuses.length === 0 ?
                <option
                    value={''}
                    className={styles.selectInput}>
                    You cannot add task to team without any statuses
                </option>
                : teamStatuses?.map((status) => (
                    <option
                        key={status.id}
                        value={status.id}
                        className={styles.selectInput}
                        style={{ backgroundColor: status.color }}
                    >
                        {status.name}
                    </option>
                ))}
        </select>
    );
}

