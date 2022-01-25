import React from "react";
import styles from "./Users.module.css";
import avatarReplacement from "../../../Extras/img/avtar_replacement.png";
import {UserType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {USERS_API} from "../../../API/API";

type PropsType = {
    pages: Array<number>
    setCurrentPage: (pageNumber: number) => void
    currentPage: number
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const Users = (props: PropsType) => {

    const followUser = (userId: number) => {
        USERS_API.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                props.follow(userId)
            }
        })
    }

    const unfollowUser = (userId: number) => {
        USERS_API.unfollowUser(userId).then((data) => {
            if (data.resultCode === 0) {
                props.unfollow(userId)
            }
        })
    }

    return (
        <div>

            <div>
                {
                    props.pages.map(p => <span
                        className={props.currentPage === p ? styles.selectedPage : ""}
                        onClick={() => props.setCurrentPage(p)}
                    >{p} </span>)
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img className={styles.userAvatar}
                             src={u.photos.small !== null ? u.photos.small : avatarReplacement} alt=""/>
                    </NavLink>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <>
                        {u.followed
                            ? <button onClick={() => unfollowUser(u.id)}>unfollow</button>
                            : <button onClick={() => followUser(u.id)}>follow</button>}
                    </>
                </div>)
            }
        </div>
    )
}