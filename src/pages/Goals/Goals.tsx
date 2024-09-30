//hooks
import { useDataContext } from '../../hooks/useDataContext';
//styles
import styles from './Goals.module.scss'
//components
import { Link } from 'react-router-dom';
import { GoalsHelp } from './GoalsHelp';
import { GoalLink } from '../../components/ui/GoalLink/GoalLink';
import { Layout } from '../../components/layout/Layout/Layout'

export const Goals = () => {
    const { goals } = useDataContext()

    return (
        <Layout title='Goals'>
            <GoalsHelp />
            <div className={styles.container}>
                <h2 className={styles.subtitle}>Break your goals into small targets, track their progress and make your dreams come true!</h2>
                <section className={styles.goalList}>
                    {goals?.map(goal =>
                        <GoalLink
                            key={goal.id}
                            goal={goal}
                        />)}
                    <Link to='NewGoal' className={styles.newGoalLink}>Create new goal</Link>
                </section>
            </div>
        </Layout>
    );
}