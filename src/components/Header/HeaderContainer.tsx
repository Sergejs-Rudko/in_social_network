import React, {useEffect} from "react";
import {Header} from "./Header";
import {AppRootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {connect, useDispatch} from "react-redux";
import {authMeTC, MeType} from "../../redux/authReducer";


export const HeaderContainer = (props: AuthType) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authMeTC())
    }, [])

    return (
        <Header state={props.state}/>
    )
}

let mapStateToProps = (state: AppRootStateType) => ({
    state: state.auth
})

let mapDispatchToProps = (dispatch: Dispatch) => ({
    authMe: () => {
        // @ts-ignore
        dispatch(authMeTC())
    }
})

//TYPES_________________________________________________________________________________________________________________
type MapStateToPropsType = {
    state: MeType
}
type MapDispatchToPropsType = {

}

export type AuthType = MapDispatchToPropsType & MapStateToPropsType

export let HeaderContainerFull = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)