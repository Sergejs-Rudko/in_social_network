import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <div>
            <div>content header image</div>
            <div>avatar</div>
            <div>Profile description</div>
            <MyPostsContainer/>
        </div>
    )
}