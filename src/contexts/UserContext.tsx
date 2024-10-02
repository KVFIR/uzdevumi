import { createContext, useReducer, useEffect, ReactNode, Dispatch } from 'react';
import { User } from '../interfaces';
import { auth, db } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface UserContextType {
    user: User | null;
    authIsReady: boolean;
    dispatch: Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserAction =
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' }
    | { type: 'AUTH_IS_READY'; payload: User | null };

export const userReducer = (state: UserContextType, action: UserAction): UserContextType => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload };
        case 'LOGOUT':
            return { ...state, user: null };
        case 'AUTH_IS_READY':
            return { ...state, user: action.payload, authIsReady: true };
        default:
            return state;
    }
};

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: null,
        authIsReady: false,
        dispatch: () => null, // This is a placeholder, will be overwritten
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDocRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data() as User;
                    dispatch({ type: 'AUTH_IS_READY', payload: userData });
                } else {
                    // Если документ пользователя не существует, создаем его с ролью 'user'
                    const newUser: User = {
                        uid: user.uid,
                        email: user.email!,
                        role: 'user',
                    };
                    await setDoc(userDocRef, newUser);
                    dispatch({ type: 'AUTH_IS_READY', payload: newUser });
                }
            } else {
                dispatch({ type: 'AUTH_IS_READY', payload: null });
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

