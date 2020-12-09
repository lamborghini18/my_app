import dialogsReduser from "./dialogs_reduser ";
import profileReduser from "./profile_reduser";
// import navbarReduser from "./navbar_reduser";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likesCount: 10 },
				{ id: 2, message: "It's my first post!", likesCount: 15 },
				{ id: 3, message: "Hello", likesCount: 16 }
			],
			newPostText: ' '
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Sveta', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
				{ id: 2, name: 'Vlad', ava: <img src='https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg' /> },
				{ id: 3, name: 'Ilya', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
				{ id: 4, name: 'Lika', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
				{ id: 5, name: 'Nikita', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
				{ id: 6, name: 'Evgenia', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
				{ id: 7, name: 'Ryslan', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
				{ id: 8, name: 'Masha', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> }
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How is your first progect?' },
				{ id: 3, message: 'It is OK' },
				{ id: 4, message: 'Fine!' }
			],
			newMessageText: ' '
		},
		navbar: {
			friends: [
				{ id: 1, name: 'Sveta', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
				{ id: 2, name: 'Vlad', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
				{ id: 3, name: 'Ilya', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },

			],
		}
	},
	_callSubscriber() {
		console.log('State changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action){
		this._state.profilePage = profileReduser(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
		// this._state.navbar = navbarReduser(this._state.navbar, action);

		this._callSubscriber(this._state);
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })


export default store;
window.state = store;