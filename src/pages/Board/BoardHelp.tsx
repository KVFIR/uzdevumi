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
import { HelpModal } from '../../components/modals/HelpModal/HelpModal'

const Board = [
    {
        title: 'Spaces',
        description: 'Switch between spaces and group your tasks depending on your needs',
        img: {
            src: PANEL_SPACES,
            alt: 'Space selection button',
        },
    },
    {
        title: 'Add Task',
        description: 'Use "+" icon below status tame to add new task',
        img: {
            src: PANEL_ADDTASK,
            alt: 'Button with plus',
        },
    },
    {
        title: 'Task Status',
        description: 'Change task status by clicking on the leftmost task icon, or by dragging task to another column',
        img: {
            src: PANEL_TASKSTATUS,
            alt: 'Little square icon indicating task color and process of dragging tasks between columns',
        },
    },
    {
        title: 'Task Priority',
        description:
            'Circular icon indicates task priority. You can toggle the priority between "low" (green) "medium" (yellow) and "high" (red)',
        img: {
            src: PANEL_TASKPRIO,
            alt: 'Circular colorful icon',
        },
    },
    {
        title: 'Remove Tasks',
        description: 'Remove tasks by clicking trashcan icon on the right',
        img: {
            src: PANEL_REMOVETASK,
            alt: 'Trashcan icon',
        },
    },
    {
        title: 'Go to Task Page',
        description: 'Click on specific task to move to its subpage, where you can edit its content and properties',
        img: {
            src: PANEL_TASKLINK,
            alt: 'Task with the cursor hovering over it',
        },
    },
    {
        title: 'Add status',
        description:
            'Use "Add status" button on the right side of the page to add new statuses',
        img: {
            src: PANEL_ADDSTATUS,
            alt: 'Add status button',
        },
    },
    {
        title: 'Status order',
        description: 'Change status order by using arrow icons at top of each column',
        img: {
            src: PANEL_STATUSORDER,
            alt: 'left and right arrow icons',
        },
    },
    {
        title: 'Hide table',
        description: 'Hide table by using arrows icon on top left corner of each column',
        img: {
            src: PANEL_HIDESTATUS,
            alt: 'icon of two arrows directed at each other',
        },
    },
    {
        title: 'Remove status',
        description:
            'Remove status by clicking "X" icon on the top right corner of each column. Keep in mind that removing status also removes any associated with it tasks',
        img: {
            src: PANEL_REMOVESTATUS,
            alt: '"X" icon',
        },
    },
]

export const BoardHelp = () => {
    return (
        <HelpModal slidesContent={Board} />
    );
}