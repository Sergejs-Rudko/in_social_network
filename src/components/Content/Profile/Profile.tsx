import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo";
import { UsersProfileType} from "../../../redux/profileReducer";

type PropsType = {
    profile : UsersProfileType | null
}

export const Profile = (props : PropsType) => {

    return (
        <div>

            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}