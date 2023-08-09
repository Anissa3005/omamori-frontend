import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";

interface UserContextType {
    userName: string | null,
    setUserName: Dispatch<SetStateAction<string | null>>,
    userId: number | null,
    setUserId: Dispatch<SetStateAction<number | null>>
}

const UserContext = createContext<UserContextType>({
    userName: null,
    setUserName: () => {},
    userId: null,
    setUserId: () => {}
});

interface Props {
    children: ReactNode,
    initialName?: string | null,
    initialId?: number | null
}

const UserContextProvider: FC<Props> = ({children, initialName = null, initialId = null}) => {
    const [userName, setUserName] = useState<string | null>(initialName)
    const [userId, setUserId] = useState<number | null>(initialId)

    return (
        <UserContext.Provider value={{userName, setUserName, userId, setUserId}}>
            {children}
        </UserContext.Provider>
        )
}

export  {UserContextProvider, UserContext}