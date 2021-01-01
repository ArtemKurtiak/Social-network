import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, what\'s your name?', likesCount: 16},
                {id: 2, message: 'Hi', likesCount: 90},
                {id: 3, message: 'I am Artem', likesCount: 0},
                {id: 4, message: 'I am Vlados', likesCount: 0},
                {id: 5, message: 'I am Lukaa', likesCount: 10},
            ],
            newPostText: '',
        },
        messagesPage: {
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
            newMessageText: '',
        },
        friendsPage: {
            friendsList: [
                {name: 'Artem'},
                {name: 'Vlad'},
                {name: 'Luka'},
                {name: 'Iryna'},
                {name: 'Roman'},
            ]
        },
    },
    _callSubscriber() {
        alert('hi')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._state._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.friendsPage = usersReducer(this._state.friendsPage, action);
        this._state._callSubscriber(this._state);
    }
}

window.state = store._state
export default store;