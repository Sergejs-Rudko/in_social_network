import {Dispatch} from "redux";
import {USERS_API} from "../API/API";

let initialState = {
    users: [] as UserType[],
    totalCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: true,
    isFollowingInProcess: [1, 2] as Number[]
}

//
export const usersReducer = (state = initialState, action: UnionActionType) => {
    switch (action.type) {
        case "SET_USERS": {
            return {...state, users: action.users}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalCount: action.totalCount}
        }
        case "SET_CURRENT_PAGE_NUMBER": {
            return {...state, currentPage: action.pageNumber}
        }
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)
            }
        case "TOOGLE_IS_FETCHING": {
            return {...state, isFetching: action.toogleValue}
        }
        case "TOOGLE_FOLLOWING_PROCESS": {
            return {
                ...state,
                isFollowingInProcess: action.isFetching
                    ? [...state.isFollowingInProcess, action.userId]
                    : [state.isFollowingInProcess.filter(id => id !== action.userId)]
            }
        }
        default : {
            return state
        }
    }
}

//ACTION CREATORS_______________________________________________________________________________________________________
export const setUsersAC = (users: UserType) => ({
    type: "SET_USERS",
    users,
} as const)

export const followAC = (id: number) => ({
    type: "FOLLOW",
    id
} as const)

export const unfollowAC = (id: number) => ({
    type: "UNFOLLOW",
    id
} as const)

export const setCurrentPageAC = (pageNumber: number) => ({
    type: "SET_CURRENT_PAGE_NUMBER",
    pageNumber
} as const)

export const setTotalUsersCountAC = (totalCount: number) => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalCount
} as const)

export const toogleIsFetchingAC = (toogleValue: boolean) => ({
    type: "TOOGLE_IS_FETCHING",
    toogleValue
} as const)

export const toogleIsFollowingInProcessAC = (isFetching: boolean, userId: number) => ({
    type: "TOOGLE_FOLLOWING_PROCESS",
    isFetching,
    userId
} as const)

//THUNKS________________________________________________________________________________________________________________

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        USERS_API.getUsers(currentPage, pageSize).then(
            (data) => {
                dispatch(toogleIsFetchingAC(true))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
                dispatch(toogleIsFetchingAC(false))
            }
        )
    }
}

export const setCurrentPageTC = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toogleIsFetchingAC(true))
        dispatch(setCurrentPageAC(pageNumber));
        USERS_API.setCurrentPage(pageNumber, pageSize).then(
            (data) => {
                dispatch(setUsersAC(data.items))
                dispatch(toogleIsFetchingAC(false))
            }
        )
    }
}

export const followUserTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toogleIsFollowingInProcessAC(true, userId))
        USERS_API.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(userId))
                dispatch(toogleIsFollowingInProcessAC(false, userId))
            }
        })
    }
}

export const unfollowUserTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toogleIsFollowingInProcessAC(true, userId))
        USERS_API.unfollowUser(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId))
                dispatch(toogleIsFollowingInProcessAC(false, userId))
            }
        })
    }
}


//TYPES_________________________________________________________________________________________________________________
//ActionType
type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
type ToogleIsFetchingActionType = ReturnType<typeof toogleIsFetchingAC>
type ToogleIsFollowingInProcessActionType = ReturnType<typeof toogleIsFollowingInProcessAC>
export type GetUsersThunkType = ReturnType<typeof getUsersTC>


type UnionActionType =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToogleIsFetchingActionType
    | ToogleIsFollowingInProcessActionType


export type UserType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        small: null | string | undefined
        large: null | string | undefined
    }
    status: string
    followed: boolean
}


export type UserPageStateType = typeof initialState