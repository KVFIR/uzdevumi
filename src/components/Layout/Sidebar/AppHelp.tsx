//assets
import APP_DEFAULTCONTENT from '../../../assets/helpModalAssets/APP-DEFAULTCONTENT.webp'
import APP_DIAGRAM_SPACES from '../../../assets/helpModalAssets/APP-DIAGRAM-SPACES.webp'
import APP_DIAGRAM_STATUSES from '../../../assets/helpModalAssets/APP-DIAGRAM-STATUSES.webp'
import APP_DIAGRAM_TASKS from '../../../assets/helpModalAssets/APP-DIAGRAM-TASKS.webp'
import APP_DIAGRAM from '../../../assets/helpModalAssets/APP-DIAGRAM.webp'
import APP_GOALS from '../../../assets/helpModalAssets/APP-GOALS.webp'
import APP_HELP from '../../../assets/helpModalAssets/APP-HELP.webp'
import APP_LOGO from '../../../assets/helpModalAssets/APP-LOGO.webp'
//styles
import styles from './Sidebar.module.scss'
//components
import { HelpModal } from "../../Modals/HelpModal/HelpModal";
import { useTranslation } from 'react-i18next';

export const AppHelp = () => {
    const { t } = useTranslation();

    const appHelpContent = [
        {
            title: t('common.taskManager'),
            description: t('help.taskManagerDescription'),
            img: {
                src: APP_LOGO,
                alt: t('help.taskManagerLogo'),
            },
        },
        {
            title: t('help.teamsStatusesTasks'),
            description: t('help.teamsDescription2'),
            img: {
                src: APP_DIAGRAM_SPACES,
                alt: t('help.teamsStatusesTasksDiagram'),
            },
        },
        {
            title: t('help.teamsStatusesTasks'),
            description: t('help.statusesDescription'),
            img: {
                src: APP_DIAGRAM_STATUSES,
                alt: t('help.teamsStatusesTasksDiagram'),
            },
        },
        {
            title: t('help.teamsStatusesTasks'),
            description: t('help.tasksDescription'),
            img: {
                src: APP_DIAGRAM_TASKS,
                alt: t('help.teamsStatusesTasksDiagram'),
            },
        },
        {
            title: t('help.teamsStatusesTasks'),
            description: t('help.addTeamsStatusesTasks'),
            img: {
                src: APP_DIAGRAM,
                alt: t('help.teamsStatusesTasksDiagram'),
            },
        },
        {
            title: t('help.title'),
            description: t('help.helpDescription'),
            img: {
                src: APP_HELP,
                alt: t('help.helpIcon'),
            },
        },
        {
            title: t('goals.title'),
            description: t('help.goalsDescription'),
            img: {
                src: APP_GOALS,
                alt: t('help.goalLinks'),
            },
        },
        {
            title: t('help.defaultContent'),
            description: t('help.defaultContentDescription'),
            img: {
                src: APP_DEFAULTCONTENT,
                alt: t('help.tableFilledWithTasks'),
            },
        },
    ];

    return (
        <HelpModal
            slidesContent={appHelpContent}
            buttonStyles={styles.openHelp}
            id='appHelpModal'
        />
    );
}