import React from "react";
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    id: number
}

export const DialogItem = (props: PropsType) => {
    return (
        <div className={`${styles.dialogItem}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}