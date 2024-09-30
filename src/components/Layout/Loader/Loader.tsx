import styles from './Loader.module.scss'

export const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <h1>Task Manager</h1>
                <div className={styles.ldsRing}><div /><div /><div /><div /></div>
            </div>
        </div>
    );
}