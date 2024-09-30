import { NavLink, useNavigate } from "react-router-dom";
//dayjs
import dayjs, { Dayjs } from "dayjs";
//styles
import styles from './Calendar.module.scss'
//comopnents
import { CalendarHelp } from "./CalendarHelp";

interface CalendarNavbarProps {
    date: Dayjs
}

export const CalendarNavbar = ({ date }: CalendarNavbarProps) => {
    const navigate = useNavigate()
    const handleChange = (e: any) => {
        navigate(`${dayjs(e.target.value).format('DD-MM-YYYY')}/Day`, { replace: true })
    }

    return (
        <nav className={styles.calendarNav}>
            <NavLink
                to={`${date.format('DD-MM-YYYY')}/Day`}
                className={({ isActive }) => `${styles.tab} ${isActive && styles.tabActive}`}>
                DAY
            </NavLink>
            <NavLink
                to={`${date.format('DD-MM-YYYY')}/Week`}
                className={({ isActive }) => `${styles.tab} ${isActive && styles.tabActive}`}>
                WEEK
            </NavLink>
            <NavLink
                to={`${date.format('DD-MM-YYYY')}/Month`}
                className={({ isActive }) => `${styles.tab} ${isActive && styles.tabActive}`}>
                MONTH
            </NavLink>
            <input
                className={styles.dateInput}
                value={date.format('YYYY-MM-DD')}
                type={'date'}
                onChange={handleChange}
                aria-label='Select date to open it in calendar'
            />
            <CalendarHelp />
        </nav>
    );
}