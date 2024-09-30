import { RefObject } from "react"
import { Task } from "../interfaces"

export const useTaskDraggable = (task: Task, ref: RefObject<HTMLElement>) => {

    const handleDragStart = (e: React.DragEvent) => {
        if (typeof ref === 'function') return
        e.dataTransfer.setData('text/json', JSON.stringify(task))
        ref && ref.current?.classList.add('dragging')
    }

    const handleDragEnd = () => {
        if (typeof ref === 'function') return
        ref && ref.current?.classList.remove('dragging')
    }

    const draggableAttributes = {
        draggable: true,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
    }

    return { draggableAttributes }
}
