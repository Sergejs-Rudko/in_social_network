import {UnionActionType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: "Here is my first post", likesCount: 1},
        {id: 2, message: "Second post", likesCount: 3},
        {id: 3, message: "Third post", likesCount: 4},
    ],
    postText: ""
}



export const profileReducer = (state = initialState, action: UnionActionType) => {
    switch (action.type) {
        case "ADD_POST": {
            let post = {
                id: 5,
                message: action.postText,
                likesCount: 0,
            }
            state.posts.push(post)
            state.postText = ""
            return state
        }
        case "ON_POST_CHANGE": {
            state.postText += action.text
            return state
        }
        default : {
            return state
        }
    }
}

export type ProfilePageType = typeof initialState


