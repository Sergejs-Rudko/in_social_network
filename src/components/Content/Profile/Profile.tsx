import React from "react";
import styles from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>content header image</div>
            <div>avatar</div>
            <div>Profile description</div>
            <MyPosts/>
        </div>
    )
}