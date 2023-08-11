import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";

interface UserContextType {
    userName: string | null,
    setUserName: Dispatch<SetStateAction<string | null>>,
    userId: number | null,
    setUserId: Dispatch<SetStateAction<number | null>>,
    userLoggedIn: boolean,
    setUserLoggedIn: Dispatch<SetStateAction<boolean>>
}

const UserContext = createContext<UserContextType>({
    userName: null,
    setUserName: () => {},
    userId: null,
    setUserId: () => {},
    userLoggedIn: false,
    setUserLoggedIn: () => {},
});

interface Props {
    children: ReactNode,
    initialName?: string | null,
    initialId?: number | null,
    initialLoggin?: boolean
}

const UserContextProvider: FC<Props> = ({children, initialName = null, initialId = null, initialLoggin = false}) => {
    const [userName, setUserName] = useState<string | null>(initialName)
    const [userId, setUserId] = useState<number | null>(initialId)
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(initialLoggin)

    return (
        <UserContext.Provider value={{userName, setUserName, userId, setUserId,userLoggedIn, setUserLoggedIn}}>
            {children}
        </UserContext.Provider>
        )
}

export  {UserContextProvider, UserContext}