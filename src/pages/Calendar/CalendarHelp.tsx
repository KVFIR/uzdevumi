import { useTranslation } from 'react-i18next';
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
import { HelpModal } from '../../components/Modals/HelpModal/HelpModal'

export const CalendarHelp = () => {
    const { t } = useTranslation();

    const calendarHelpContent = [
        {
            title: t('help.calendarLinks'),
            description: t('help.calendarLinksDescription'),
            img: {
                src: CALENDAR_LINKS,
                alt: t('help.calendarLinksAlt'),
            },
        },
        {
            title: t('help.dateInput'),
            description: t('help.dateInputDescription'),
            img: {
                src: CALENDAR_DAYINPUT,
                alt: t('help.dateInputAlt'),
            },
        },
        {
            title: t('help.nextTimePeriod'),
            description: t('help.nextTimePeriodDescription'),
            img: {
                src: CALENDAR_ARROWLINKS,
                alt: t('help.nextTimePeriodAlt'),
            },
        },
        {
            title: t('help.addTask'),
            description: t('help.addTaskDescription'),
            img: {
                src: CALENDAR_ADDTASK,
                alt: t('help.addTaskAlt'),
            },
        },
        {
            title: t('help.goToTaskPage'),
            description: t('help.goToTaskPageDescription'),
            img: {
                src: CALENDAR_TASKLINK,
                alt: t('help.goToTaskPageAlt'),
            },
        },
        {
            title: t('help.weekTabMoveToDay'),
            description: t('help.weekTabMoveToDayDescription'),
            img: {
                src: CALENDAR_DAYLINKS,
                alt: t('help.weekTabMoveToDayAlt'),
            },
        },
        {
            title: t('help.monthTabMoveToDay'),
            description: t('help.monthTabMoveToDayDescription'),
            img: {
                src: CALENDAR_DAYLINK_MONTH,
                alt: t('help.monthTabMoveToDayAlt'),
            },
        },
    ];

    return (
        <HelpModal slidesContent={calendarHelpContent} buttonStyles={styles.helpBtn} />
    );
}