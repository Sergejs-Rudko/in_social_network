import React from "react";
import styles from "./Post.module.css"


// PROPS TYPE __________________________________________________________________________________________________________
type PropsType = {
    id? : number
    message: string
    avatarUrl?: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return (
        <div>
            <ul>
                <li><img className={styles.avatar}
                         src={"data:image/png;base64,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"}
                         alt="avatar"/></li>

                <li>{props.message}</li>
                <li>Likes {props.likesCount}</li>
            </ul>
        </div>
    )
}
