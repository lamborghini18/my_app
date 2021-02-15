import React from "react";
import { Redirect } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Button, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const Dialogs = ({ dialogsPage, updateNewMessageText, addMessage }) => {
  const state = dialogsPage;

  const dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem
      name={dialog.name}
      key={dialog.id}
      ava={dialog.ava}
      id={dialog.id}
    />
  ));
  const messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  const onMessageChange = (event) => {
    const text = event.target.value;
    updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messagesArea}>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div className={s.newMessages}>
            <TextField
              id="outlined-basic"
              label="New message"
              variant="outlined"
              placeholder="Enter your message"
              onChange={onMessageChange}
              value={state.newMessageText}
            />
          </div>
          <div>
            <Button
              onClick={addMessage}
              endIcon={<SendIcon />}
              variant="contained"
              color="primary"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
