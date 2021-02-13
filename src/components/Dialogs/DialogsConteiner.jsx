import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reduсer ';
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (text) => {
			dispatch(updateNewMessageTextActionCreator(text));
		},
		addMessage: () => {
			dispatch(addMessageActionCreator());
		},
	}

}

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsConteiner;

