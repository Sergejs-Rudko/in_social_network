import React from "react";
import styles from "./Dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogItems}>
                Friends
                <div className={`${styles.dialogItem} ${styles.active}`}>friend 1</div>
                <div className={styles.dialogItem}>friend 2</div>
                <div className={styles.dialogItem}>friend 3</div>
            </div>


            <div className={styles.messages}>
                Messages
                <div className={styles.message}>dialog 1</div>
                <div className={styles.message}>dialog 2</div>
                <div className={styles.message}>dialog 3</div>
            </div>
        </div>
    )
}