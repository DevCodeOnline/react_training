const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push({id: 6, name: 'Gleb', message: body});
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    };
};

export default dialogsReducer;