import s from './../Messages.module.css'
import React from "react";



const MessageItem = (props) => {
    return (
        <div className={s.messages_list}>
            <div className={s.wrapper}>
                <h3 className={s.message_item}>{props.value}</h3>
            </div>
        </div>
    )
}


export default MessageItem;