import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface User {
    username: string,
    email: string
}

interface Email {
    email?: string | null
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

export const UseGetUser = (username: string) => {
    return useQuery({
        queryKey: ['getuser', username],
        enabled: false,
        queryFn: async() => {
            const {data} = await axios.get(`http://127.0.0.1:8000/user/${username}/`)
            return data
        }
    })
}

export const useGetUserByMail = () => {
    return useMutation({
        mutationFn: async(email: Email) => {
            const {data} = await axios.post('http://127.0.0.1:8000/user/email/', email)
            return data
        }
    })
}

export const useGetOmamoriPhotos = () => {
    return useQuery({
        queryKey: ['getOmamaoriPhoto'],
        queryFn: async() => {
            const {data} = await axios.get(`http://127.0.0.1:8000/omamori/`)
            return data
        }
    })
}