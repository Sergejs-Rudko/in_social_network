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
        if (action.type === "ADD_POST") {
            let post = {
                id: 5,
                message: action.postText,
                likesCount: 0,
            }
            this.state.profilePage.posts.push(post)
        } else if (action.type === "ON_POST_CHANGE") {
            this.state.profilePage.postText += action.text
        } else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
            this.state.dialogsPage.newMessageText += action.text
        } else if (action.type === "ADD_MESSAGE") {
            this.state.dialogsPage.messageData.push({id: 10, message: action.text})
            this.state.dialogsPage.newMessageText = ""
        } else {
            throw new Error("lol")
        }
    }
}
// ACTION CREATORS______________________________________________________________________________________________________

export const addPostAC = (postText: string) => ({
    type: "ADD_POST",
    postText
} as const)

export const onPostChangeAC = (text: string) => ({
    type: "ON_POST_CHANGE",
    text
} as const)

export const onUpdateNewMessageTextAC = (text: string) => ({
    type: "UPDATE_NEW_MESSAGE_TEXT",
    text
} as const)

export const addMessageAC = (text: string) => ({
    type: "ADD_MESSAGE",
    text
} as const)

// TYPES________________________________________________________________________________________________________________

type AddPostActionType = ReturnType<typeof addPostAC>
type OnPostChangeActionType = ReturnType<typeof onPostChangeAC>
type OnUpdateNewMessageTextActionType = ReturnType<typeof onUpdateNewMessageTextAC>
type AddMessageActionType = ReturnType<typeof addMessageAC>


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
}