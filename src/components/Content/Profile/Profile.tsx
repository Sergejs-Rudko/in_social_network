import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostType, UnionActionType} from "../../../fake_redux/state";

type ProfilePropsType = {
    state: {
        posts: PostType[]
        postText: string
    }
    dispatch: (obj: UnionActionType) => void
}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <div>content header image</div>
            <div>avatar</div>
            <div>Profile description</div>
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}