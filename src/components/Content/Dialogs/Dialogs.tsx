import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItems/DialogItem";
import {Message} from "./Messages/Message";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {

    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessageText(text)
    }

    const addMessage = () => {
        props.addMessage(props.dialogsPage.newMessageText)
    }

    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogItems}>
                {
                    props.dialogsPage.dialogsItems.map((dd) => <DialogItem name={dd.name} id={dd.id} key={dd.id}/>)
                }
            </div>

            <div className={styles.messages}>
                {
                    props.dialogsPage.messageData.map((md) => <Message message={md.message} id={md.id} key={md.id}/>)
                }
            </div>
            <textarea value={props.dialogsPage.newMessageText} onChange={updateNewMessageText}></textarea>
            <button onClick={addMessage}>Send Message</button>
        </div>
    )
}


