import React from "react";
import styles from "./Users.module.css";
import avatarReplacement from "../../../Extras/img/avtar_replacement.png";
import {followUserTC, unfollowUserTC, UserType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

type PropsType = {
    pages: Array<number>
    setCurrentPage: (pageNumber: number) => void
    currentPage: number
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    isFollowingInProcess: Array<Number>
    toogleIsFollowingProcess: (isFetching: boolean, userId: number) => void
}

export const Users = (props: PropsType) => {
    const dispatch = useDispatch()
    const followUser = (userId: number) => {
        dispatch(followUserTC(userId))
    }

    const unfollowUser = (userId: number) => {
        dispatch(unfollowUserTC(userId))
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
                            ? <button disabled={props.isFollowingInProcess.includes(u.id)}
                                      onClick={() => unfollowUser(u.id)}>unfollow</button>
                            : <button onClick={() => followUser(u.id)}
                                      disabled={props.isFollowingInProcess.includes(u.id)}>follow</button>}
                    </>
                </div>)
            }
        </div>
    )
}

// FOLLOW UNFOLLOW