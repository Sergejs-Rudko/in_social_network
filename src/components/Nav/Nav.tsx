import React from "react";
import styles from "./Nav.module.css"

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={`${styles.nav_item} ${styles.active}`}><a href="#">Profile</a></div>
            <div className={styles.nav_item}><a href="#">Messages</a></div>
            <div className={styles.nav_item}><a href="#">News</a></div>
            <div className={styles.nav_item}><a href="#">Music</a></div>
            <div className={styles.nav_item}><a href="#">Settings</a></div>
        </div>
    )
}