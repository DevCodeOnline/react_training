let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;