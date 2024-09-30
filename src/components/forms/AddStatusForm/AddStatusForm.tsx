import { FormEvent, useState } from "react";
//styles
import styles from './AddStatusForm.module.scss'
//hooks
import { usePopoverContext } from "../../AnimatedPopover/AnimatedPopover";
import { useDataContext } from "../../../hooks/useDataContext";
import { useDb } from "../../../hooks/useDb";

export const AddStatusForm = () => {
    const { addDocument } = useDb('statuses')
    const closePopover = usePopoverContext()
    const { statuses, selectedSpace } = useDataContext()
    const [name, setName] = useState('')
    const [color, setColor] = useState('#FFFFFF')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        addDocument({
            name: name,
            orderIndex: statuses && statuses.length !== 0 ? statuses[statuses.length - 1].orderIndex + 1 : 0,
            color: color,
            spaceId: selectedSpace?.id
        })
        closePopover && closePopover()
        setName('')
        setColor('#FFFFFF')
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h3>Add new status:</h3>
            <label>
                Status name: <br />
                (ex. „In Progress”)
                <br />
                <input
                    type={'text'}
                    className={styles.textInput}
                    required
                    maxLength={20}
                    onChange={(e) => { setName(e.target.value) }}
                />
            </label>
            <label>
                Choose color:
                <br />
                <input
                    className={styles.colorPicker}
                    type={'color'}
                    defaultValue={'#FFFFFF'}
                    onChange={(e) => { setColor(e.target.value) }}
                />
            </label>

            <button type={"submit"} className={styles.submitButton}>Submit</button>
        </form>
    )
}