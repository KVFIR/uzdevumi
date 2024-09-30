//styles
import styles from './Calendar.module.scss'
//assets
import CALENDAR_ADDTASK from '../../assets/helpModalAssets/CALENDAR-ADDTASK.webp'
import CALENDAR_ARROWLINKS from '../../assets/helpModalAssets/CALENDAR-ARROWLINKS.webp'
import CALENDAR_DAYINPUT from '../../assets/helpModalAssets/CALENDAR-DAYINPUT.webp'
import CALENDAR_DAYLINK_MONTH from '../../assets/helpModalAssets/CALENDAR-DAYLINK-MONTH.webp'
import CALENDAR_DAYLINKS from '../../assets/helpModalAssets/CALENDAR-DAYLINKS.webp'
import CALENDAR_LINKS from '../../assets/helpModalAssets/CALENDAR-LINKS.webp'
import CALENDAR_TASKLINK from '../../assets/helpModalAssets/CALENDAR-TASKLINK.webp'
//components
import { HelpModal } from '../../components/modals/HelpModal/HelpModal'

const calendarHelpContent = [
    {
        title: 'Calendar links',
        description: 'Use buttons in the top left corner to toggle calendar between day, week and month view',
        img: {
            src: CALENDAR_LINKS,
            alt: 'Navigation buttons; day, week, month',
        },
    },
    {
        title: 'Date input',
        description: 'You can also use the date input to move to selected date',
        img: {
            src: CALENDAR_DAYINPUT,
            alt: 'Date picking input',
        },
    },
    {
        title: 'Go to the next time period',
        description: 'Use arrow icons on sides of displayed date to move to the next time period',
        img: {
            src: CALENDAR_ARROWLINKS,
            alt: 'Button with arrow',
        },
    },
    {
        title: 'Add task',
        description: 'Use button on the right side of the page to add a new task',
        img: {
            src: CALENDAR_ADDTASK,
            alt: '"Add new Task" button',
        },
    },
    {
        title: 'Go to Task Page',
        description: 'Click on specific task to move to its subpage, where you can edit its content and properties',
        img: {
            src: CALENDAR_TASKLINK,
            alt: 'Tasks',
        },
    },
    {
        title: 'Week tab - move to specific day',
        description: 'Press on the day of the week in the week tab to move to the selected day',
        img: {
            src: CALENDAR_DAYLINKS,
            alt: 'Days of the week as links',
        },
    },
    {
        title: 'Month tab - move to specific day',
        description: 'Press on the day of the month in the month tab to move to the selected day',
        img: {
            src: CALENDAR_DAYLINK_MONTH,
            alt: 'Days of the month as links',
        },
    },
]


export const CalendarHelp = () => {
    return (
        <HelpModal slidesContent={calendarHelpContent} buttonStyles={styles.helpBtn} />
    );
}