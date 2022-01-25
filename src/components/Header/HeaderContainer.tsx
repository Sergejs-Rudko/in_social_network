import React, {useEffect} from "react";
import {Header} from "./Header";
import {AppRootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {MeType, setMeAC} from "../../redux/authReducer";
import axios from "axios";

export const HeaderContainer = (props: AuthType) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` , {withCredentials: true}).then(
            (response) => {
                if (response.data.resultCode === 0) {
                    props.setMe(response.data.data.id, response.data.data.login, response.data.data.email)
                }
            }
        )
    }, [])
    return (
        <Header state={props.state}/>
    )
}

let mapStateToProps = (state: AppRootStateType) => ({
    state: state.auth
})

let mapDispatchToProps = (dispatch: Dispatch) => ({
    setMe: (id: number, login: string, email: string) => {
        dispatch(setMeAC(id, login, email))
    }
})

//TYPES_________________________________________________________________________________________________________________
type MapStateToPropsType = {
    state: MeType
}
type MapDispatchToPropsType = {
    setMe: (id: number, login: string, email: string) => void

}

export type AuthType = MapDispatchToPropsType & MapStateToPropsType

export let HeaderContainerFull = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)