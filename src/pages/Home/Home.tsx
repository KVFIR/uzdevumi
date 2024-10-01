import { useState } from 'react';
import { useTranslation } from 'react-i18next';
//styles
import styles from './Home.module.scss'
//components
import { Login } from './Login'
import { Register } from './Register'

export const Home = () => {
    const [isSignupOpen, setIsSignupOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const { t } = useTranslation();

    const handleClosingForms = () => {
        setIsSignupOpen(false)
        setIsLoginOpen(false)
    }

    return (
        <div className={styles.container}>
            <section>
                <h1>{t('taskManager')}</h1>
                {!isSignupOpen && !isLoginOpen && <>
                    <p>
                        <span className={styles.subtitle}>{t('trackTasks')}</span>
                        {t('manageTasksDescription')}
                        {t('keepTrackGoals')}
                    </p>
                    <button className={styles.signupBtn} onClick={() => { setIsSignupOpen(true) }}>{t('signUp')}</button>
                    <button className={styles.loginBtn} onClick={() => { setIsLoginOpen(true) }}>{t('logIn')}</button>
                </>}
                {isSignupOpen &&
                    <Register handleClosingForms={handleClosingForms} />
                }
                {isLoginOpen &&
                    <Login handleClosingForms={handleClosingForms} />
                }
                <p>{t('testAccount')} <br /> {t('login')} test@test.com <br /> {t('password')} test12345 </p>
            </section >
        </div >
    );
}