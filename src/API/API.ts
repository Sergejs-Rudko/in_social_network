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
    followUser(userId: number) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const AUTH_API = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`/auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`).then(response => response.data)
    }
}

export const PROFILE_API = {
    setUserProfile(userId: number) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    setUserStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status}).then(response => response.data)
    }
}
