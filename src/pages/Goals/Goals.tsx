import { useTranslation } from 'react-i18next';
//hooks
import { useDataContext } from '../../hooks/useDataContext';
//styles
import styles from './Goals.module.scss'
//components
import { Link } from 'react-router-dom';
import { GoalsHelp } from './GoalsHelp';
import { GoalLink } from '../../components/ui/GoalLink/GoalLink';
import { Layout } from '../../components/Layout/Layout/Layout'

export const Goals = () => {
    const { t } = useTranslation();
    const { goals } = useDataContext()

    return (
        <Layout title={t('goals.title')}>
            <GoalsHelp />
            <div className={styles.container}>
                <h2 className={styles.subtitle}>{t('goals.breakGoalsIntoTargets')}</h2>
                <section className={styles.goalList}>
                    {goals?.map(goal =>
                        <GoalLink
                            key={goal.id}
                            goal={goal}
                        />)}
                    <Link to='NewGoal' className={styles.newGoalLink}>{t('goals.createNewGoal')}</Link>
                </section>
            </div>
        </Layout>
    );
}