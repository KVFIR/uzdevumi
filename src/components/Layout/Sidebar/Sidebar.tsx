import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
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
//styles
import styles from './Sidebar.module.scss'
//components
import { Link } from 'react-router-dom';
import { AppHelp } from './AppHelp';

export const Sidebar = () => {
    const { t } = useTranslation();
    const { logout } = useLogout()
    const [toggleSidebar, setToggleSidebar] = useState(false)
    const sidebarPanelRef = useRef<HTMLDivElement | null>(null)

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
                className={`${styles.toggleSidebar} ${toggleSidebar ? styles.toggled : ''}`}>
                <img src={menu} alt={t('toggleMenu')} />
            </button>
            <div className={` ${toggleSidebar && styles.sideBarOpen} ${styles.container}`} ref={sidebarPanelRef}>
                <div>
                    <span className={styles.logo}>
                        {t('taskManager')}
                        <hr />
                    </span>
                    <nav>
                        <Link to='/Dashboard'>
                            <img src={home} alt={t('dashboard')} />
                            <span>{t('dashboard')}</span>
                        </Link>
                        <Link to='/List'>
                            <img src={checklist} alt={t('list')} />
                            <span>{t('list')}</span>
                        </Link>
                        <Link to='/Board'>
                            <img src={width} alt={t('board')} />
                            <span>{t('board')}</span>
                        </Link>
                        <Link to={`/Calendar/${dayjs().format('DD-MM-YYYY')}/Day`}>
                            <img src={calendar} alt={t('calendar')} />
                            <span>{t('calendar')}</span>
                        </Link>
                        <Link to='/Goals'>
                            <img src={monitoring} alt={t('goals')} />
                            <span>{t('goals')}</span>
                        </Link>
                    </nav>
                </div>
                <div className={styles.settings}>
                    <AppHelp />
                    <button className={styles.logoutButton} onClick={handleLogoutclick}>
                        <img src={logoutIcon} alt={t('logout')}></img><span>{t('logout')}</span>
                    </button>
                </div>
            </div>
        </>
    );
}