import React from "react";
import styles from "./Nav.module.css"

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <div><a href="#">Profile</a></div>
            <div><a href="#">Messages</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>
        </div>
    )
}