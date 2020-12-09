import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reduсer ';
import Dialogs from './Dialogs';



const DialogsConteiner = (props) => {

	let state = props.store.getState().dialogsPage;

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}

	let onMessageChange = (text) => {
		props.store.dispatch(updateNewMessageTextActionCreator(text));
	}

	return (
		<Dialogs 
			addMessage={addMessage}
			updateNewMessageText={onMessageChange}
			dialogsPage={state}
		/>


	)
}

export default DialogsConteiner;

