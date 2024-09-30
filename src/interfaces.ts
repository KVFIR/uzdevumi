interface Task {
  id?: string
  uid?: string
  description: string
  fromDate: number | null
  dueDate: number | null
  priority: string

  spaceId: string
  statusId: string
}

interface Space {
  id?: string
  uid?: string
  name: string
}

interface Status {
  id?: string
  uid?: string
  name: string
  orderIndex: number
  spaceId: string
  color: string
}

interface Goal {
  id?: string
  uid?: string
  title: string
  description: string
}

interface GoalStep {
  uid?: string
  goalID?: string
  id?: string
  type: 'boolean' | 'number' | 'task'
  progress: number
}

interface NumberGoalStep extends GoalStep {
  value: number
  target: number
  description: string
  type: 'number'
}

interface TaskGoalStep extends GoalStep {
  type: 'task'
  taskID: string
}

interface BooleanGoalStep extends GoalStep {
  type: 'boolean'
  description: string
}

export type { Task, Space, Status, Goal, GoalStep, NumberGoalStep, TaskGoalStep, BooleanGoalStep }
