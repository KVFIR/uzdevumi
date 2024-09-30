import { useState, ComponentPropsWithoutRef } from 'react'
//assets
import arrowRight from '../../../assets/icons/arrowRight.svg'
import arrowLeft from '../../../assets/icons/arrowLeft.svg'
import help from '../../../assets/icons/help.svg'
import close from '../../../assets/icons/close.svg'
//styles
import styles from './HelpModal.module.scss'
//components
import { Dialog, Tab } from "@headlessui/react";

interface HelpModalProps {
    slidesContent: { title: string, description: string, img: { src: string, alt: string } }[]
    buttonStyles?: string
}

export const HelpModal = ({ slidesContent, buttonStyles, ...buttonProps }: HelpModalProps & ComponentPropsWithoutRef<'button'>) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                className={`${styles.openHelp} ${buttonStyles}`}
                {...buttonProps}
                onClick={() => { setIsOpen(true) }}
                aria-label='Open window with help'
            >
                <img src={help} alt='Question mark' />
            </button>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className={styles.modalContainer}
            >
                <Dialog.Panel className={styles.panel}>
                    <button
                        aria-label='close window'
                        className={styles.closeButton}
                        onClick={() => { setIsOpen(false) }}
                    >
                        <img src={close} alt='close modal' />
                    </button>
                    <Tab.Group
                        selectedIndex={selectedIndex}
                        onChange={setSelectedIndex}
                    >
                        <Tab.Panels>
                            {slidesContent.map(({ title, description, img }) => (
                                <Tab.Panel key={description}>
                                    <Dialog.Title className={styles.title}>{title}</Dialog.Title>
                                    <img
                                        className={styles.presentation}
                                        src={img.src}
                                        alt={img.alt}
                                    />
                                    <Dialog.Description className={styles.description}>{description}</Dialog.Description>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                        <Tab.List className={styles.tabList}>
                            <button
                                onClick={() => { selectedIndex > 0 && setSelectedIndex(selectedIndex - 1) }}
                                aria-label='Click to move to previous slide'
                            >
                                <img src={arrowLeft} alt='Move back arrow'></img>
                            </button>
                            {slidesContent.map((i, index) =>
                                <Tab
                                    key={i.description}
                                    className={`${selectedIndex === index && styles.tabActive} ${styles.tab}`}
                                    aria-label={`${index} slide, currently ${selectedIndex} slide opened`}
                                />
                            )}
                            <button
                                onClick={() => { selectedIndex < slidesContent.length - 1 && setSelectedIndex(selectedIndex + 1) }}
                                aria-label='Click to move to next slide'
                            >
                                <img src={arrowRight} alt='Move forward arrow'></img>
                            </button>
                        </Tab.List>
                    </Tab.Group>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}