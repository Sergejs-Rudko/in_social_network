import {Dispatch} from "redux";
import {AUTH_API} from "../API/API";

let initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    messages: [] as String[],
    isAuth: false as boolean
}

export const authReducer = (state = initialState, action: UnionActionType) => {
    switch (action.type) {
        case "SET_ME": {
            return {
                ...state,
                id: action.id,
                login: action.login,
                email: action.email,
                isAuth: true
            }
        }
        case "LOG_OUT": {
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false
            }
        }
        default : {
            return state
        }
    }
}

//ACTION CREATORS_______________________________________________________________________________________________________

export const setMeAC = (id: number, login: string, email: string) => ({
    type: "SET_ME",
    id,
    login,
    email,
} as const)

export const logoutAC = () => ({
    type: "LOG_OUT"
} as const)
//THUNKS___________________________________________________________________________________

export const authMeTC = () => {
    return (dispatch: Dispatch) => {
        AUTH_API.me().then(data => {
            if (data.resultCode === 0) {
                dispatch(setMeAC(data.data.id, data.data.login, data.data.email))
            }
        })
    }
}


export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    debugger
    return (dispatch: Dispatch) => {
        AUTH_API.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(setMeAC(data.userId, email, email))
            }
        })
    }
}

export const logoutTC = () => {
    return (dispatch: Dispatch) => {
        AUTH_API.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(logoutAC())
            }
        })
    }
}

//TYPES_________________________________________________________________________________________________________________
type SetMeActionType = ReturnType<typeof setMeAC>
type logoutActionType = ReturnType<typeof logoutAC>

type UnionActionType = SetMeActionType | logoutActionType
export type AuthType = {
    id: null | number
    login: null | string
    email: null | string
    messages: String[]
    isAuth: boolean
}

export type MeType = {
    id: number | null
    login: string | null
    email: string | null
    messages: String []
    isAuth: boolean
}

