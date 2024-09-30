//interfaces
import { Goal } from "../../../interfaces";
//hooks
import { useEffect, useRef } from "react";
import { useDataContext } from "../../../hooks/useDataContext";
//utils
import { getGoalStepProgess } from "../../../utils/getGoalStepProgress";
//styles
import styles from './GoalLink.module.scss'
//components
import { Link } from "react-router-dom";

interface GoalLinkProps {
    goal: Goal
}

const drawCircle = (color: string, percent: number, ctx: CanvasRenderingContext2D) => {
    percent = Math.min(Math.max(0, percent), 1)
    ctx.beginPath()
    ctx.arc(0, 0, 53.5, 0, Math.PI * 2 * percent, false)
    ctx.strokeStyle = color
    ctx.lineCap = 'round'
    ctx.lineWidth = 5
    ctx.stroke()
}

export const GoalLink = ({ goal }: GoalLinkProps) => {
    const { goalSteps } = useDataContext()
    const steps = goalSteps && goalSteps.filter(gs => gs.goalID === goal.id!)
    const goalProgress = steps ? getGoalStepProgess(steps) : 0
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if (!canvasRef.current) return
        canvasRef.current.width = canvasRef.current.height = 112
        const ctx = canvasRef.current.getContext('2d')!
        ctx.translate(112 / 2, 112 / 2)
        ctx.rotate(-0.5 * Math.PI)
        drawCircle('#e5e7eb', 100 / 100, ctx);
        drawCircle('#86efac', goalProgress / 100, ctx);
    }, [goalProgress])

    return (
        <Link
            to={`../../Goals/${goal.id}`}
            key={goal.id}
            aria-label={`Go to ${goal.title} goal page`}
            className={styles.link}>
            <h3>{goal.title}</h3>
            <div
                className={styles.goalProgressCircle}
                style={{}}>
                <span>
                    {goalProgress.toFixed()}%
                </span>
                <canvas
                    ref={canvasRef}
                    aria-label={`circle showing progress completion, current: ${goalProgress.toFixed()}%`}
                />
            </div>
        </Link>
    );
}
