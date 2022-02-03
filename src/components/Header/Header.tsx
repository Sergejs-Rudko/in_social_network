import React from "react";
import styles from "./Header.module.css"
import {logoutTC, MeType} from "../../redux/authReducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

type PropsType = {
    state: MeType
}


export const Header = (props: PropsType) => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutTC())
    }

    return (
        <div className={styles.header}>
            {
                props.state.isAuth
                    ? <span>{props.state.login}</span>
                    : <NavLink to={"/login"}>Login</NavLink>
            }
            <button onClick={logout}>LOGOUT</button>
        </div>
    )
}