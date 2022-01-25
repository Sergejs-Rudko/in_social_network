import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {AppRootStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toogleIsFetchingAC,
    unfollowAC,
    UserPageStateType
} from "../../../redux/usersReducer";
import {connect} from "react-redux";
import {Preloader} from "../../Common/Preloader";
import {USERS_API} from "../../../API/API";


class UsersContainer extends React.Component<UsersPageType> {

    componentDidMount() {
        let {currentPage, pageSize} = {...this.props.state}
        this.props.toogleIsFetching(true)
        USERS_API.getUsers(currentPage, pageSize).then(
            (data) => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toogleIsFetching(false)
            }
        )
    }

    setCurrentPage = (pageNumber: number) => {
        let {pageSize} = {...this.props.state}
        this.props.toogleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        USERS_API.setCurrentPage(pageNumber, pageSize).then(
            (data) => {
                this.props.setUsers(data.items)
                this.props.toogleIsFetching(false)
            }
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
            <>
                {
                    this.props.state.isFetching && <Preloader/>
                }
                <Users pages={pages}
                       setCurrentPage={this.setCurrentPage}
                       currentPage={this.props.state.currentPage}
                       users={this.props.state.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                />
            </>
        )
    }
}

// Посути объединяловка классовой и конектной
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
    setCurrentPage(pageNumber: number) {
        dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount(totalCount: number) {
        dispatch(setTotalUsersCountAC(totalCount))
    },
    toogleIsFetching(toogleValue: boolean) {
        dispatch(toogleIsFetchingAC(toogleValue))
    }
})
//TYPES
type MapStateToPropsType = {
    state: UserPageStateType
}
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export type UsersPageType = MapStateToPropsType & MapDispatchToPropsType

export let UsersFullContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)



