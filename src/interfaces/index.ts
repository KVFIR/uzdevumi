export interface Team {
    id: string;
    name: string;
    color: string;
    orderIndex: number;
    // other team-related fields
}

export interface Task {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    statusId: string;
    teamId: string;
    // other task-related fields
}

// ... other interfaces

// Удалите отсюда интерфейс DataContextInterface

// ... другие интерфейсы

export interface GoalStep {
    id: string;
    goalID: string;
    type: 'number' | 'boolean' | 'task';
    taskID?: string;
    // другие свойства...
}

export interface NumberGoalStep extends GoalStep {
    type: 'number';
    currentValue: number;
    targetValue: number;
}

export interface BooleanGoalStep extends GoalStep {
    type: 'boolean';
    completed: boolean;
}

export interface TaskGoalStep extends GoalStep {
    type: 'task';
    taskID: string;
}

export interface Status {
    id: string;
    name: string;
    color: string;
    teamId: string;
    orderIndex: number;
}

export interface Goal {
    id: string;
    title: string;
    description?: string;
}