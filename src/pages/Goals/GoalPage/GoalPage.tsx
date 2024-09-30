//hooks
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../../hooks/useDataContext";
//styles
import styles from './GoalPage.module.scss'
//utils
import { getGoalStepProgess } from "../../../utils/getGoalStepProgress";
//components
import { GoalDeleteModal } from "../GoalDeleteModal/GoalDeleteModal";
import { GoalsHelp } from "../GoalsHelp";
import { AddStep } from "../AddStep/AddStep";
import { GoalSteps } from "../GoalSteps/GoalSteps";
import { Layout } from "../../../components/layout/Layout/Layout";

export const GoalPage = () => {
    const { goalID } = useParams()
    const { goals, goalSteps } = useDataContext()
    const [openAddStep, setOpenAddStep] = useState(false)
    const gs = goalSteps?.filter(gs => gs.goalID === goalID)
    const goal = goals?.find(goal => goal.id === goalID)
    const goalProgress = getGoalStepProgess(gs)

    return (
        <Layout title={'Goals'}>
            {goal && <>
                <div className={styles.subHeader}>
                    <h2 className={styles.goalTitle}>
                        {goal.title}
                    </h2>
                    <span>
                        Progress:
                        <span className={styles.goalProgress}>
                            {goalProgress.toFixed()}%
                        </span>
                        <GoalsHelp />
                    </span>
                </div>
                <GoalSteps steps={gs} />
                {goal.description && <p className={styles.description}>{goal.description}</p>}
                {openAddStep ?
                    <AddStep goalID={goalID} />
                    : <button
                        className={styles.openAddStepsBtn}
                        onClick={() => { setOpenAddStep(true) }}>
                        Add more steps
                    </button>}
                <GoalDeleteModal goal={goal} />
            </>}
        </Layout>
    );
}