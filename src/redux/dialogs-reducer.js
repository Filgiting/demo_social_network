const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Lex'},
        {id: 3, name: 'Fil'},
        {id: 4, name: 'Bil'}
    ],
    messages: [
        {id: 1, message: 'Hi Dimas karabas'},
        {id: 2, message: 'Hi Lex flex'},
        {id: 3, message: 'Hi Fil bil'},
        {id: 4, message: 'Hi Bil dil'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            };

        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;