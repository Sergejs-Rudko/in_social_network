let initialState = {
    users: [] as UserType[]
}

//
export const usersReducer = (state = initialState, action: UnionActionType) => {
    switch (action.type) {
        case "SET_USERS": {
            return {...state, users: action.users}
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
        default : {
            return state
        }
    }
}

//ACTION CREATORS_______________________________________________________________________________________________________
export const setUsersAC = (users: UserType) => ({
    type: "SET_USERS",
    users
} as const)

export const followAC = (id: number) => ({
    type: "FOLLOW",
    id
} as const)

export const unfollowAC = (id: number) => ({
    type: "UNFOLLOW",
    id
} as const)


//TYPES_________________________________________________________________________________________________________________
//ActionType
type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>

type UnionActionType = FollowActionType | UnfollowActionType | SetUsersActionType

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

type LocationType = {
    country: string
    city: string
}

export type UserPageStateType = typeof initialState