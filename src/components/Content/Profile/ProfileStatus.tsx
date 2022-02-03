import React, {useState,ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/reduxStore";
import {updateStatusTC} from "../../../redux/profileReducer";

export const ProfileStatus = () => {
    const dispatch = useDispatch()
    const status = useSelector<AppRootStateType,string>(state => state.profilePage.status)
    let [editMode, setEditMode] = useState<boolean>(false)
    let [newStatus, setNewStatus] = useState<string>(status)

    const turnOffEditMode = () => {
        setEditMode(true)
    }

    const turnOnEditMode = () => {
        dispatch(updateStatusTC(newStatus))
        setEditMode(false)
    }

    const onStatusChange = (e : ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode ?
                <div>
                    <input type="text" value={newStatus} onBlur={turnOnEditMode} onChange={onStatusChange} autoFocus={true}/>
                </div>
                :
                <div>
                    <span onDoubleClick={turnOffEditMode}> status : {status}</span>
                </div>}
        </div>
    )
}