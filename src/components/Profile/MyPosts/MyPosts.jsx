import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} count={p.count}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return <div className={s.posts}>
        <div className={s.head}><h3>My posts</h3></div>
        <div className={s.form}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button className={s.button} onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
        <div className="posts_list">
            {postsElements}
        </div>
    </div>
}

export default MyPosts;