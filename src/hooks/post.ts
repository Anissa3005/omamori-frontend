import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface User {
    username: string,
    email: string
}

export const usePostUser = (body: User) => {
    const {data, isLoading} = useMutation({
        mutationKey: ['user'],
        mutationFn: async() => {
            const {data} = await axios.post('http://127.0.0.1:8000/user/', body)
            return data
        }
    })

    return {data, isLoading}
}

export const UseGetUser = () => {
    return useQuery({
        queryKey: ['getuser'],
        queryFn: async() => {
            const {data} = await axios.get('http://127.0.0.1:8000/user/')
            return data
        }
    })
}
