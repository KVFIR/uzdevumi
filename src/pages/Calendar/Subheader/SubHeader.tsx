//styles
import styles from '../Calendar.module.scss'
//hooks
import { useCalendarOutletContext } from "../Calendar";
//components
import { AnimatedPopover } from "../../../components/AnimatedPopover/AnimatedPopover";
import { AddTaskForm } from "../../../components/forms/AddTaskForm/AddTaskForm";
import { DateLink } from "./DateLink";

interface SubHeaderProps {
    moveBy: 'day' | 'week' | 'month'
    dateHeader: string
}

export const SubHeader = ({ moveBy, dateHeader }: SubHeaderProps) => {
    const { date } = useCalendarOutletContext()

    return (
        <div className={styles.subHeader}>
            <DateLink
                by={moveBy}
                move="back"
                date={date}
            />
            <h2>{dateHeader}</h2>
            <DateLink
                by={moveBy}
                move="forward"
                date={date}
            />
            <AnimatedPopover
                className={styles.addTaskButton}
                buttonText={'Add new task'}>
                <AddTaskForm
                    className={styles.addTaskForm}
                    showDateInputs
                    showSpaceSelect
                    defaultDate={date}
                />
            </AnimatedPopover>
        </div>
    );
}