import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { User, Team } from '../interfaces';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string): Promise<User | null> => {
    setError(null);
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.data() as User;

      if (userData.teamIds && userData.teamIds.length > 0) {
        const teamPromises = userData.teamIds.map(teamId => getDoc(doc(db, 'teams', teamId)));
        const teamDocs = await Promise.all(teamPromises);
        userData.teams = teamDocs.map(doc => ({ id: doc.id, ...doc.data() } as Team));
      }

      setIsLoading(false);
      return userData;
    } catch (err) {
      setError('Failed to login');
      setIsLoading(false);
      return null;
    }
  };

  return { login, error, isLoading };
};
