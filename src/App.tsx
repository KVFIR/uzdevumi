import { Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import { DataContextProvider } from './contexts/DataContext'

import { ErrorPrompt } from './components/ui/ErrorPrompt/ErrorPrompt';
//pages
import { Dashboard } from './pages/Dashboard/Dashboard';
import { TodoPage } from './pages/ToDo/ToDoPage';
import { Kanban } from './pages/Kanban/Kanban';
import { Calendar } from './pages/Calendar/Calendar';
import { Goals } from './pages/Goals/Goals';
import { Home } from './pages/Home/Home';
import { TaskPage } from './pages/TaskPage/TaskPage';
import { NewGoal } from './pages/Goals/NewGoal/NewGoal';
import { GoalPage } from './pages/Goals/GoalPage/GoalPage';
import { DayCal } from './pages/Calendar/DayCal/DayCal';
import { WeekCal } from './pages/Calendar/WeekCal/WeekCal';
import { MonthCal } from './pages/Calendar/MonthCal/MonthCal';

function App() {
  const { user, authReady } = useContext(UserContext)

  return (
    <>
      {authReady && <>{user ?
        <DataContextProvider uid={user.uid}>
          <Routes>
            <Route path="Dashboard" >
              <Route path=':taskID' element={<TaskPage />} />
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="Todo" element={<TodoPage />} />
            <Route path="Kanban" element={<Kanban />} />
            <Route path="Calendar" element={<Calendar />}>
              <Route path=':date'>
                <Route element={<DayCal />} path='Day' />
                <Route element={<WeekCal />} path='Week' />
                <Route element={<MonthCal />} path='Month' />
              </Route>
            </Route>
            <Route path="Goals" >
              <Route path="NewGoal" element={<NewGoal />}></Route>
              <Route path=":goalID" element={<GoalPage />}></Route>
              <Route index element={<Goals />}></Route>
            </Route>
            <Route path="*" element={<Navigate to='/Dashboard' replace />} />
          </Routes>
        </DataContextProvider> :
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      }</>
      }
      <ErrorPrompt />
    </>
  );
}

export default App;
