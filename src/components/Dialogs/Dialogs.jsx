import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {
	
	let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} ava={dialog.ava} id={dialog.id} />);
	let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} id={message.id} />);

	let newMessageElement = React.createRef();

	let addMessage = () => {
		props.addMessage();
	}

	let onMessageChange = () => {
		let text = newMessageElement.current.value;
		props.updateNewMessageText(text);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dialogsElements}
			</div>
			<div className={s.messagesArea}>
				<div className={s.messages}>
					{messagesElements}
					<div className ={s.newMessages}>
						<textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
					</div>
					<div>
						<button onClick={addMessage}>Add message</button>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Dialogs;

