import React from "react";
import styles from "./Nav.module.css"
import {NavLink} from "react-router-dom";
import {NavType} from "./NavContainer";


export const Nav = (props: NavType) => {


    return (
        <div>
            <nav className={styles.nav}>
                <div><NavLink to="profile"
                              className={(navData) => navData.isActive ? styles.activeLink : ""}>Profile</NavLink></div>
                <div><NavLink to="/dialogs"
                              className={(navData) => navData.isActive ? styles.activeLink : ""}>Dialogs</NavLink></div>
                <div><NavLink to="/users"
                              className={(navData) => navData.isActive ? styles.activeLink : ""}>Users</NavLink></div>
                <div><NavLink to="/news"
                              className={(navData) => navData.isActive ? styles.activeLink : ""}>News</NavLink>
                </div>
                <div><NavLink to="/music"
                              className={(navData) => navData.isActive ? styles.activeLink : ""}>Music</NavLink>
                </div>
                <div><NavLink to="/settings"
                              className={(navData) => navData.isActive ? styles.activeLink : ""}>Settings</NavLink>
                </div>
            </nav>
            <div className={styles.friends}>
                {
                    props.sideBar.friends.map(f => <span key={f.id}>{`${f.name} `}</span>)
                }
            </div>
        </div>

    )
}