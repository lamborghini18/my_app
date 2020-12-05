import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {

	let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
	let messagesElements = props.messages.map(message => <Message message={message.message} id={message.id} />);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dialogsElements}
			</div>
						<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs;

