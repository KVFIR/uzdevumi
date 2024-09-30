import { FormEvent, MouseEventHandler, useState } from 'react';
//assets
import arrowback from '../../assets/icons/arrowback.svg'
//styles
import styles from './Home.module.scss'
//hooks
import { useLogin } from '../../hooks/useLogin'

interface LoginProps {
    handleClosingForms: MouseEventHandler<HTMLButtonElement>
}

export const Login = ({ handleClosingForms }: LoginProps) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, errorMessage } = useLogin()


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <>
            <h2 className={styles.subtitle}>Log in</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email</span>
                    <input type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <div className={styles.button_row}>
                    <button type='submit' className={styles.loginBtn}>Log in!</button>
                    <button
                        className={styles.return_button}
                        onClick={handleClosingForms}
                        type='button'
                        aria-label='Return button'
                    >
                        <img src={arrowback} alt='Back arrow' />
                    </button>
                </div>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </>
    );
}
