import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, my comment this!", count: 13},
                {id: 2, message: "My two post, and you?", count: 31},
                {id: 3, message: "And text new post three", count: 55},
                {id: 4, message: "Lets go, my brother!", count: 33},
                {id: 5, message: "React cool techno! ", count: 131},
                {id: 6, message: "JSX my new format frontend!", count: 99},
            ],
            newPostText: 'art-duncan.ru',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Gleb'},
                {id: 2, name: 'Darina'},
                {id: 3, name: 'Oleg'},
                {id: 4, name: 'Galina'},
                {id: 5, name: 'Nikita'},
                {id: 6, name: 'Ilya'},
                {id: 6, name: 'Vova'},
            ],
            messages: [
                {id: 1, name: 'Gleb', message: 'Hello'},
                {id: 2, name: 'Oleg', message: 'How are you?'},
                {id: 3, name: 'Galina', message: 'So-so'},
                {id: 4, name: 'Gleb', message: 'You my girl?'},
                {id: 5, name: 'Darina', message: 'Yes!'},
                {id: 6, name: 'Gleb', message: 'Cool!'},
            ],
            newMessageBody: '',
        },
        sidebar: {
            menu: [
                {to: '/profile', text: 'Profile'},
                {to: '/dialogs', text: 'Messages'},
                {to: '/news', text: 'News'},
                {to: '/music', text: 'Music'},
                {to: '/setting', text: 'Setting'},
            ],
            friends: [
                {img: 'https://www.taskerfinder.com/wp-content/uploads/2020/04/boy1-1536x1536.png', name: 'Andrew'},
                {img: 'https://www.taskerfinder.com/wp-content/uploads/2020/04/boy1-1536x1536.png', name: 'Sasha'},
                {img: 'https://www.taskerfinder.com/wp-content/uploads/2020/04/boy1-1536x1536.png', name: 'Sveta'},
            ]
        },
    },
    _callSubscriber() {
        console.log('State change')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

window.store = store;

export default store;