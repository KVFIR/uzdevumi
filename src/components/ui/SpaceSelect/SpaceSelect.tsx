//hooks
import { useDataContext } from "../../../hooks/useDataContext";
import { useTranslation } from 'react-i18next';
//interfaces
import { Space } from "../../../interfaces";
import { ComponentPropsWithoutRef } from 'react'
//styles
import styles from './SpaceSelect.module.scss'
//assets
import unfold from '../../../assets/icons/unfold.svg'
//components
import { Fragment } from 'react'
import { Listbox, Transition } from "@headlessui/react";

interface SpaceSelectProps {
    space: Space | null
    setSpace: React.Dispatch<React.SetStateAction<Space | null>>
    className?: string
}

export const SpaceSelect = ({ space, setSpace, className, ...props }: SpaceSelectProps & ComponentPropsWithoutRef<'div'>) => {
    const { spaces } = useDataContext()
    const { t } = useTranslation();

    return (
        <Listbox 
            as='div' 
            className={`${styles.spaceSelect} ${className}`} 
            {...props} 
            value={space} 
            onChange={setSpace}
            defaultValue={null as Space | null}
        >
            {space && <>
                <Listbox.Button
                    className={styles.selectButton}
                    aria-label={t('common.openSpacesList')}
                >
                    {space.name}
                    <img src={unfold} alt={t('common.twoArrows')} />
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    enter={styles.transition}
                    enterFrom={styles.transitionEnterFrom}
                    enterTo={styles.transitionEnterTo}
                >
                    <Listbox.Options>
                        {spaces?.map((space: Space) => (
                            <Listbox.Option
                                key={space.id}
                                value={space}
                                as={Fragment}
                            >
                                {({ active }) => (
                                    <li
                                        className={`${active ? styles.optionActive : ''}`}
                                    >{space.name}</li>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition></>}
        </Listbox>
    );
}