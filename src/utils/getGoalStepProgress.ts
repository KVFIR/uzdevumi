import { BooleanGoalStep, NumberGoalStep, TaskGoalStep } from '../interfaces'

export const getGoalStepProgess = (gs: (NumberGoalStep | BooleanGoalStep | TaskGoalStep)[] | undefined) => {
  if (gs === undefined || gs.length === 0) return 0
  return (gs.reduce((prev, current) => prev + current.progress, 0) / gs.length) * 100
}
