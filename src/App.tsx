import { Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import { DataContextProvider } from './contexts/DataContext';
import { AdminUserManagement } from './pages/AdminUserManagement/AdminUserManagement';

import { ErrorPrompt } from './components/Modals/ErrorPrompt/ErrorPrompt';
//pages
import { Dashboard } from './pages/Dashboard/Dashboard';
import { List } from './pages/List/List';
import { Board } from './pages/Board/Board';
import { Calendar } from './pages/Calendar/Calendar';
import { Goals } from './pages/Goals/Goals';
import { Home } from './pages/Home/Home';
import { TaskPage } from './pages/TaskPage/TaskPage';
import { NewGoal } from './pages/Goals/NewGoal/NewGoal';
import { GoalPage } from './pages/Goals/GoalPage/GoalPage';
import { DayCal } from './pages/Calendar/DayCal/DayCal';
import { WeekCal } from './pages/Calendar/WeekCal/WeekCal';
import { MonthCal } from './pages/Calendar/MonthCal/MonthCal';
import { NewGoalContextProvider } from './contexts/NewGoalContext';
import { AdminList } from './pages/AdminList/AdminList';

export function App() {
  const userContext = useContext(UserContext)

  if (!userContext) {
    // Если контекст не определен, можно вернуть загрузочный компонент или null
    return null;
  }

  const { user, authIsReady } = userContext;

  return (
    <>
      {authIsReady && (
        <>
          {user ? (
            <DataContextProvider uid={user.uid}>
              <Routes>
                <Route path="Dashboard" >
                  <Route path=':taskID' element={<TaskPage />} />
                  <Route index element={<Dashboard />} />
                </Route>
                <Route path="List" element={<List />} />
                <Route path="Board" element={<Board />} />
                <Route path="Calendar" element={<Calendar />}>
                  <Route path=':date'>
                    <Route element={<DayCal />} path='Day' />
                    <Route element={<WeekCal />} path='Week' />
                    <Route element={<MonthCal />} path='Month' />
                  </Route>
                </Route>
                <Route path="Goals" >
                  <Route path="NewGoal" element={<NewGoalContextProvider><NewGoal /></NewGoalContextProvider>}></Route>
                  <Route path=":goalID" element={<GoalPage />}></Route>
                  <Route index element={<Goals />}></Route>
                </Route>
                <Route path="Admin" element={<AdminList />} />
                <Route path="AdminUsers" element={<AdminUserManagement />} />
                <Route path="*" element={<Navigate to='/Dashboard' replace />} />
              </Routes>
            </DataContextProvider>
          ) : (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          )}
        </>
      )}
      <ErrorPrompt />
    </>
  );
}
