//assets
import GOALS_ADDGOAL from '../../assets/helpModalAssets/GOALS-ADDGOAL.webp'
import GOALS_ADDSTEPS from '../../assets/helpModalAssets/GOALS-ADDSTEPS.webp'
import GOALS_BOOLTASKDESC from '../../assets/helpModalAssets/GOALS-BOOLTASKDESC.webp'
import GOALS_CHECKBOXES from '../../assets/helpModalAssets/GOALS-CHECKBOXES.webp'
import GOALS_NUMBERSTEP from '../../assets/helpModalAssets/GOALS-NUMBERSTEP.webp'
import GOALS_REMOVEGOAL from '../../assets/helpModalAssets/GOALS-REMOVEGOAL.webp'
import GOALS_STEPTYPES from '../../assets/helpModalAssets/GOALS-STEPTYPES.webp'
//components
import { HelpModal } from '../../components/modals/HelpModal/HelpModal'

const goalHelpContent = [
    {
        title: 'Add new Goal',
        description: 'Add new goal by clicking "Create new goal" button',
        img: {
            src: GOALS_ADDGOAL,
            alt: '"Create new goal" button',
        },
    },
    {
        title: 'Goal step types',
        description: 'You can keep track of your goals by breaking them down into smaller steps. You can define a step in one of three ways: Numeric, True/False and Task',
        img: {
            src: GOALS_STEPTYPES,
            alt: '',
        },
    },
    {
        title: 'Task and True/False steps',
        description: 'There is not much difference between True/False steps and Task steps in the way progress is tracked, both are either accomplished or not. Major difference between them is that Task step is also displayed in other parts of application as regular task.',
        img: {
            src: GOALS_BOOLTASKDESC,
            alt: 'True/False and Task steps',
        },
    },
    {
        title: 'Numeric step',
        description: 'Numerical steps allow you to track progress by setting a numeric target',
        img: {
            src: GOALS_NUMBERSTEP,
            alt: 'Numerical step',
        },
    },
    {
        title: 'Goal steps checkboxes',
        description: 'Use checkboxes to mark step as finished. Number steps will set its value automaticlly to match the target',
        img: {
            src: GOALS_CHECKBOXES,
            alt: 'Checkboxes',
        },
    },
    {
        title: 'Add new Steps',
        description: 'Use "Add more Steps" button below current steps in existing goal to add new goal steps.',
        img: {
            src: GOALS_ADDSTEPS,
            alt: '"Add more steps" button',
        },
    },
    {
        title: 'Remove Goal',
        description:
            'Remove Goal by using button at left-bottom corner of its page',
        img: {
            src: GOALS_REMOVEGOAL,
            alt: '"Remove Goal" button',
        },
    },
]

export const GoalsHelp = () => {
    return (
        <HelpModal slidesContent={goalHelpContent} />
    );
}