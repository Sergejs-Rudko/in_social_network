import React from "react";
import {AppRootStateType} from "../../../redux/reduxStore";
import {addMessageAC, DialogPageStateType, onUpdateNewMessageTextAC} from "../../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    dialogsPage: state.dialogsPage
})

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    updateNewMessageText(text: string) {
        dispatch(onUpdateNewMessageTextAC(text))
    },
    addMessage(text: string) {
        let action = addMessageAC(text)
        dispatch(action)
    }
})

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

//TYPES ________________________________________________________________________________________________________________

type MapStateToPropsType = {
    dialogsPage: DialogPageStateType
}

type MapDispatchToPropsType = {
    updateNewMessageText: (text: string) => void
    addMessage: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

