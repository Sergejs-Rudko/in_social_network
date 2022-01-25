import React, {useEffect} from "react";
import {AppRootStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {ProfilePageType, setUsersProfileAC, UsersProfileType} from "../../../redux/profileReducer";
import axios from "axios";
import {Profile} from "./Profile";
import {useParams} from "react-router-dom";


const ProfileContainer = (props: ProfileContainerPropsType) => {
    let {userId}  = useParams()
    useEffect(() => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(
            (response) => {
                if (response) {
                    props.setUsersProfile(response.data)
                }
            }
        )
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