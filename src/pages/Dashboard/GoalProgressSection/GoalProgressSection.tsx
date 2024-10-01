import { useTranslation } from 'react-i18next';
import { useDataContext } from '../../../hooks/useDataContext';
import styles from './GoalProgressSection.module.scss'
import { GoalLink } from '../../../components/ui/GoalLink/GoalLink';

export const GoalProgressSection = () => {
    const { t } = useTranslation();
    const { goals } = useDataContext()

    return (
        <section className={styles.goalProgressSection}>
            <h2 className={styles.goalProgressCaption}>{t('dashboard.goalProgress')}</h2>
            <div className={styles.goalLinks}>
                {!goals || goals.length === 0 ?
                    <div className={styles.noTasks}>{t('dashboard.noGoals')}</div>
                    :
                    goals.slice(0, 5).map(goal => <GoalLink key={goal.id} goal={goal} />)
                }
            </div>
        </section>
    );
}