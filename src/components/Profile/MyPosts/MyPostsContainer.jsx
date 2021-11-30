import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (

        <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };

                return (<MyPosts
                    posts={state.profilePage.posts}
                    addPost={addPost}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostText={onPostChange} />
                    )
            }
        }
        </StoreContext.Consumer>
        )
}

export default MyPostsContainer;