import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItems/DialogItem";
import {Message} from "./Messages/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/reduxStore";
import {Navigate} from "react-router-dom";
import {useFormik} from "formik";
import {addMessageAC} from "../../../redux/dialogsReducer";

export const Dialogs = (props: DialogsPropsType) => {
    let isAuth = useSelector<AppRootStateType, boolean>((state) => state.auth.isAuth)

    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessageText(text)
    }



    if (!isAuth) {
        return <Navigate to="/login"/>
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
            {/*            <textarea value={props.dialogsPage.newMessageText} onChange={updateNewMessageText}></textarea>
            <button onClick={addMessage}>Send Message</button>*/}
            <DialogsForm/>
        </div>
    )
}

export const DialogsForm = () => {
    const dispatch = useDispatch()

    const addMessage = (text : string) => {
        dispatch(addMessageAC(text))
    }

    const formik = useFormik({
        initialValues: {
            message: ""
        },
        onSubmit: values => addMessage(values.message)
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input id={"message"}
                       name={"message"}
                       onChange={formik.handleChange}
                       value={formik.values.message}/>
                <button type={"submit"}>send message</button>
            </form>
        </div>
    )
}


