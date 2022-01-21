import React from "react"
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/reduxStore";
import {followAC, setUsersAC, unfollowAC, UserPageStateType, UserType} from "../../../redux/usersReducer";

import {UsersClass} from "./UsersClass";
import {Dispatch} from "redux";



const mapStateToProps = (state: AppRootStateType) => ({
    state: state.usersPage
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    follow(id: number) {
        dispatch(followAC(id))
    },
    unfollow(id: number) {
        dispatch(unfollowAC(id))
    },
    setUsers(users: any) {
        dispatch(setUsersAC(users))
    }
})
//TYPES


type MapStateToPropsType = {
    state: UserPageStateType
}

type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export type UsersPageType = MapStateToPropsType & MapDispatchToPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)