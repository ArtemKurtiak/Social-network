import React from "react";
import Posts from "./Posts";

import {connect} from "react-redux";
import {createPost} from "../../../Redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        createPost: (newPostText) => {
            dispatch(createPost(newPostText))
        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;
