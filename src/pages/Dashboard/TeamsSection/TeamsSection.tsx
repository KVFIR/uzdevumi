import { useState, ComponentPropsWithoutRef } from 'react'
import { useDataContext } from '../../../hooks/useDataContext';
import { useTranslation } from 'react-i18next';
//styles
import styles from './TeamsSection.module.scss'
//components
import { AddTeamForm } from "../../../components/forms/AddTeamForm/AddTeamForm";
import { TeamDeleteModal } from "../../../components/ui/TeamDeleteModal/TeamDeleteModal";

export const TeamsSection = ({ ...props }: ComponentPropsWithoutRef<'section'>) => {
    const { t } = useTranslation();
    const { teams, statuses, tasks } = useDataContext()
    const [showAddTeam, setShowAddTeam] = useState(false)
    const handleShowAddTeam = () => {
        setShowAddTeam(!showAddTeam)
    }

    return (
        <section className={styles.teamsSection} {...props}>
            <h2 className={`${styles.sectionHeader} ${styles.teamsCaption}`}>{t('dashboard.teams')}</h2>
            <div className={styles.teams}>
                <ul>
                    {!teams || teams.length === 0 ?
                        <div className={styles.noTasks}>{t('dashboard.noWorkteams')}</div>
                        : teams.map(team =>
                            <li key={team.id}>
                                {team.name}
                                <br />
                                <span className={styles.itemDescription}>
                                    {t('teams.statusesAndTasks', { statusCount: statuses?.filter(t => t.teamId === team.id!).length, taskCount: tasks?.filter(t => t.teamId === team.id!).length })}
                                </span>
                                <TeamDeleteModal team={team} className={styles.teamDeleteBtn} />
                            </li>
                        )}
                </ul>
                {showAddTeam ?
                    <AddTeamForm handleShowAddTeamForm={handleShowAddTeam} />
                    : <button className={styles.showAddTeamBtn} onClick={handleShowAddTeam}>
                        {t('dashboard.addNewTeam')}
                    </button>
                }
            </div>
        </section>
    );
}