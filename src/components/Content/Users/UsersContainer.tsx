import React from "react"
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/reduxStore";
import {
    setCurrentPageAC,
    followAC,
    setUsersAC,
    unfollowAC,
    UserPageStateType,
    UserType, setTotalUsersCountAC
} from "../../../redux/usersReducer";
import {Users} from "./Users";
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
    },
    setCurrentPage(pageNumber : number){
        dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount(totalCount :number){
        dispatch(setTotalUsersCountAC(totalCount))
    }
})
//TYPES
type MapStateToPropsType = {
    state : UserPageStateType
}
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export type UsersPageType = MapStateToPropsType & MapDispatchToPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)