const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                count: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
        };
        case UPDATE_NEW_TEXT_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
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

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

export default profileReducer;