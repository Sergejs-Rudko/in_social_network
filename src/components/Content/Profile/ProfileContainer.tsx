import React, {useEffect} from "react";
import {AppRootStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {connect, useDispatch} from "react-redux";
import {
    ProfilePageType,
    setUserProfileTC,
    setUsersProfileAC,
    setUserStatusTC,
    UsersProfileType
} from "../../../redux/profileReducer";
import {Profile} from "./Profile";
import {useParams} from "react-router-dom";


const ProfileContainer = (props: ProfileContainerPropsType) => {
    let {userId} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setUserProfileTC(Number(userId)))
        dispatch(setUserStatusTC(Number(userId)))
    }, [])

    return (
        <div>
            <Profile profile={props.state.user}/>
        </div>
    )

}

let mapStateToProps = (state: AppRootStateType) => ({
    state: state.profilePage
})

let mapDispatchToProps = (dispatch: Dispatch) => ({
    setUsersProfile(profile: UsersProfileType) {
        dispatch(setUsersProfileAC(profile))
    }
})

//let profileWithRouter = withRouter(ProfileContainer)

export const ProfileContainerFull = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

//TYPES ________________________________________________________________________________________________________________

type MapStateToPropsType = {
    state: ProfilePageType
}

type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType