import { useTranslation } from 'react-i18next';
import { useDataContext } from '../../../hooks/useDataContext';
import styles from './HighPrioTaskSection.module.scss'
import { TaskTableItem } from '../../../components/TaskTableItem/TaskTableItem';

export const HighPrioTaskSection = () => {
    const { t } = useTranslation();
    const { tasks } = useDataContext()
    const highPrioTasks = tasks && tasks.filter(task => task.priority === 'high')

    return (
        <section className={styles.highPrioSection}>
            <table>
                <caption className={styles.highPrioTasksCaption}>{t('dashboard.currentHighPriorityTasks')}</caption>
                <tbody>
                    {!highPrioTasks || highPrioTasks.length === 0 ?
                        <tr>
                            <td className={styles.noTasks}>{t('tasks.noTasks')}</td>
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