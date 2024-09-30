import { createContext, useState } from "react";

interface ErrorContextProviderProps {
    children: React.ReactNode
}

export interface ErrorPromptContextInterface {
    isError: boolean,
    setIsError: React.Dispatch<React.SetStateAction<boolean>>
}

export const ErrorPromptContext = createContext<ErrorPromptContextInterface | null>(null)

export const ErrorPromptContextProvider = ({ children }: ErrorContextProviderProps) => {
    const [isError, setIsError] = useState(false)

    return (
        <ErrorPromptContext.Provider value={{ isError, setIsError }}>
            {children}
        </ErrorPromptContext.Provider>
    );
}