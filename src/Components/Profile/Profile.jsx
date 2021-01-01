import s from './Profile.module.css';
import ProfileInfo from "./ProfileAbout/ProfileInfo";
import React from "react";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    debugger
    return (
        <main className={s.app_profile}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer />
        </main>
    );
};
export default Profile;