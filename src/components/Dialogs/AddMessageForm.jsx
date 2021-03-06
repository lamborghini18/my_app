import React from "react";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";

const AddMessageForm = ({ handleSubmit, reset, addMessage }) => {
  const addNewMessage = (values) => {
    addMessage(values.newMessageBody);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(addNewMessage)}>
      <NewMessageBlock>
        <Field
          component={Textarea}
          name="newMessageBody"
          label="New message"
          placeholder="Enter your message"
          validate={[required]}
        />
      </NewMessageBlock>
      <div>
        <Button
          type="submit"
          endIcon={<SendIcon />}
          variant="contained"
          color="primary"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

const NewMessageBlock = styled.div`
  padding: 50px 0 10px 0;
`;
