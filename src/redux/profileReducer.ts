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
        default : {
            return state
        }
    }
}

export type ProfilePageType = typeof initialState


