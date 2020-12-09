const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReduser = (state, action) => {

	if (action.type === ADD_MESSAGE) {
		let newMessage = state.newMessageText;
		state.newMessageText = '';
		state.messages.push({ id: 6, message: newMessage });


	} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
		state.newMessageText = action.newMessage;

	}
	return state;
}

export default dialogsReduser;