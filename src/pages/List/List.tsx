import { useTranslation } from 'react-i18next';
import { useDataContext } from '../../hooks/useDataContext';
//styles
import styles from './List.module.scss'
//interfaces
import { Status } from '../../interfaces'
//components
import { AnimatedPopover } from "../../components/AnimatedPopover/AnimatedPopover";
import { Layout } from "../../components/Layout/Layout/Layout";
import { AddStatusForm } from "../../components/forms/AddStatusForm/AddStatusForm";
import { TaskTable } from './TaskTable'
import { NoTeams } from '../../components/NoTeams/NoTeams';
import { TeamSelect } from '../../components/ui/TeamSelect/TeamSelect';
import { ListHelp } from './ListHelp';

export const List = () => {
    const { t } = useTranslation();
    const { statuses, selectedTeam, setSelectedTeam } = useDataContext()
    const teamStatuses = statuses?.filter(status => status.teamId === selectedTeam?.id)

    return (
        <Layout title={t('navigation.list')}>
            <div className={styles.row}>
                <TeamSelect
                    team={selectedTeam}
                    setTeam={setSelectedTeam}
                    className={styles.teamSelect}
                />
                <ListHelp />
            </div>
            {selectedTeam ?
                <>
                    <div className={styles.newStatusContainer}>
                        <AnimatedPopover className={styles.newStatusButton} buttonText={t('teams.addNewStatus')}>
                            <AddStatusForm />
                        </AnimatedPopover>
                    </div>
                    {teamStatuses?.map((status: Status) =>
                        <TaskTable
                            key={status.id}
                            status={status}
                        />)
                    }</>
                : <NoTeams />}
        </Layout>
    );
}