import s from './../Messages.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.item}><img className={s.avatar} src="https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-600w-424801768.jpg" alt=""/><NavLink to={'/my_messages/' + props.id}
                                         activeClassName={s.activeLink}>{props.name}</NavLink></div>
    )
}



export default DialogItem;