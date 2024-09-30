import { useDataContext } from '../../hooks/useDataContext';
//styles
import styles from './List.module.scss'
//interfaces
import { Status } from '../../interfaces'
//components
import { AnimatedPopover } from "../../components/AnimatedPopover/AnimatedPopover";
import { Layout } from "../../components/layout/Layout/Layout";
import { AddStatusForm } from "../../components/forms/AddStatusForm/AddStatusForm";
import { TaskTable } from './TaskTable'
import { NoSpaces } from '../../components/NoSpaces/NoSpaces';
import { SpaceSelect } from '../../components/ui/SpaceSelect/SpaceSelect';
import { ListHelp } from './ListHelp';

export const List = () => {
    const { statuses, selectedSpace, setSelectedSpace } = useDataContext()
    const spaceStatuses = statuses?.filter(status => status.spaceId === selectedSpace?.id)

    return (
        <Layout title='List'>
            <div className={styles.row}>
                <SpaceSelect
                    space={selectedSpace}
                    setSpace={setSelectedSpace}
                    className={styles.spaceSelect}
                />
                <ListHelp />
            </div>
            {selectedSpace ?
                <>
                    <div className={styles.newStatusContainer}>
                        <AnimatedPopover className={styles.newStatusButton} buttonText="ADD NEW STATUS">
                            <AddStatusForm />
                        </AnimatedPopover>
                    </div>
                    {spaceStatuses?.map((status: Status) =>
                        <TaskTable
                            key={status.id}
                            status={status}
                        />)
                    }</>
                : <NoSpaces />}
        </Layout>
    );
}