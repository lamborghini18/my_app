import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLenghtCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLenght10 = maxLenghtCreator(10);

const MyPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
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
        <button>Add post</button>
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
