import { useState } from 'react';
//styles
import styles from './Home.module.scss'
//components
import { Login } from './Login'
import { Register } from './Register'

export const Home = () => {
    const [isSignupOpen, setIsSignupOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    const handleClosingForms = () => {
        setIsSignupOpen(false)
        setIsLoginOpen(false)
    }

    return (
        <div className={styles.container}>
            <section>
                <h1>Task<br />Manager</h1>
                {!isSignupOpen && !isLoginOpen && <>
                    <p>
                        <span className={styles.subtitle}>Track your tasks and progress towards your goals.</span>
                        Manage your tasks in a to-do list, calendar, or semi-kanban board in my highly customizable task management app.
                        Keep track of your goal progress and make your dreams come true!
                    </p>
                    <button className={styles.signupBtn} onClick={() => { setIsSignupOpen(true) }}>Sign Up</button>
                    <button className={styles.loginBtn} onClick={() => { setIsLoginOpen(true) }}>Log In</button>
                </>}
                {isSignupOpen &&
                    <Register handleClosingForms={handleClosingForms} />
                }
                {isLoginOpen &&
                    <Login handleClosingForms={handleClosingForms} />
                }
                <p>Test account: <br /> login: test@test.com <br /> password: test12345 </p>
            </section >
        </div >
    );
}