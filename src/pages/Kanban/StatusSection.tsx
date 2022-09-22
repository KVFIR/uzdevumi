//interfaces
import { Status } from "../../interfaces";
//hooks
import { useState } from "react";
//styles
import styles from './Kanban.module.scss'
//components
import { StatusOrderChangeBtn } from '../../components/ui/StatusOrderChangeBtn/StatusOrderChangeBtn'
import { StatusDeleteBtn } from '../../components/ui/StatusDeleteBtn/StatusDeleteBtn'
import { StatusHideBtn } from "../../components/ui/StatusHideBtn/StatusHideBtn";
import { DropToStatusTaskList } from "./StatusTaskList";

interface StatusSectionProps {
    status: Status
}

export const StatusSection = ({ status }: StatusSectionProps) => {
    const [showSection, setShowSection] = useState(true)

    return (
        <>
            {showSection ?
                <section>
                    <div className={styles.sectionHeader} style={{ backgroundColor: status.color }}>
                        <div>
                            <StatusHideBtn setShowStatus={setShowSection} showStatus={showSection} />
                            <StatusOrderChangeBtn variant='left' elemId={status.id!} current={status} />
                        </div>
                        <h2>{status.name}</h2>
                        <div>
                            <StatusDeleteBtn status={status} />
                            <StatusOrderChangeBtn variant='right' elemId={status.id!} current={status} />
                        </div>
                    </div>
                    <DropToStatusTaskList status={status} />
                </section > :
                <section className={`${styles.section} ${styles.sectionHidden}`} style={{ backgroundColor: status.color }}>
                    <StatusHideBtn showStatus={showSection} setShowStatus={setShowSection} />
                </section>
            }
        </>
    );
}