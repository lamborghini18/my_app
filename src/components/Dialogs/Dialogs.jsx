import React from 'react';
import { NavLink } from 'react-router-dom';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redax/state';
import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {

	let state = props.store.getState().dialogsPage;

	let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} ava={dialog.ava} id={dialog.id} />);
	let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id} />);
	let newMessageText = state.newMassageText;
	// let newMessageElement = React.createRef();



	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator())
	}

	let onMessageChange = (e) => {
		let text = e.target.value;
		props.store.dispatch(updateNewMessageTextActionCreator(text));
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dialogsElements}
			</div>
			<div className={s.messagesArea}>
				<div className={s.messages}>
					<div>{messagesElements}</div>
					<div className ={s.newMessages}>
						<textarea placeholder='Enter your message'
									onChange={onMessageChange}
									value={newMessageText}/>
					</div>
					<div>
						<button onClick={addMessage}>Send</button>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Dialogs;

