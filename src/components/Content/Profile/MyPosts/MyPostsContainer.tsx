import React from "react";
import {addPostAC, onPostChangeAC} from "../../../../redux/store";
import {AppRootStateType} from "../../../../redux/reduxStore";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppRootStateType) => ({
    state: state.profilePage
})

let mapDispatchToProps = (dispatch: Dispatch) => ({
    onPostChange(text: string) {
        dispatch(onPostChangeAC(text))
    },
    addPost(text: string) {
        let action = addPostAC(text)
        dispatch(action)
    }
})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

//TYPES_________________________________________________________________________________________________________________

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType