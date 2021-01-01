import OnePost from "./OnePost/OnePost";
import s from "./Posts.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";


const Posts = React.memo(props => {

    let postsElements = props.postsData
        .map(p => <OnePost id={p.id} likecount={p.likesCount} message={p.message} key={p.id}/>);

    let createPost = (values) => {
        props.createPost(values.newPostBody);
    }
    return (

        <div>
            <div className={s.creationPost}>
                <h1 className={s.item}>My Posts</h1>
                <PostsFormRedux onSubmit={createPost}/>
            </div>
            {postsElements}
        </div>
    );
});

const maxLength10 = maxLengthCreator(10);
const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="What's new?" name='newPostBody' component={Textarea}
                   validate={[requiredField, maxLength10]}
            />
            <br/>
            <button>Add post</button>
        </form>
    )
}

const PostsFormRedux = reduxForm({form: 'ProfilePostsForm'})(PostsForm)
export default Posts;
