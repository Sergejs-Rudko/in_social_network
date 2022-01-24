import React from "react";
import {UsersProfileType} from "../../../redux/profileReducer";

type PropsType = {
    profile: UsersProfileType | null
}

export const ProfileInfo = (props: PropsType) => {
    if (props.profile) {
        return (
            <div>

                <span>{props.profile.fullName}</span>
            </div>
        )
    } else {
        return (
            <div>smthing fucked up</div>
        )
    }
}