const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
	newMessageText: ''
};

const dialogsReduсer = (state = initialState, action) => {
let stateCopy;

	switch (action.type) {
		case ADD_MESSAGE: {

			let text = state.newMessageText;
			stateCopy = {
				...state,
				messages: [...state.messages, { id: 5, message: text }],
				newMessageText: ''
			};
			return stateCopy;
		}

		case UPDATE_NEW_MESSAGE_TEXT:
			debugger;
			stateCopy = {
				...state,
				newMessageText: action.newMessage,
			};
	
			return stateCopy;

		default:
			return state;
	}
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => {
	
return ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text })}


export default dialogsReduсer;