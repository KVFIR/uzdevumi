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
import { NoSpaces } from '../../components/NoSpaces/NoSpaces';
import { SpaceSelect } from '../../components/ui/SpaceSelect/SpaceSelect';
import { BoardHelp } from './BoardHelp';

export const Board = () => {
    const { t } = useTranslation();
    const { statuses, selectedSpace, setSelectedSpace } = useDataContext()
    const spaceStatuses = statuses?.filter(s => s.spaceId === selectedSpace?.id)

    return (
        <Layout title={t('board.title')}>
            <div className={styles.row}>
                <SpaceSelect
                    space={selectedSpace}
                    setSpace={setSelectedSpace}
                    className={styles.spaceSelect}
                />
                <BoardHelp />
            </div>
            {selectedSpace ?
                <div className={styles.container}>
                    {spaceStatuses?.map(status => (
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
                : <NoSpaces />}
        </Layout>
    );
}