import { useState, ComponentPropsWithoutRef } from 'react'
import { useDataContext } from '../../../hooks/useDataContext';
import { useTranslation } from 'react-i18next';
//styles
import styles from './SpacesSection.module.scss'
//components
import { AddSpaceForm } from "../../../components/forms/AddSpaceForm/AddSpaceForm";
import { SpaceDeleteModal } from "../../../components/ui/SpaceDeleteModal/SpaceDeleteModal";

export const SpacesSection = ({ ...props }: ComponentPropsWithoutRef<'section'>) => {
    const { t } = useTranslation();
    const { spaces, statuses, tasks } = useDataContext()
    const [showAddSpace, setShowAddSpace] = useState(false)
    const handleShowAddSpace = () => {
        setShowAddSpace(!showAddSpace)
    }

    return (
        <section className={styles.spacesSection} {...props}>
            <h2 className={`${styles.sectionHeader} ${styles.spacesCaption}`}>{t('dashboard.spaces')}</h2>
            <div className={styles.spaces}>
                <ul>
                    {!spaces || spaces.length === 0 ?
                        <div className={styles.noTasks}>{t('dashboard.noWorkspaces')}</div>
                        : spaces.map(space =>
                            <li key={space.id}>
                                {space.name}
                                <br />
                                <span className={styles.itemDescription}>
                                    {t('spaces.statusesAndTasks', { statusCount: statuses?.filter(t => t.spaceId === space.id!).length, taskCount: tasks?.filter(t => t.spaceId === space.id!).length })}
                                </span>
                                <SpaceDeleteModal space={space} className={styles.spaceDeleteBtn} />
                            </li>
                        )}
                </ul>
                {showAddSpace ?
                    <AddSpaceForm handleShowAddSpaceForm={handleShowAddSpace} />
                    : <button className={styles.showAddSpaceBtn} onClick={handleShowAddSpace}>
                        {t('dashboard.addNewSpace')}
                    </button>
                }
            </div>
        </section>
    );
}