import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItems/DialogItem";
import {Message} from "./Messages/Message";
import {
    addMessageAC,
    DialogItemType,
    MessageType,
    onUpdateNewMessageTextAC,
    UnionActionType
} from "../../../fake_redux/state";

type DialogsPropsType = {
    state: {
        dialogsItems: DialogItemType[]
        messageData: MessageType[]
        newMessageText: string
    }
    dispatch: (action: UnionActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(onUpdateNewMessageTextAC(text))
    }

    const addMessage = () => {
        let action = addMessageAC(props.state.newMessageText)
        props.dispatch(action)
    }

    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogItems}>
                {
                    props.state.dialogsItems.map((dd) => <DialogItem name={dd.name} id={dd.id} key={dd.id}/>)
                }
            </div>


            <div className={styles.messages}>
                {
                    props.state.messageData.map((md) => <Message message={md.message} id={md.id} key={md.id}/>)
                }
            </div>
            <textarea value={props.state.newMessageText} onChange={updateNewMessageText}></textarea>
            <button onClick={addMessage}>Send Message</button>
        </div>
    )
}


