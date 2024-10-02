import { useTranslation } from 'react-i18next';

//hooks
import { useDataContext } from '../../hooks/useDataContext';
//styles
import styles from './Board.module.scss'
//components
import { AddStatusForm } from '../../components/forms/AddStatusForm/AddStatusForm';
import { AnimatedPopover } from '../../components/AnimatedPopover/AnimatedPopover';
import { Layout } from '../../components/Layout/Layout/Layout';
import { StatusSection } from './StatusSection';
import { NoTeams } from '../../components/NoTeams/NoTeams';
import { TeamSelect } from '../../components/ui/TeamSelect/TeamSelect';
import { BoardHelp } from './BoardHelp';

export const Board = () => {
    const { t } = useTranslation();
    const { statuses, selectedTeam, setSelectedTeam } = useDataContext()
    const teamStatuses = statuses?.filter(s => s.teamId === selectedTeam?.id)

    return (
        <Layout title={t('board.title')}>
            <div className={styles.row}>
                <TeamSelect
                    team={selectedTeam}
                    setTeam={setSelectedTeam}
                    className={styles.teamSelect}
                />
                <BoardHelp />
            </div>
            {selectedTeam ?
                <div className={styles.container}>
                    {teamStatuses?.map(status => (
                        <StatusSection
                            key={status.id}
                            status={status}
                        />
                    ))}
                    <AnimatedPopover
                        className={styles.addStatusButton}
                        buttonText={t('board.addNewStatus')}
                        panelStyles={{
                            transform: 'translate(-15.5rem, -0.5rem)',
                            height: '100%'
                        }}
                    >
                        <AddStatusForm />
                    </AnimatedPopover>
                </div>
                : <NoTeams />}
        </Layout>
    );
}