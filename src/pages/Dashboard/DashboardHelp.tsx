//assets
import DASHBOARD_ADDSPACES from '../../assets/helpModalAssets/DASHBOARD-ADDSPACES.webp'
import DASHBOARD_GOALS from '../../assets/helpModalAssets/DASHBOARD-GOALS.webp'
import DASHBOARD_HIGHPRIOTASKS from '../../assets/helpModalAssets/DASHBOARD-HIGHPRIOTASKS.webp'
import DASHBOARD_REMOVESPACES from '../../assets/helpModalAssets/DASHBOARD-REMOVESPACES.webp'
import DASHBOARD_TODAYSTASKS from '../../assets/helpModalAssets/DASHBOARD-TODAYSTASKS.webp'
//components
import { HelpModal } from "../../components/modals/HelpModal/HelpModal";

const dashboardHelpContent = [
    {
        title: 'Add new spaces',
        description: 'Use button at the bottom of Spaces section to add new spaces',
        img: {
            src: DASHBOARD_ADDSPACES,
            alt: '"Add new space" button',
        },
    },
    {
        title: 'Remove spaces',
        description: 'Use "X" icon on the right side of listed space to delete it. Keep in mind that removing space will also remove all associated with it tasks and statuses',
        img: {
            src: DASHBOARD_REMOVESPACES,
            alt: '"X" red icon',
        },
    },
    {
        title: "Today's tasks",
        description: "Todays tasks section displays tasks whose time range includes today's date",
        img: {
            src: DASHBOARD_TODAYSTASKS,
            alt: "Today's task table with task",
        },
    },
    {
        title: 'High priority tasks',
        description: 'High priority tasks section displays all tasks with high priority',
        img: {
            src: DASHBOARD_HIGHPRIOTASKS,
            alt: 'Circular colorful icon',
        },
    },
    {
        title: 'Goals',
        description: 'Goals section provide quick access to your goals',
        img: {
            src: DASHBOARD_GOALS,
            alt: 'Circular colorful icon',
        },
    },
]

export const DashboardHelp = () => {
    return (
        <HelpModal slidesContent={dashboardHelpContent} />
    );
}