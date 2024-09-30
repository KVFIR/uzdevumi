import { Fragment, ReactNode, createContext, useContext, useRef, ComponentPropsWithoutRef, CSSProperties } from 'react'
//components
import { Popover, Transition } from '@headlessui/react'
//styles
import styles from './AnimatedPopover.module.scss'

interface AnimatedPopoverProps {
    panelStyles?: CSSProperties
    children: ReactNode
    buttonText?: ReactNode
}

const closePopoverContext = createContext<(() => void) | null>(null)

export const usePopoverContext = () => {
    return useContext(closePopoverContext)
}

export const AnimatedPopover = ({ buttonText, children, panelStyles, ...props }: AnimatedPopoverProps & ComponentPropsWithoutRef<'button'>) => {

    const closeButtonRef = useRef<HTMLButtonElement>(null)

    const closePopover = () => {
        closeButtonRef.current?.click()
    }

    return (
        <Popover as={Fragment}>
            <Popover.Button
                ref={closeButtonRef}
                {...props}
            >
                {buttonText}
            </Popover.Button>
            <Transition
                enter={styles.transition}
                enterFrom={styles.transitionEnterFrom}
                enterTo={styles.transitionEnterTo}
            >
                <Popover.Panel style={{ ...panelStyles }}>
                    <closePopoverContext.Provider value={closePopover}>
                        {children}
                    </closePopoverContext.Provider>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}