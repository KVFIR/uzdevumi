import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import packageJson from '../../../../package.json';
//hooks
import { useLogout } from '../../../hooks/useLogout'
import { useState, useRef, MouseEvent } from 'react';
//utils
import { onClickOutside } from '../../../utils/onClickOutside';
//assets
import calendar from '../../../assets/icons/calendar.svg'
import checklist from '../../../assets/icons/checklist.svg'
import home from '../../../assets/icons/home.svg'
import width from '../../../assets/icons/width.svg'
import monitoring from '../../../assets/icons/monitoring.svg'
import menu from '../../../assets/icons/menu.svg'
import logoutIcon from '../../../assets/icons/logout.svg'
import adminIcon from '../../../assets/icons/monitoring.svg'
//styles
import styles from './Sidebar.module.scss'
//components
import { Link } from 'react-router-dom';
import { AppHelp } from './AppHelp';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

export const Sidebar = () => {
    const { t } = useTranslation();
    const { logout } = useLogout()
    const [toggleSidebar, setToggleSidebar] = useState(false)
    const sidebarPanelRef = useRef<HTMLDivElement | null>(null)
    const userContext = useContext(UserContext);
    const user = userContext?.user;

    if (toggleSidebar && sidebarPanelRef.current) {
        onClickOutside(sidebarPanelRef.current, () => { setToggleSidebar(!toggleSidebar) })
    }

    const handleMenuToggleClick = (e: MouseEvent) => {
        e.stopPropagation()
        setToggleSidebar(!toggleSidebar)
    }

    const handleLogoutclick = () => {
        logout()
    }

    return (
        <>
            <button
                onClick={handleMenuToggleClick}
                className={`${styles.toggleSidebar} ${toggleSidebar ? styles.toggled : ''}`}
                aria-label={t('common.toggleMenu')}
            >
                <img src={menu} alt={t('common.toggleMenu')} />
            </button>
            <div className={`${toggleSidebar ? styles.sideBarOpen : ''} ${styles.container}`} ref={sidebarPanelRef}>
                <div>
                    <span className={styles.logo}>
                        {t('common.taskManager')}
                        <hr />
                    </span>
                    <nav>
                        <Link to='/Dashboard'>
                            <img src={home} alt={t('navigation.dashboard')} />
                            <span>{t('navigation.dashboard')}</span>
                        </Link>
                        <Link to='/List'>
                            <img src={checklist} alt={t('navigation.list')} />
                            <span>{t('navigation.list')}</span>
                        </Link>
                        <Link to='/Board'>
                            <img src={width} alt={t('navigation.board')} />
                            <span>{t('navigation.board')}</span>
                        </Link>
                        <Link to={`/Calendar/${dayjs().format('DD-MM-YYYY')}/Day`}>
                            <img src={calendar} alt={t('navigation.calendar')} />
                            <span>{t('navigation.calendar')}</span>
                        </Link>
                        <Link to='/Goals'>
                            <img src={monitoring} alt={t('navigation.goals')} />
                            <span>{t('navigation.goals')}</span>
                        </Link>
                        {user?.role === 'admin' && (
                            <Link to="/Admin" className={styles.navLink}>
                                <img src={adminIcon} alt="Admin Tasks" />
                                <span>Admin</span>
                            </Link>
                        )}
                    </nav>
                </div>
                <div className={styles.settings}>
                    <AppHelp />
                    <span className={styles.version}> v{packageJson.version}</span>
                    <button className={styles.logoutButton} onClick={handleLogoutclick} aria-label={t('common.logout')}>
                        <img src={logoutIcon} alt={t('common.logout')} />
                        <span>{t('common.logout')}</span>
                    </button>
                </div>
            </div>
        </>
    );
}