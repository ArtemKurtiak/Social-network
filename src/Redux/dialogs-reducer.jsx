const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState = {
    dialogsData: [
        {id: 1, name: 'Artik'},
        {id: 2, name: 'Vlados'},
        {id: 3, name: 'Lukas'},
        {id: 4, name: 'Iryna'},
        {id: 5, name: 'Artikus'},
        {id: 6, name: 'Roman'},
    ],
    messagesData: [
        {value: 'Hi!'},
        {value: 'Good'},

    ],
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, value: action.newMessageBody,}],
            };
        }
        default:
            return state;
    }
    return state
}

export let creationMessage = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;