import React from "react";
import styles from "./Users.module.css"
import axios from "axios";
import avatarReplacement from "./../../../Extras/img/avtar_replacement.png"
import {UsersPageType} from "./UsersContainer";


export class Users extends React.Component<UsersPageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&
        count=${this.props.state.pageSize}`).then(
            (response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    unfollow = (id: number) => {
        this.props.unfollow(id)
    }
    follow = (id: number) => {
        this.props.follow(id)
    }

    setCurrentPage(pageNumber: number) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&
        count=${this.props.state.pageSize}`).then(
            (response) => this.props.setUsers(response.data.items)
        )
    }

    render() {
        let pageSize = this.props.state.pageSize
        let totalCount = this.props.state.totalCount

        let pageAmount = Math.ceil(totalCount / pageSize)
        let pages = []
        for (let i = 1; i <= pageAmount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {
                        pages.map(p => <span
                            className={this.props.state.currentPage === p ? styles.selectedPage : ""}
                            onClick={() => this.setCurrentPage(p)}
                        >{p} </span>)
                    }
                </div>
                {
                    this.props.state.users.map(u => <div key={u.id}>
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



