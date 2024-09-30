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
import { HelpModal } from '../../components/modals/HelpModal/HelpModal'

const listHelpContent = [
    {
        title: 'Spaces',
        description: 'Switch between spaces and group your tasks depending on your needs',
        img: {
            src: LIST_SPACES,
            alt: 'Space selection button',
        },
    },
    {
        title: 'Add Task',
        description: 'Use "+" icon next to status tame to add new task',
        img: {
            src: LIST_ADDTASK,
            alt: 'Button with plus',
        },
    },
    {
        title: 'Task Status',
        description: 'Change task status by clicking on the leftmost task icon, or by dragging task to another table',
        img: {
            src: LIST_TASKSTATUS,
            alt: 'Little square icon indicating task color and process of dragging tasks between tables',
        },
    },
    {
        title: 'Task Priority',
        description:
            'Circular icon indicates task priority. You can toggle the priority between "low" (green) "medium" (yellow) and "high" (red)',
        img: {
            src: LIST_TASKPRIO,
            alt: 'Circular colorful icon',
        },
    },
    {
        title: 'Remove Tasks',
        description: 'Remove tasks by clicking trashcan icon on the right side of the task',
        img: {
            src: LIST_TASKPRIO,
            alt: 'Trashcan icon',
        },
    },
    {
        title: 'Go to Task Page',
        description: 'Click on specific task to move to its subpage, where you can edit its content and properties',
        img: {
            src: LIST_TASKLINK,
            alt: 'Task with the cursor hovering over it',
        },
    },
    {
        title: 'Add status',
        description: 'Use "Add status" button at the top of the page to add new statuses',
        img: {
            src: LIST_ADDSTATUS,
            alt: 'Add status button',
        },
    },
    {
        title: 'Status order',
        description: 'Change status order by using arrow icons above each table',
        img: {
            src: LIST_STATUSORDER,
            alt: 'up and down arrow icons',
        },
    },
    {
        title: 'Hide table',
        description: 'Hide table by using arrows icon on left side of each table',
        img: {
            src: LIST_HIDESTATUS,
            alt: 'icon of two arrows directed at each other',
        },
    },
    {
        title: 'Remove status',
        description:
            'Remove status by clicking "X" icon on the right top corner of each table. Keep in mind that removing status also removes any associated with it tasks',
        img: {
            src: LIST_REMOVESTATUS,
            alt: '"X" icon',
        },
    },
]


export const ListHelp = () => {
    return (
        <HelpModal slidesContent={listHelpContent} />
    );
}
