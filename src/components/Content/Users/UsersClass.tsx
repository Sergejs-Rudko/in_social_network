import React from "react";
import styles from "./Users.module.css"
import axios from "axios";
import avatarReplacement from "./../../../Extras/img/avtar_replacement.png"
import {UsersPageType} from "./UsersContainer";


export class UsersClass extends React.Component<UsersPageType> {
    constructor(props: UsersPageType) {
        super(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
            (response) => this.props.setUsers(response.data.items)
        )
    }

    unfollow = (id: number) => {
        this.props.unfollow(id)
    }
    follow = (id: number) => {
        this.props.follow(id)
    }

    render() {
        return (
            <div>
                {
                    this.props.state.users.map(u => <div>
                        <img className={styles.userAvatar}
                             src={u.photos.small !== null ? u.photos.small : avatarReplacement} alt=""/>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <>
                            {u.followed
                                ? <button onClick={() => this.unfollow(u.id)}>unfollow</button>
                                : <button onClick={() => this.follow(u.id)}>follow</button>}
                        </>
                    </div>)
                }
            </div>
        )
    }
}



