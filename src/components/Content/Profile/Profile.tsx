import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo";
import { UsersProfileType} from "../../../redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus";

type PropsType = {
    profile : UsersProfileType
}

export const Profile = (props : PropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <ProfileStatus/>
            <MyPostsContainer/>
        </div>
    )
}