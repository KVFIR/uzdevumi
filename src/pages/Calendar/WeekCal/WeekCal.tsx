import { Dayjs } from "dayjs";
//styles
import styles from './WeekCal.module.scss'
//hooks
import { useCalendarOutletContext } from "../Calendar";
import { useDataContext } from "../../../hooks/useDataContext";
//utils
import { getTasksWithinWeek } from '../../../utils/getTasksWithinWeek'
import { getDaysOfWeek } from "../../../utils/getDaysOfWeek";
import { getHoursOfDate } from "../../../utils/getHoursOfDate";
//components
import { TaskCard } from "./TaskCard";
import { SubHeader } from "../Subheader/SubHeader";
import { Link } from "react-router-dom";

export const WeekCal = () => {
    const { date } = useCalendarOutletContext()
    const { tasks } = useDataContext()
    const weekDays: Dayjs[] = getDaysOfWeek(date)
    const hours = getHoursOfDate(date)

    return (
        <>
            <SubHeader
                moveBy={'week'}
                dateHeader={`${weekDays[0].format('DD/MM/YY')} - ${weekDays[6].format('DD/MM/YY')}`}
            />
            <div className={styles.calendarWrapper}>
                <div className={styles.tableHeaders}>
                    <span />
                    {weekDays.map((weekDay) =>
                        <Link
                            key={weekDay.date()}
                            to={`../../${weekDay.format('DD-MM-YYYY')}/Day`}>
                            {weekDay.format('dddd').toUpperCase()}
                        </Link>
                    )}
                </div>
                <div className={styles.tableContainer}>
                    <table>
                        <tbody>
                            {hours.map((hour) =>
                                <tr key={hour.hour()}>
                                    <td className={`${styles.smallCell}`}>{hour.format("HH:00")}</td>
                                    {weekDays.map((weekday) => <td key={weekday.date()} />)}
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className={styles.grid}>
                        <>
                            <div className={styles.gridEmptyColumn}></div>
                            {weekDays.map(weekDay =>
                                <div className={styles.weekDayGrid} key={weekDay.date()}>
                                    {tasks && getTasksWithinWeek(tasks, weekDay).map((task) =>
                                        <TaskCard
                                            key={task.id}
                                            task={task}
                                            date={weekDay}
                                        />)}
                                </div>
                            )}
                        </>
                    </div>
                </div>
            </div>
        </>
    );
}