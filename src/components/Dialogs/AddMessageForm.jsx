import React from "react";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { BlueButton } from "../common/Buttons/Buttons";

const AddMessageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <StyledNewMessage>
        <Field
          component={Textarea}
          name="newMessageBody"
          label="New message"
          placeholder="Enter your message"
          validate={[required]}
        />
      </StyledNewMessage>
      <div>
        <button>send</button>
        {/* <Button endIcon={<SendIcon />} variant="contained" color="primary">
          Send
        </Button> */}
      </div>
    </form>
  );
};

export default reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

const StyledNewMessage = styled.div`
  padding: 50px 0 10px 0;
`;
