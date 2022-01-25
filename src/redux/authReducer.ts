let initialState = {
    id: null,
    login: null,
    email: null,
    messages: [] as String[],
    isAuth : false
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


//TYPES_________________________________________________________________________________________________________________
type SetMeActionType = ReturnType<typeof setMeAC>

type UnionActionType = SetMeActionType

export type MeType = {
    id: number | null
    login: string | null
    email: string | null
    messages: String []
    isAuth : boolean
}