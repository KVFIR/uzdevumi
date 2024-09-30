//hooks
import { useDataContext } from "../../../hooks/useDataContext";
//styles
import styles from './Layout.module.scss'
//components
import { Sidebar } from "../Sidebar/Sidebar";
import { Loader } from "../Loader/Loader";


interface LayoutProps {
    children: React.ReactNode
    title: string
}

export const Layout = ({ children, title }: LayoutProps) => {

    const { isPending } = useDataContext()

    return (
        <>
            <Sidebar />
            {isPending ?
                <Loader /> :
                <div className={styles.layoutContainer}>
                    <header className={styles.header}>
                        <h1>{title}</h1>
                        <hr />
                    </header>
                    <main>
                        {children}
                    </main>
                </div>}
        </>
    );
}