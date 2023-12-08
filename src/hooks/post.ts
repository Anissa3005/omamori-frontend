import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type User = {
    uuid: string
}

interface Email {
    email?: string | null
}

// const usePostUser = (body: User) => {
//     return useMutation({
//         mutationKey: ['user'],
//         mutationFn: async() => {
//             const {data} = await axios.post('http://127.0.0.1:8000/user/', body)
//             return data
//         }
//     })
// }

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