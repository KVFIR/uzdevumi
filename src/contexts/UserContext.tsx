import { User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useReducer } from "react";
import { auth } from '../firebase/config'

type ACTIONTYPE =
    | { type: "LOGIN"; payload: User }
    | { type: "LOGOUT"; payload: null }
    | { type: 'AUTH_READY'; payload: null | User };

const initialState = {
    user: null,
    authReady: false
}

const UserContext = createContext<{ user: User | null, authReady: boolean, dispatch: React.Dispatch<any>; }>({
    ...initialState,
    dispatch: () => null
});

const userReducer = (
    state: {
        user: User | null,
        authReady: boolean
    },
    action: ACTIONTYPE
) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        case 'AUTH_READY': {
            return { ...state, user: action.payload, authReady: true }
        }
        default:
            return state
    }
}

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(userReducer, initialState)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            dispatch({ type: 'AUTH_READY', payload: user })
            unsubscribe()
        })
    }, [])

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider, userReducer };

