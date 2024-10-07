import { RefObject } from "react";
import { Team, Task } from "../interfaces";
import { useDb } from "./useDb";

export const useTeamOnDrop = (team: Team, ref: RefObject<HTMLElement>) => {
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
            const taskData = JSON.parse(e.dataTransfer.getData('text/json'))
            const task = taskData as Task & { teamId: string }
            if (team.id && team.id !== task.teamId && task.id) {
                updateDocument(task.id, { teamId: team.id })
            }
            ref.current?.classList.remove('dragOver')
        } catch (e) {
            ref.current?.classList.remove('dragOver')
        }
    }

    const teamOnDropAttributes = {
        onDragOver: handleDragOver,
        onDrop: handleDrop
    }

    return { teamOnDropAttributes }
}