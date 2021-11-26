let renderEntireTree = () => {
    console.log('State change')
};

let state = {
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
};

export let addPost = () => {
    let newPost = {
        id: 7,
        message: state.profilePage.newPostText,
        count: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export default state;