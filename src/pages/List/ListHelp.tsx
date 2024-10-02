import { useTranslation } from 'react-i18next';
//assets
import LIST_ADDSTATUS from '../../assets/helpModalAssets/LIST-ADDSTATUS.webp'
import LIST_ADDTASK from '../../assets/helpModalAssets/LIST-ADDTASK.webp'
import LIST_HIDESTATUS from '../../assets/helpModalAssets/LIST-HIDESTATUS.webp'
import LIST_REMOVESTATUS from '../../assets/helpModalAssets/LIST-REMOVESTATUS.webp'
import LIST_SPACES from '../../assets/helpModalAssets/LIST-SPACES.webp'
import LIST_STATUSORDER from '../../assets/helpModalAssets/LIST-STATUSORDER.webp'
import LIST_TASKLINK from '../../assets/helpModalAssets/LIST-TASKLINK.webp'
import LIST_TASKPRIO from '../../assets/helpModalAssets/LIST-TASKPRIO.webp'
import LIST_TASKSTATUS from '../../assets/helpModalAssets/LIST-TASKSTATUS.webp'
//components
import { HelpModal } from '../../components/Modals/HelpModal/HelpModal'

export const ListHelp = () => {
    const { t } = useTranslation();

    const listHelpContent = [
        {
            title: t('help.teams'),
            description: t('help.teamsDescription'),
            img: {
                src: LIST_SPACES,
                alt: t('help.teamSelectionButton'),
            },
        },
        {
            title: t('help.addTask'),
            description: t('help.addTaskDescription'),
            img: {
                src: LIST_ADDTASK,
                alt: t('help.buttonWithPlus'),
            },
        },
        {
            title: t('help.taskStatus'),
            description: t('help.taskStatusDescription'),
            img: {
                src: LIST_TASKSTATUS,
                alt: t('help.taskStatusIcon'),
            },
        },
        {
            title: t('help.taskPriority'),
            description: t('help.taskPriorityDescription'),
            img: {
                src: LIST_TASKPRIO,
                alt: t('help.circularColorfulIcon'),
            },
        },
        {
            title: t('help.removeTasks'),
            description: t('help.removeTasksDescription'),
            img: {
                src: LIST_TASKPRIO,
                alt: t('help.trashcanIcon'),
            },
        },
        {
            title: t('help.goToTaskPage'),
            description: t('help.goToTaskPageDescription'),
            img: {
                src: LIST_TASKLINK,
                alt: t('help.taskWithCursor'),
            },
        },
        {
            title: t('help.addStatus'),
            description: t('help.addStatusDescription'),
            img: {
                src: LIST_ADDSTATUS,
                alt: t('help.addStatusButton'),
            },
        },
        {
            title: t('help.statusOrder'),
            description: t('help.statusOrderDescription'),
            img: {
                src: LIST_STATUSORDER,
                alt: t('help.upAndDownArrowIcons'),
            },
        },
        {
            title: t('help.hideTable'),
            description: t('help.hideTableDescription'),
            img: {
                src: LIST_HIDESTATUS,
                alt: t('help.twoArrowsIcon'),
            },
        },
        {
            title: t('help.removeStatus'),
            description: t('help.removeStatusDescription'),
            img: {
                src: LIST_REMOVESTATUS,
                alt: t('help.xIcon'),
            },
        },
    ]

    return (
        <HelpModal slidesContent={listHelpContent} />
    );
}