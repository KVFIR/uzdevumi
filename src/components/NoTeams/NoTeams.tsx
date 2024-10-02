//styles
import styles from './NoTeams.module.scss'
//components
import { Link } from 'react-router-dom';

export const NoTeams = () => {
    return (
        <div className={styles.container}>
            <Link to='../Dashboard'>Create at least one team to add new statuses and tasks!</Link>
        </div>
    );
}