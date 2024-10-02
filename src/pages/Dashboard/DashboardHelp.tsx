import { useTranslation } from 'react-i18next';
//assets
import DASHBOARD_ADDSPACES from '../../assets/helpModalAssets/DASHBOARD-ADDSPACES.webp'
import DASHBOARD_GOALS from '../../assets/helpModalAssets/DASHBOARD-GOALS.webp'
import DASHBOARD_HIGHPRIOTASKS from '../../assets/helpModalAssets/DASHBOARD-HIGHPRIOTASKS.webp'
import DASHBOARD_REMOVESPACES from '../../assets/helpModalAssets/DASHBOARD-REMOVESPACES.webp'
import DASHBOARD_TODAYSTASKS from '../../assets/helpModalAssets/DASHBOARD-TODAYSTASKS.webp'
//components
import { HelpModal } from "../../components/Modals/HelpModal/HelpModal";

export const DashboardHelp = () => {
    const { t } = useTranslation();

    const dashboardHelpContent = [
        {
            title: t('help.addNewTeams'),
            description: t('help.useButtonToAddNewTeams'),
            img: {
                src: DASHBOARD_ADDSPACES,
                alt: t('help.addNewTeams'),
            },
        },
        {
            title: t('help.removeTeams'),
            description: t('help.useIconToRemoveTeam'),
            img: {
                src: DASHBOARD_REMOVESPACES,
                alt: t('help.removeTeams'),
            },
        },
        {
            title: t('help.todaysTasks'),
            description: t('help.todaysTasksDescription'),
            img: {
                src: DASHBOARD_TODAYSTASKS,
                alt: t('help.todaysTasks'),
            },
        },
        {
            title: t('help.highPriorityTasks'),
            description: t('help.highPriorityTasksDescription'),
            img: {
                src: DASHBOARD_HIGHPRIOTASKS,
                alt: t('help.highPriorityTasks'),
            },
        },
        {
            title: t('help.goalsSection'),
            description: t('help.goalsSectionDescription'),
            img: {
                src: DASHBOARD_GOALS,
                alt: t('help.goalsSection'),
            },
        },
    ];

    return (
        <HelpModal slidesContent={dashboardHelpContent} />
    );
}