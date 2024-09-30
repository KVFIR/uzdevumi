export const getNewPrio = (priority: string) => {
  if (priority === 'low') return 'medium'
  if (priority === 'medium') return 'high'
  if (priority === 'high') return 'low'
  return 'low'
}
