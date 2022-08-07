import React from 'react'
import useDb from '../../hooks/useDb'
import { Task } from '../../interfaces'

interface DeleteTaskBtnProps {
    task: Task
}

const DeleteTaskBtn = ({ task }: DeleteTaskBtnProps) => {
    const { removeDocument } = useDb('tasks')

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        removeDocument(task.id!)
    }

    return (
        <button className={'trashcan icon circle'} onClick={handleClick} />
    );
}

export default DeleteTaskBtn;