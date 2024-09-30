import dayjs, { Dayjs } from 'dayjs'
import { Task } from '../interfaces'

export const getTasksWithinMonth = (tasks: Task[], monthDay: Dayjs) => {
  return tasks.filter((task) => {
    if (!task.dueDate || !task.fromDate) return false
    let shouldPass = false
    const from = dayjs.unix(task.fromDate!)
    const due = dayjs.unix(task.dueDate!)
    if (
      monthDay.format('DD/MM/YYYY') === from.format('DD/MM/YYYY') ||
      monthDay.format('DD/MM/YYYY') === due.format('DD/MM/YYYY') ||
      monthDay.isBetween(from, due)
    )
      shouldPass = true

    return shouldPass
  })
}
