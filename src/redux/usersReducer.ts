let initialState = {
    users: [] as UserType[],
    totalCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: true
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


//TYPES_________________________________________________________________________________________________________________
//ActionType
type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
type ToogleIsFetchingActionType = ReturnType<typeof toogleIsFetchingAC>

type UnionActionType =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToogleIsFetchingActionType

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