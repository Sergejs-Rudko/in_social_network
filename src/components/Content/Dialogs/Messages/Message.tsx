import React from "react";

type PropsType = {
    message : string
    id : number
}
export const Message = (props : PropsType) => {
    return (
        <div>{props.message}</div>
    )
}