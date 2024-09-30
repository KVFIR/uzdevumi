//hooks
import { useDataContext } from '../../hooks/useDataContext';
//styles
import styles from './Board.module.scss'
//components
import { AddStatusForm } from '../../components/forms/AddStatusForm/AddStatusForm';
import { AnimatedPopover } from '../../components/AnimatedPopover/AnimatedPopover';
import { Layout } from '../../components/layout/Layout/Layout';
import { StatusSection } from './StatusSection';
import { NoSpaces } from '../../components/NoSpaces/NoSpaces';
import { SpaceSelect } from '../../components/ui/SpaceSelect/SpaceSelect';
import { BoardHelp } from './BoardHelp';

export const Board = () => {
    const { statuses, selectedSpace, setSelectedSpace } = useDataContext()
    const spaceStatuses = statuses?.filter(s => s.spaceId === selectedSpace?.id)

    return (
        <Layout title='Board'>
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
                        buttonText='ADD NEW STATUS'
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