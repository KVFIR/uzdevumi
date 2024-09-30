import dayjs, { Dayjs } from 'dayjs'
import { Task } from '../interfaces'

export const getTasksWithinDay = (tasks: Task[], hours: Dayjs[]) => {
  return tasks.filter((task) => {
    if (!task.dueDate || !task.fromDate) return false
    let shouldPass = false
    const from = dayjs.unix(task.fromDate)
    const due = dayjs.unix(task.dueDate)
    hours.forEach((hour) => {
      if (hour.isBetween(from, due) || hour.isSame(due, 'hour')) shouldPass = true
    })
    return shouldPass
  })
}
