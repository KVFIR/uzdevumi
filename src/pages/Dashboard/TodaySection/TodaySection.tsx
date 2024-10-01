import dayjs from "dayjs";
import { useTranslation } from 'react-i18next';
//hooks
import { useDataContext } from "../../../hooks/useDataContext";
//utils
import { getHoursOfDate } from "../../../utils/getHoursOfDate";
import { getTasksWithinDay } from "../../../utils/getTasksWithinDay";
//styles
import styles from './TodaySection.module.scss'
//components
import { TaskTableItem } from "../../../components/TaskTableItem/TaskTableItem";

export const TodaySection = () => {
    const { t } = useTranslation();
    const { tasks } = useDataContext()
    const todaysTasks = tasks && getTasksWithinDay(tasks, getHoursOfDate(dayjs()))

    return (
        <section className={styles.todaySection}>
            <table>
                <caption className={styles.todaysTasksCaption}>{t('dashboard.todaysTasks')}</caption>
                <tbody>
                    {!todaysTasks || todaysTasks.length === 0 ?
                        <tr>
                            <td className={styles.noTasks}>{t('dashboard.noTasksScheduled')}</td>
                        </tr> :
                        todaysTasks?.map(task =>
                            <TaskTableItem key={task.id} task={task} />
                        )}
                </tbody>
            </table>
        </section>
    );
}