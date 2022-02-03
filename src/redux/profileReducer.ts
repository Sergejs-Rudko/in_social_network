import {Dispatch} from "redux";
import {PROFILE_API} from "../API/API";

let initialState = {
    user: {} as UsersProfileType,
    posts: [
        {id: 1, message: "Here is my first post", likesCount: 1},
        {id: 2, message: "Second post", likesCount: 3},
        {id: 3, message: "Third post", likesCount: 4},
    ],
    postText: "",
    status: "",
}


export const profileReducer = (state = initialState, action: UnionActionType) => {
    switch (action.type) {
        case "SET_USERS_PROFILE": {
            return {...state, user: action.profile}
        }
        case "ADD_POST": {
            let post = {
                id: 5,
                message: action.postText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, post],
                postText: ""
            }
        }
        case "ON_POST_CHANGE": {
            return {
                ...state,
                postText: action.text
            }
        }
        case "SET_USER_STATUS": {
            return {...state, status: action.status}
        }
        case "UPDATE_STATUS": {
            return {...state, status: action.status}
        }
        default : {
            return state
        }
    }
}
// ACTION CREATORS _____________________________________________________________________________________________________
export const addPostAC = (postText: string) => ({
    type: "ADD_POST",
    postText
} as const)

export const onPostChangeAC = (text: string) => ({
    type: "ON_POST_CHANGE",
    text
} as const)

export const setUsersProfileAC = (profile: UsersProfileType) => ({
    type: "SET_USERS_PROFILE",
    profile
} as const)

export const setUserStatusAC = (status: string) => ({
    type: "SET_USER_STATUS",
    status
} as const)

export const updateStatusAC = (status: string) => ({
    type: "UPDATE_STATUS",
    status
} as const)


//THUNKS _______________________________________________________________________________________________________________

export const setUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        PROFILE_API.setUserProfile(userId).then(
            (data) => {
                if (data) {
                    dispatch(setUsersProfileAC(data))
                }
            }
        )
    }
}

export const setUserStatusTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        PROFILE_API.setUserStatus(userId).then((data) => {
            if (data === null) {
                dispatch(setUserStatusAC("NO STATUS"))
            }else{
                dispatch(setUserStatusAC(data))
            }
        })
    }
}

export const updateStatusTC = (status : string) => {
    return (dispatch : Dispatch) => {
        PROFILE_API.updateStatus(status).then((data) => {
            if(data.resultCode === 0){
                dispatch(updateStatusAC(status))
                console.log("update successful")
            }
        })
    }
}

// TYPES _______________________________________________________________________________________________________________
type AddPostActionType = ReturnType<typeof addPostAC>
type OnPostChangeActionType = ReturnType<typeof onPostChangeAC>
type SetUsersProfileActionType = ReturnType<typeof setUsersProfileAC>
type SetUserStatusActionType = ReturnType<typeof setUserStatusAC>
type UpdateStatusActionType = ReturnType<typeof updateStatusAC>

type UnionActionType =
    AddPostActionType
    | OnPostChangeActionType
    | SetUsersProfileActionType
    | SetUserStatusActionType
    | UpdateStatusActionType
export type ProfilePageType = typeof initialState


export type UsersProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: {
        small: string | null
        large: string | null
    }
}




