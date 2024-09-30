import dayjs from 'dayjs';
//styles
import styles from './Dashboard.module.scss'
//components
import { Layout } from '../../components/layout/Layout/Layout'
import { GoalProgressSection } from './GoalProgressSection/GoalProgressSection';
import { SpacesSection } from './SpacesSection/SpacesSection';
import { HighPrioTaskSection } from './HighPrioSection/HighPrioTasksSection';
import { TodaySection } from './TodaySection/TodaySection';
import { DashboardHelp } from './DashboardHelp';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
    return (
        <Layout title="Dashboard">
            <div className={styles.subheader}>
                <span>
                    {dayjs().format('dddd DD/MM/YYYY')}
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