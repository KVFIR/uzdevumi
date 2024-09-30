import { Dayjs } from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import dayjs from 'dayjs'

dayjs.extend(weekday)

export const getDaysOfWeek = (date: Dayjs) => {
  const weekDays = []
  for (let i = 0; i < 7; i++) {
    weekDays.push(date.weekday(i))
  }
  return weekDays
}
