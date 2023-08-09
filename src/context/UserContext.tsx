import { createContext } from "react";

interface UserContextType {
    userName: string | null,
    setUserName: (userName: string | null) => void,
    userId: number | null,
    setUserId: (userId: number | string) => void
}

const UserContext = createContext<UserContextType>({
    userName: null,
    setUserName: () => {},
    userId: null,
    setUserId: () => {}
})