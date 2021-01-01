import s from "./Header.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.app_header}>
            <img src="https://www.searchpng.com/wp-content/uploads/2019/03/Rocket-Icon-PNG-715x715.png"/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} <br/> <button onClick={props.logout}>Logout</button></div>: <NavLink to='/login'>Login</NavLink>}

            </div>
        </header>
    );
};
export default Header;
