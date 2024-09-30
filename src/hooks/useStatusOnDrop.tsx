import { RefObject } from "react";
import { Status } from "../interfaces";
import { useDb } from "./useDb";

export const useStatusOnDrop = (status: Status, ref: RefObject<HTMLElement>) => {
    const { updateDocument } = useDb('tasks')

    const debounceDragOver = (() => {
        let timeout: NodeJS.Timeout
        return () => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                ref.current?.classList.remove('dragOver')
            }, 150)
        }
    })()

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        ref.current?.classList.add('dragOver')
        debounceDragOver()
    }

    const handleDrop = (e: React.DragEvent) => {
        try {
            const task = JSON.parse(e.dataTransfer.getData('text/json'))
            if (status.name !== task.status) {
                updateDocument(task.id, { statusId: status.id! })
            }
            ref.current?.classList.remove('dragOver')
        } catch (e) {
            ref.current?.classList.remove('dragOver')
        }
    }

    const statusOnDropAttributes = {
        onDragOver: handleDragOver,
        onDrop: handleDrop
    }

    return { statusOnDropAttributes }
}

