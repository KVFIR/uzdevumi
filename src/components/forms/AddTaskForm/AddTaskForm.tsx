import dayjs, { Dayjs } from 'dayjs'
import { usePopoverContext } from '../../AnimatedPopover/AnimatedPopover'
//interaces
import { FormEvent, ComponentPropsWithoutRef } from 'react'
import { DocumentReference } from 'firebase/firestore'
import { Status, Task } from '../../../interfaces'
//styles
import styles from './AddTaskForm.module.scss'
//hooks
import { useState, useEffect } from 'react'
import { useNewGoalContext } from '../../../hooks/useNewGoalContext';
import { useDataContext } from '../../../hooks/useDataContext'
import { useDb } from '../../../hooks/useDb'
//components
import { StatusSelectInput } from '../../ui/StatusSelectInput/StatusSelectInput'
import { PriorityChangeInput } from '../../ui/PriorityChangeInput/PriorityChangeInput'
import { DateInputs } from '../../ui/DateInputs/DateInputs'
import { NoStatuses } from '../../NoStatuses/NoStatuses'
import { SpaceSelect } from '../../ui/SpaceSelect/SpaceSelect'

interface AddTaskFormProps {
    defaultStatus?: Status
    showDateInputs?: boolean
    showSpaceSelect?: boolean
    defaultDate?: Dayjs
    addGoalStep?: boolean
    goalID?: string
    className?: string
}

export const AddTaskForm = ({
    defaultStatus,
    showDateInputs = false,
    showSpaceSelect = false,
    defaultDate = dayjs(),
    goalID,
    addGoalStep,
    className,
    ...props
}: AddTaskFormProps & ComponentPropsWithoutRef<'form'>) => {
    const { addDocument: addTaskDocument } = useDb('tasks')
    const { addDocument: addGoalStepDocument } = useDb('goalSteps')
    const closePopover = usePopoverContext()
    const newGoalCtx = useNewGoalContext()
    const { selectedSpace, statuses } = useDataContext()
    const [openDateInputs, setOpenDateInputs] = useState(showDateInputs)
    const [taskRef, setTaskRef] = useState<DocumentReference<any> | null>(null)
    //form inputs
    const [space, setSpace] = useState(selectedSpace)
    const [text, setText] = useState('')
    const [status, setStatus] = useState<Status | null>(defaultStatus ? defaultStatus : statuses && statuses[0])
    const [priority, setPriority] = useState('low')
    const [fromDate, setFromDate] = useState(defaultDate.format('YYYY-MM-DDThh:mm'))
    const [dueDate, setDueDate] = useState(defaultDate.format('YYYY-MM-DDThh:mm'))

    useEffect(() => {
        if (!taskRef || !addGoalStep) return
        if (newGoalCtx) {
            newGoalCtx.addStepInNewGoal({
                type: 'task',
                progress: 0,
                taskID: taskRef.id!
            })
            return
        }

        addGoalStepDocument({
            type: 'task',
            progress: 0,
            taskID: taskRef.id!,
            goalID: goalID
        })
    }, [taskRef]) //If form appeares in AddStep(goalsteps) it also adds task as a goalStep.


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const from = dayjs(fromDate, `YYYY-MM-DDThh:mm`)
        const due = dayjs(dueDate, `YYYY-MM-DDThh:mm`)

        let task: Task = {
            description: text,
            priority: priority,
            spaceId: selectedSpace ? selectedSpace.id! : '',
            statusId: status ? status.id! : '',
            fromDate: openDateInputs && (from.isBefore(due) || from.isSame(due)) ? from.unix() : null,
            dueDate: openDateInputs && (from.isBefore(due) || from.isSame(due)) ? due.unix() : null,
        }

        addTaskDocument(task).then(ref => {
            ref && setTaskRef(ref)
        })

        setText('')
        setStatus(defaultStatus || (statuses && statuses[0]))
        setSpace(selectedSpace)
        setPriority('low')
        setOpenDateInputs(showDateInputs)
        setDueDate(defaultDate.format('YYYY-MM-DDThh:mm'))
        setFromDate(defaultDate.format('YYYY-MM-DDThh:mm'))
        closePopover && closePopover()
    }

    return (
        !statuses || statuses.length === 0 ?
            <NoStatuses className={styles.form} />
            :
            <form
                onSubmit={handleSubmit}
                className={`${styles.form} ${className}`}
                {...props}
            >
                {showSpaceSelect && <div>
                    <label htmlFor='spaceSelect'>
                        Space:
                    </label>
                    <SpaceSelect
                        space={space}
                        setSpace={setSpace}
                        className={styles.spaceSelect}
                    />
                </div>}
                <label>
                    Status:
                    <br />
                    <StatusSelectInput
                        status={status}
                        setStatus={setStatus}
                        space={space}
                    />
                </label>
                <label>
                    Description:
                    <br />
                    <input
                        type={'text'}
                        required
                        className={styles.descriptionInput}
                        maxLength={550}
                        value={text}
                        onChange={(e) => { setText(e.target.value) }}
                    />
                </label>
                <label>
                    Priority:
                    <PriorityChangeInput priority={priority} setPriority={setPriority} />
                </label>
                <DateInputs
                    fromDate={fromDate}
                    setFromDate={setFromDate}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    openSwitch={openDateInputs}
                    setOpenSwitch={setOpenDateInputs}
                />
                <button
                    type={"submit"}
                    className={styles.submitButton}
                >
                    Submit</button>
            </form>
    )
}