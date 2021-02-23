import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import styled from "styled-components";
import { textColorLightBlue } from "../../assets/colors/colors";
import AddMessageForm from "./AddMessageForm";
import Paper from "@material-ui/core/Paper";

const Dialogs = ({ dialogsPage, addMessage }) => {
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

  const addNewMessage = (values) => {
    addMessage(values.newMessageBody);
  };

  return (
    <DialogsBlock>
      <ItemBlock>{dialogsElements}</ItemBlock>
      <AreaBlock>
        <MessagesBlock>
          <div>{messagesElements}</div>
          <AddMessageForm onSubmit={addNewMessage} />
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
  background-color: ${textColorLightBlue};
`;
const MessagesBlock = styled.div`
  padding: 10px;
`;
