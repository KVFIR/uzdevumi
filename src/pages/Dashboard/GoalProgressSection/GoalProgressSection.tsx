//hooks
import { useDataContext } from '../../../hooks/useDataContext';
//styles
import styles from './GoalProgressSection.module.scss'
//components
import { GoalLink } from '../../../components/ui/GoalLink/GoalLink';

export const GoalProgressSection = () => {
    const { goals } = useDataContext()

    return (
        <section className={styles.goalProgressSection}>
            <h2 className={styles.goalProgressCaption}>Goal progress</h2>
            <div className={styles.goalLinks}>
                {!goals || goals.length === 0 ?
                    <div className={styles.noTasks}>You don't have any goals created</div>
                    :
                    goals.slice(0, 5).map(goal => <GoalLink key={goal.id} goal={goal} />)
                }
            </div>
        </section>
    );
}