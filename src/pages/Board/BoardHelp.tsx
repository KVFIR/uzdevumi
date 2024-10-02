import { useTranslation } from 'react-i18next';

//assets
import PANEL_ADDSTATUS from '../../assets/helpModalAssets/PANEL-ADDSTATUS.webp'
import PANEL_ADDTASK from '../../assets/helpModalAssets/PANEL-ADDTASK.webp'
import PANEL_HIDESTATUS from '../../assets/helpModalAssets/PANEL-HIDESTATUS.webp'
import PANEL_REMOVESTATUS from '../../assets/helpModalAssets/PANEL-REMOVESTATUS.webp'
import PANEL_REMOVETASK from '../../assets/helpModalAssets/PANEL-REMOVETASK.webp'
import PANEL_SPACES from '../../assets/helpModalAssets/PANEL-SPACES.webp'
import PANEL_STATUSORDER from '../../assets/helpModalAssets/PANEL-STATUSORDER.webp'
import PANEL_TASKLINK from '../../assets/helpModalAssets/PANEL-TASKLINK.webp'
import PANEL_TASKPRIO from '../../assets/helpModalAssets/PANEL-TASKPRIO.webp'
import PANEL_TASKSTATUS from '../../assets/helpModalAssets/PANEL-TASKSTATUS.webp'
//components
import { HelpModal } from '../../components/Modals/HelpModal/HelpModal'

export const BoardHelp = () => {
    const { t } = useTranslation();

    const boardHelpContent = [
        {
            title: t('help.teams'),
            description: t('help.teamsDescription'),
            img: {
                src: PANEL_SPACES,
                alt: t('help.teamSelectionButton'),
            },
        },
        {
            title: t('help.addTask'),
            description: t('help.addTaskDescription'),
            img: {
                src: PANEL_ADDTASK,
                alt: t('help.buttonWithPlus'),
            },
        },
        {
            title: t('help.taskStatus'),
            description: t('help.taskStatusDescription'),
            img: {
                src: PANEL_TASKSTATUS,
                alt: t('help.taskStatusIcon'),
            },
        },
        {
            title: t('help.taskPriority'),
            description: t('help.taskPriorityDescription'),
            img: {
                src: PANEL_TASKPRIO,
                alt: t('help.circularColorfulIcon'),
            },
        },
        {
            title: t('help.removeTasks'),
            description: t('help.removeTasksDescription'),
            img: {
                src: PANEL_REMOVETASK,
                alt: t('help.trashcanIcon'),
            },
        },
        {
            title: t('help.goToTaskPage'),
            description: t('help.goToTaskPageDescription'),
            img: {
                src: PANEL_TASKLINK,
                alt: t('help.taskWithCursor'),
            },
        },
        {
            title: t('help.addStatus'),
            description: t('help.addStatusDescription'),
            img: {
                src: PANEL_ADDSTATUS,
                alt: t('help.addStatusButton'),
            },
        },
        {
            title: t('help.statusOrder'),
            description: t('help.statusOrderDescription'),
            img: {
                src: PANEL_STATUSORDER,
                alt: t('help.upAndDownArrowIcons'),
            },
        },
        {
            title: t('help.hideTable'),
            description: t('help.hideTableDescription'),
            img: {
                src: PANEL_HIDESTATUS,
                alt: t('help.twoArrowsIcon'),
            },
        },
        {
            title: t('help.removeStatus'),
            description: t('help.removeStatusDescription'),
            img: {
                src: PANEL_REMOVESTATUS,
                alt: t('help.xIcon'),
            },
        },
    ];

    return (
        <HelpModal slidesContent={boardHelpContent} />
    );
}