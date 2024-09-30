import { RefObject } from "react";
import { useNavigate } from "react-router-dom";
import { Task } from "../interfaces";

export const useTaskLink = (task: Task, ref: RefObject<HTMLElement>) => {
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        navigate(`/Dashboard/${task.id}`)
    }

    const handleOnKeyDown = (e: React.KeyboardEvent) => {
        e.stopPropagation()
        if (document.activeElement === ref.current && (e.code === 'Enter' || e.code === 'Space')) {
            navigate(`/Dashboard/${task.id}`)
        }
    }

    const linkAttributes: any = {
        "aria-label": 'Click to move to task page',
        role: 'link',
        tabIndex: 0,
        onClick: handleClick,
        onKeyDown: handleOnKeyDown

    }

    return { linkAttributes }
}

