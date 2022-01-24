
let initialState = {
    dialogsItems: [
        {id: 1, name: "Dimich"},
        {id: 2, name: "Viktor"},
        {id: 3, name: "Ignat"},
        {id: 4, name: "Su 24"},
    ],
    messageData: [
        {id: 1, message: "hey "},
        {id: 2, message: "hola "},
        {id: 3, message: "hello "},
    ],
    newMessageText: ""
}

export const dialogsReducer = (state = initialState, action: UnionActionType): DialogPageStateType => {
    switch (action.type) {
        case "ADD_MESSAGE": {
            let newMessage = {id: 10, message: action.text}
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessageText: ""
            }
        }
        case "UPDATE_NEW_MESSAGE_TEXT" : {
            return {
                ...state,
                newMessageText: action.text
            }
        }
        default : {
            return state
        }
    }
}

// ACTION CREATOR ______________________________________________________________________________________________________
export const onUpdateNewMessageTextAC = (text: string) => ({
    type: "UPDATE_NEW_MESSAGE_TEXT",
    text
} as const)

export const addMessageAC = (text: string) => ({
    type: "ADD_MESSAGE",
    text
} as const)
//TYPES ________________________________________________________________________________________________________________
type OnUpdateNewMessageTextActionType = ReturnType<typeof onUpdateNewMessageTextAC>
type AddMessageActionType = ReturnType<typeof addMessageAC>

type UnionActionType = OnUpdateNewMessageTextActionType | AddMessageActionType


export type DialogPageStateType = typeof initialState



