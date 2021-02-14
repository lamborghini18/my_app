import React from "react";
import { Redirect } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem
      name={dialog.name}
      key={dialog.id}
      ava={dialog.ava}
      id={dialog.id}
    />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));
  let newMessageText = state.newMassageText;

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messagesArea}>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div className={s.newMessages}>
            <textarea
              placeholder="Enter your message"
              onChange={onMessageChange}
              value={newMessageText}
            />
          </div>
          <div>
            <button onClick={addMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
