import { Dayjs } from 'dayjs'

export const getDaysOfMonth = (date: Dayjs) => {
  const monthDays = []
  for (let i = 1; i < date.daysInMonth() + 1; i++) {
    monthDays.push(date.date(i))
  }
  return monthDays
}
