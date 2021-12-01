const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi, my comment this!", count: 13},
        {id: 2, message: "My two post, and you?", count: 31},
        {id: 3, message: "And text new post three", count: 55},
        {id: 4, message: "Lets go, my brother!", count: 33},
        {id: 5, message: "React cool techno! ", count: 131},
        {id: 6, message: "JSX my new format frontend!", count: 99},
    ],
    newPostText: 'art-duncan.ru',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                count: 0,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_TEXT_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_TEXT_POST_TEXT,
        newText: text
    };
};

export default profileReducer;