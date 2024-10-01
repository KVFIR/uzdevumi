import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
//styles
import styles from './Dashboard.module.scss'
//components
import { Layout } from '../../components/Layout/Layout/Layout'
import { GoalProgressSection } from './GoalProgressSection/GoalProgressSection';
import { SpacesSection } from './SpacesSection/SpacesSection';
import { HighPrioTaskSection } from './HighPrioSection/HighPrioTasksSection';
import { TodaySection } from './TodaySection/TodaySection';
import { DashboardHelp } from './DashboardHelp';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t('dashboard.title')}>
            <div className={styles.subheader}>
                <span>
                    {dayjs().format('dddd DD.MM.YYYY')}
                </span>
                <DashboardHelp />
            </div>
            <div className={styles.gridContainer}>
                <TodaySection />
                <HighPrioTaskSection />
                <GoalProgressSection />
                <SpacesSection />
            </div>
            <Outlet />
        </Layout>
    );
}