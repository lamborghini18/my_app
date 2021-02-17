import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Button, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import styled from "styled-components";

const Dialogs = ({ dialogsPage, updateNewMessageText, addMessage }) => {
  const state = dialogsPage;

  const dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem
      name={dialog.name}
      key={dialog.id}
      avatarURL={dialog.avatarURL}
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
    <DialogsBlock>
      <ItemBlock>{dialogsElements}</ItemBlock>
      <AreaBlock>
        <MessagesBlock>
          <div>{messagesElements}</div>
          <StyledNewMessage>
            <TextField
              id="outlined-basic"
              label="New message"
              variant="outlined"
              placeholder="Enter your message"
              onChange={onMessageChange}
              value={state.newMessageText}
            />
          </StyledNewMessage>
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
        </MessagesBlock>
      </AreaBlock>
    </DialogsBlock>
  );
};

export default Dialogs;

const DialogsBlock = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;
const ItemBlock = styled.div`
  padding: 10px;
`;
const AreaBlock = styled.div`
  margin: 10px;
  height: 500px;
  background-color: rgba(61, 206, 250, 0.411);
`;
const MessagesBlock = styled.div`
  padding: 10px;
`;
const StyledNewMessage = styled.div`
  padding: 50px 0 10px 0;
`;
