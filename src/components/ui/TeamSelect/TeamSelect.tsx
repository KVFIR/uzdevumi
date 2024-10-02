//hooks
import { useDataContext } from "../../../hooks/useDataContext";
import { useTranslation } from 'react-i18next';
//interfaces
import { Team } from "../../../interfaces";
import { ComponentPropsWithoutRef } from 'react'
//styles
import styles from './TeamSelect.module.scss'
//assets
import unfold from '../../../assets/icons/unfold.svg'
//components
import { Fragment } from 'react'
import { Listbox, Transition } from "@headlessui/react";

interface TeamSelectProps {
    team: Team | null
    setTeam: React.Dispatch<React.SetStateAction<Team | null>>
    className?: string
}

export const TeamSelect = ({ team, setTeam, className, ...props }: TeamSelectProps & ComponentPropsWithoutRef<'div'>) => {
    const { teams } = useDataContext()
    const { t } = useTranslation();

    return (
        <Listbox 
            as='div' 
            className={`${styles.teamSelect} ${className}`} 
            {...props} 
            value={team} 
            onChange={setTeam}
            defaultValue={null as Team | null}
        >
            {team && <>
                <Listbox.Button
                    className={styles.selectButton}
                    aria-label={t('common.openTeamsList')}
                >
                    {team.name}
                    <img src={unfold} alt={t('common.twoArrows')} />
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    enter={styles.transition}
                    enterFrom={styles.transitionEnterFrom}
                    enterTo={styles.transitionEnterTo}
                >
                    <Listbox.Options>
                        {teams?.map((team: Team) => (
                            <Listbox.Option
                                key={team.id}
                                value={team}
                                as={Fragment}
                            >
                                {({ active }) => (
                                    <li
                                        className={`${active ? styles.optionActive : ''}`}
                                    >{team.name}</li>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition></>}
        </Listbox>
    );
}