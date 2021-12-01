let initialState = {
    menu: [
        {id: 1, to: '/profile', text: 'Profile'},
        {id: 2, to: '/dialogs', text: 'Messages'},
        {id: 3, to: '/news', text: 'News'},
        {id: 4, to: '/music', text: 'Music'},
        {id: 5, to: '/users', text: 'Users'},
        {id: 6, to: '/setting', text: 'Setting'},
    ],
    friends: [
        {id: 1, img: 'https://www.taskerfinder.com/wp-content/uploads/2020/04/boy1-1536x1536.png', name: 'Andrew'},
        {id: 2, img: 'https://www.taskerfinder.com/wp-content/uploads/2020/04/boy1-1536x1536.png', name: 'Sasha'},
        {id: 3, img: 'https://www.taskerfinder.com/wp-content/uploads/2020/04/boy1-1536x1536.png', name: 'Sveta'},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;