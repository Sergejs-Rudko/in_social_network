import React from "react";
import styles from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <div>content header image</div>
            <div>avatar</div>
            <div>Profile description</div>
            <div><textarea>My posts</textarea></div>
            <div>
                <ul>
                    <li>Post 1</li>
                    <li>Post 2</li>
                    <li>Post 3</li>
                </ul>
                <button>Add post</button>
            </div>

        </div>
    )
}