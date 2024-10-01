import { useState } from 'react';
import { useTranslation } from 'react-i18next';
//styles
import styles from './Home.module.scss'
//components
import { Login } from './Login'
import { Register } from './Register'

export const Home = () => {
    const { t } = useTranslation();
    const [isSignupOpen, setIsSignupOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    const handleClosingForms = () => {
        setIsSignupOpen(false)
        setIsLoginOpen(false)
    }

    return (
        <div className={styles.container}>
            <section>
                <h1>{t('common.taskManager')}</h1>
                {!isSignupOpen && !isLoginOpen && <>
                    <p>
                        <span className={styles.subtitle}>{t('home.trackTasks')}</span>
                        {t('home.manageTasksDescription')}
                        {t('home.keepTrackGoals')}
                    </p>
                    <button className={styles.signupBtn} onClick={() => { setIsSignupOpen(true) }}>{t('common.signUp')}</button>
                    <button className={styles.loginBtn} onClick={() => { setIsLoginOpen(true) }}>{t('common.logIn')}</button>
                </>}
                {isSignupOpen &&
                    <Register handleClosingForms={handleClosingForms} />
                }
                {isLoginOpen &&
                    <Login handleClosingForms={handleClosingForms} />
                }
                <p>{t('common.testAccount')} <br /> {t('common.login')} test@test.com <br /> {t('common.password')} test12345 </p>
            </section >
        </div >
    );
}