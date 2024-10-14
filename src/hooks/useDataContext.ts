import { useContext, useMemo } from 'react'
import { DataContext } from '../contexts/DataContext'
import { UserContext } from '../contexts/UserContext'

export const useDataContext = () => {
  const context = useContext(DataContext)
  const userContext = useContext(UserContext)

  if (!context || !userContext) {
    throw new Error('useDataContext must be used within DataContextProvider and UserContextProvider')
  }

  const { user } = userContext
  const { teams, ...restContext } = context

  const userTeams = useMemo(() => {
    return teams ? teams.filter(team => user?.teamIds?.includes(team.id ?? '')) : []
  }, [teams, user?.teamIds])

  return { ...restContext, teams: userTeams }
}
