import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


const Sidebar = (props) => {
    return (
        <nav className={s.app_sidebar}>
            <div className={s.item}>
                <NavLink to="/my_page" activeClassName={s.activeLink}>My page</NavLink></div>
            <br/>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}> Users
                </NavLink>
            </div>
            <br/>
            <div className={s.item}>
                <NavLink to="/my_messages" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <br/>
            <div className={s.item}>
                <NavLink to='/my_news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <br/>
            <div className={s.item}>
                <NavLink to='/my_settings' activeClassName={s.activeLink}> Settings</NavLink>
            </div>
            <br/>

            <br/>
        </nav>
    );
};
export default Sidebar;
