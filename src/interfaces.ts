export interface Task {
  id?: string
  uid?: string
  description: string
  fromDate: number | null
  dueDate: number | null
  priority: string
  teamId: string
  statusId: string
}

export interface Team {
  id?: string;
  name: string;
  color: string;
  uid: string;
  orderIndex: number;
}

export interface Status {
  id?: string
  uid?: string
  name: string
  orderIndex: number
  teamId: string
  color: string
}

export interface Goal {
  id?: string
  uid?: string
  title: string
  description: string
}

export interface GoalStep {
  uid?: string
  goalID?: string
  id?: string
  type: 'boolean' | 'number' | 'task'
  progress: number
}

export interface NumberGoalStep extends GoalStep {
  value: number
  target: number
  description: string
  type: 'number'
}

export interface TaskGoalStep extends GoalStep {
  type: 'task'
  taskID: string
}

export interface BooleanGoalStep extends GoalStep {
  type: 'boolean'
  description: string
}

export interface User {
  uid: string;
  email: string;
  role: 'admin' | 'user';
  teamIds?: string[];
  teams?: Team[];
}
