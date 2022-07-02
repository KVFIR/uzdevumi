import { Listbox, Transition } from '@headlessui/react'
import styles from './Select.module.css'
import transitionStyles from '../AnimatedPopover/AnimatedPopover.module.css'
import unfold from '../../assets/unfold.svg'
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext'

const Select = () => {
    const { spaces, selectedSpace, setSelectedSpace } = useContext(DataContext) as any

    return (
        <>{selectedSpace &&
            <Listbox as='div' className={styles.container} value={selectedSpace} onChange={setSelectedSpace} >
                <Listbox.Button className={styles.select_button}>{selectedSpace.space} <img src={unfold} alt="" /></Listbox.Button>
                <Transition enter={transitionStyles.transition} enterFrom={transitionStyles.transition_enter_from} enterTo={transitionStyles.transition_enter_to}>
                    <Listbox.Options>
                        {spaces.map((space: any) => (
                            <Listbox.Option
                                key={space.id}
                                value={space}
                            >
                                {space.space}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        }</>

    );
}

export default Select;