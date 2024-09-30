import dayjs, { Dayjs } from 'dayjs'
import { Task } from '../interfaces'

export const getTasksWithinWeek = (tasks: Task[], weekDay: Dayjs) => {
  return tasks.filter((task) => {
    if (!task.dueDate || !task.fromDate) return false
    let shouldPass = false
    const from = dayjs.unix(task.fromDate!)
    const due = dayjs.unix(task.dueDate!)
    const weekDayHours: Dayjs[] = []
    for (let i = 0; i < 24; i++) {
      weekDayHours.push(weekDay.hour(i))
    }
    weekDayHours.forEach((hour) => {
      if (hour.isBetween(from, due) || hour.isSame(due, 'hour')) shouldPass = true
    })
    return shouldPass
  })
}
