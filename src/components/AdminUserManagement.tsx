import React, { useState, useEffect } from 'react';
import { User, Team } from '../interfaces';
import useDb from '../hooks/useDb';

const AdminUserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const { getUsers, getTeams, assignTeamToUser } = useDb();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await getUsers();
      const fetchedTeams = await getTeams();
      setUsers(fetchedUsers);
      setTeams(fetchedTeams);
    };
    fetchData();
  }, []);

  const handleTeamAssignment = async (userId: string, teamId: string) => {
    await assignTeamToUser(userId, teamId);
    // Обновляем список пользователей после назначения команды
    const updatedUsers = await getUsers();
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>User Management</h2>
      {users.map(user => (
        <div key={user.uid}>
          <p>{user.email} - Role: {user.role}</p>
          <select 
            onChange={(e) => handleTeamAssignment(user.uid, e.target.value)}
            value={user.teamIds?.[0] || ''}
          >
            <option value="">Select a team</option>
            {teams.map(team => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default AdminUserManagement;
