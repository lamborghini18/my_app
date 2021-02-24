import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLenghtCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const maxLenght10 = maxLenghtCreator(10);

const MyPostForm = ({ handleSubmit, reset, addPost }) => {
  const addNewPost = (values) => {
    addPost(values.newPost);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(addNewPost)}>
      <TextFieldBlock>
        <Field
          component={Textarea}
          name="newPost"
          placeholder="Enter your post"
          label="NewPost"
          validate={[required, maxLenght10]}
        />
      </TextFieldBlock>
      <AddPostBlock>
        <Button
          type="submit"
          endIcon={<SendIcon />}
          variant="contained"
          color="primary"
        >
          Send
        </Button>
      </AddPostBlock>
    </form>
  );
};

export default reduxForm({ form: "ProfilePostForm" })(MyPostForm);

const AddPostBlock = styled.div`
  margin: 10px 0;
`;
const TextFieldBlock = styled.div`
  margin: 10px 0;
`;
