import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { User, Team } from '../../interfaces';
import { useDb } from '../../hooks/useDb';
import { Layout } from '../../components/Layout/Layout/Layout';
import { AnimatedPopover } from '../../components/AnimatedPopover/AnimatedPopover';
import styles from './AdminUserManagement.module.scss';

export const AdminUserManagement: React.FC = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const { getUsers, getTeams, assignTeamToUser, removeTeamFromUser } = useDb('users');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await getUsers();
      const fetchedTeams = await getTeams();
      setUsers(fetchedUsers);
      setTeams(fetchedTeams);
    };
    fetchData();
  }, []);

  const handleTeamAssignment = async (userId: string, teamId: string, isChecked: boolean) => {
    if (isChecked) {
      await assignTeamToUser(userId, teamId);
    } else {
      await removeTeamFromUser(userId, teamId);
    }
    const updatedUsers = await getUsers();
    setUsers(updatedUsers);
  };

  return (
    <Layout title={t('navigation.adminUserManagement')}>
      <div className={styles.adminUserManagement}>
        <h2>{t('adminUserManagement.title')}</h2>
        <div className={styles.userList}>
          {users.map(user => (
            <div key={user.uid} className={styles.userItem}>
              <div className={styles.userInfo}>
                <span className={styles.userEmail}>{user.email}</span>
                <span className={styles.userRole}>{t(`roles.${user.role}`)}</span>
              </div>
              <AnimatedPopover
                className={styles.teamAssignmentButton}
                buttonText={t('adminUserManagement.assignTeams')}
              >
                <div className={styles.teamCheckboxes}>
                  {teams.map(team => (
                    <label key={team.id} className={styles.teamCheckbox}>
                      <input
                        type="checkbox"
                        checked={user.teamIds?.includes(team.id ?? '') || false}
                        onChange={(e) => handleTeamAssignment(user.uid, team.id ?? '', e.target.checked)}
                      />
                      <span style={{ backgroundColor: team.color }}>{team.name}</span>
                    </label>
                  ))}
                </div>
              </AnimatedPopover>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
