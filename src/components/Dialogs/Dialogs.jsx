import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {
	debugger;
	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
	let messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id} />);

	let newMessageElements = React.createRef();

	let AddPost = () => {
		let text = newMessageElements.current.value;
		alert(text);
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
						<textarea ref={newMessageElements}></textarea>
					</div>
					<div>
						<button onClick={AddPost}>Add message</button>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Dialogs;

