import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: 'It\'s my first post', likeCount: 8},
                {id: 3, message: 'Bla Bla Bla', likeCount: 55}
            ],
            newPostText: 'fil_bli_kil.com'
        },
        dialogsPage: {
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State updates')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;    //Патерн наблюдатель (observer)
    },

    dispatch(action) {      //объект принимающий type:

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
