import React from "react";
import styles from "./Header.module.css"
import {MeType} from "../../redux/authReducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    state: MeType
}
export const Header = (props: PropsType) => {
    return (
        <div className={styles.header}>
            {
                props.state.isAuth
                    ? <span>{props.state.login}</span>
                    : <NavLink to={"/login"}>Login</NavLink>
            }
        </div>
    )
}