//hooks
import { useDataContext } from '../../../hooks/useDataContext';
//styles
import styles from './HighPrioTaskSection.module.scss'
//components
import { TaskTableItem } from '../../../components/TaskTableItem/TaskTableItem';


export const HighPrioTaskSection = () => {
    const { tasks } = useDataContext()
    const highPrioTasks = tasks && tasks.filter(task => task.priority === 'high')

    return (
        <section className={styles.highPrioSection}>
            <table>
                <caption className={styles.highPrioTasksCaption}>Current high priority tasks</caption>
                <tbody>
                    {!highPrioTasks || highPrioTasks.length === 0 ?
                        <tr>
                            <td className={styles.noTasks}>You don't have any high priority tasks right now</td>
                        </tr>
                        : highPrioTasks.map(task =>
                            <TaskTableItem key={task.id} task={task} />
                        )
                    }
                </tbody>
            </table>
        </section>
    );
}