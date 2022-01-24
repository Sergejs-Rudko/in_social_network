
import {profileReducer} from "./profileReducer";
/*
import {dialogsReducer} from "./dialogsReducer";

export let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: "Here is my first post", likesCount: 1},
                {id: 2, message: "Second post", likesCount: 3},
                {id: 3, message: "Third post", likesCount: 4},
            ],
            postText: ""
        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [
                {id: 1, name: "Dimich"},
                {id: 2, name: "Viktor"},
                {id: 3, name: "Ignat"},
                {id: 4, name: "Su 24"},
            ]
        }
    },
    getState() {
        return this.state
    },
    dispatch(action: UnionActionType) {
        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)
    }
}
// ACTION CREATORS______________________________________________________________________________________________________





// TYPES________________________________________________________________________________________________________________





export type UnionActionType = AddPostActionType |
    OnPostChangeActionType |
    OnUpdateNewMessageTextActionType |
    AddMessageActionType

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type FriendType = {
    id: number
    name: string
}*/
