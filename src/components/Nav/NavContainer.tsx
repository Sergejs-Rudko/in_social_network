import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";
import {Nav} from "./Nav";


let mapStateToProps = (state: AppRootStateType) => ({
    sideBar: state.sideBar
})

let mapDispatchToProps = (dispatch: Dispatch) => ({})


export const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

//TYPES ________________________________________________________________________________________________________________

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export type NavType = MapStateToPropsType & MapDispatchToPropsType