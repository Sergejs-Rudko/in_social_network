import React, {useEffect} from "react";
import {UsersPageType} from "./UsersContainer";
import styles from "./Users.module.css"
import axios from "axios";
import avatarReplacement from "./../../../Extras/img/avtar_replacement.png"


export const Users = (props: UsersPageType) => {
    let imgLol = "data:image/jpeg;base64,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"


    /*    if (props.state.users.length === 0) {*/

    const getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
            (response) => props.setUsers(response.data.items)
        )
    }


    return (

        <div>

            <button onClick={getUsers}>get users</button>
            {props.state.users.map(u =>
                <div key={u.id}>
                    <div>

                        {
                            u.followed ?
                                <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>
                    <div>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                        <div>
                            <span>u.location.country</span>
                            <span>u.location.city</span>
                        </div>
                    </div>
                </div>
            )}</div>
    )
}