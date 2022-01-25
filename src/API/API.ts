import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        "API-KEY": `a22bfbba-37b1-4c5b-a966-b83499c73071`
    }
})

export const USERS_API = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data)
    },
    setCurrentPage(pageNumber: number, pageSize: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data)
    },
    followUser(userId : number){
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollowUser(userId : number){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}