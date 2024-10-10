import { useTranslation } from 'react-i18next';
import { useDataContext } from '../../hooks/useDataContext';
import styles from './AdminList.module.scss'
import { Team } from '../../interfaces'
import { AnimatedPopover } from "../../components/AnimatedPopover/AnimatedPopover";
import { Layout } from "../../components/Layout/Layout/Layout";
import { AddTeamForm } from "../../components/forms/AddTeamForm/AddTeamForm";
import { AdminTeamTable } from './AdminTeamTable'
import { NoTeams } from '../../components/NoTeams/NoTeams';
import { ListHelp } from './AdminListHelp';

export const AdminList = () => {
    const { t } = useTranslation();
    const { teams } = useDataContext()

    // Сортируем команды по orderIndex
    const sortedTeams = teams ? [...teams].sort((a, b) => a.orderIndex - b.orderIndex) : []

    return (
        <Layout title={t('navigation.adminList')}>
            <div className={styles.row}>
                <ListHelp />
            </div>
            <div className={styles.newTeamContainer}>
                <AnimatedPopover className={styles.newTeamButton} buttonText={t('teams.addNewTeam')}>
                    <AddTeamForm handleShowAddTeamForm={() => {}} />
                </AnimatedPopover>
            </div>
            {sortedTeams.length > 0 ? (
                sortedTeams.map((team: Team) => (
                    <AdminTeamTable
                        key={team.id}
                        team={team}
                    />
                ))
            ) : (
                <NoTeams />
            )}
        </Layout>
    );
}