import React from "react";
import {Users} from "./Users";
import {AppRootStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    followAC, getUsersTC,
    setCurrentPageTC,
    setUsersAC, toogleIsFollowingInProcessAC,
    unfollowAC,
    UserPageStateType
} from "../../../redux/usersReducer";
import {connect} from "react-redux";
import {Preloader} from "../../Common/Preloader";


class UsersContainer extends React.Component<UsersPageType> {

    componentDidMount() {
        let {currentPage, pageSize} = {...this.props.state}
        this.props.getUsers(currentPage, pageSize)
    }

    /*    setCurrentPage = (pageNumber: number) => {
            let {pageSize} = {...this.props.state}
            this.props.toogleIsFetching(true)
            this.props.setCurrentPage(pageNumber);
            USERS_API.setCurrentPage(pageNumber, pageSize).then(
                (data) => {
                    this.props.setUsers(data.items)
                    this.props.toogleIsFetching(false)
                }
            )
        }*/
    setCurrentPage = (pageNumber: number) => {
        let {pageSize} = {...this.props.state}
        this.props.setCurrentPage(pageNumber, pageSize)
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
                       isFollowingInProcess={this.props.state.isFollowingInProcess}
                       toogleIsFollowingProcess={this.props.toogleIsFollowingProcess}
                />
            </>
        )
    }
}

// Посути объединяловка классовой и конектной
const mapStateToProps = (state: AppRootStateType) => ({
    state: state.usersPage
})

/*    setCurrentPage(pageNumber: number) {
        dispatch(setCurrentPageAC(pageNumber))
    }*/

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

    toogleIsFollowingProcess(isFetching: boolean, userId: number) {
        dispatch(toogleIsFollowingInProcessAC(isFetching, userId))
    },
    getUsers: (currentPage: number, pageSize: number) => {
        // @ts-ignore
        dispatch(getUsersTC(currentPage, pageSize))
    },
    setCurrentPage: (pageNumber: number, pageSize: number) => {
        // @ts-ignore
        dispatch(setCurrentPageTC(pageNumber, pageSize))
    }
})
//TYPES
type MapStateToPropsType = {
    state: UserPageStateType
}
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export type UsersPageType = MapStateToPropsType & MapDispatchToPropsType

export let UsersFullContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)



