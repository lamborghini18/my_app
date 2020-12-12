import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reduсer ';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';



const DialogsConteiner = () => {

	return <StoreContext.Consumer> 
		{	(store) => {
			let state = store.getState().dialogsPage;

			let addMessage = () => {
				store.dispatch(addMessageActionCreator());
			}

			let onMessageChange = (text) => {
				store.dispatch(updateNewMessageTextActionCreator(text));
			}
			return (
				<Dialogs
					addMessage={addMessage}
					updateNewMessageText={onMessageChange}
					dialogsPage={state}
				/>)
		}
	}
	</StoreContext.Consumer>


}

export default DialogsConteiner;

