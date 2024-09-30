import { useState, MouseEventHandler, FormEvent } from 'react';
//hooks
import { useSignup } from '../../hooks/useSignup'
//assets
import arrowback from '../../assets/icons/arrowback.svg'
//styles
import styles from './Home.module.scss'

interface RegisterProps {
    handleClosingForms: MouseEventHandler<HTMLButtonElement>
}

export const Register = ({ handleClosingForms }: RegisterProps) => {
    const { signup, errorMessage } = useSignup()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        signup(email, password)
    }

    return (
        <>
            <h2 className={styles.subtitle}>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email</span>
                    <input
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <div className={styles.button_row}>
                    <button type='submit' className={styles.signupBtn}>Sign up!</button>
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