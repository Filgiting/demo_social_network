import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Element} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {

    let postsElement = [...props.posts]
        .reverse().map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={style.postBlock}>
            <h3>My post</h3>

            <AddPostFormRedux onSubmit={addNewPost}/>

            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    );
});

const maxLength10 = maxLengthCreator(10);
const Textarea = Element("textarea");

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newPostText'
                       placeholder='Add my post'
                       validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const AddPostFormRedux = reduxForm ({form: 'profileAddPostForm'})(AddPostForm);

export default MyPosts;