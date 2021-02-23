import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import styled from "styled-components";
import { ErrorRedColor } from "../../assets/colors/colors";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required]}
          type={"password"}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
        remember me
      </div>
      {error && <ErrorText>{error}</ErrorText>}

      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);

const ErrorText = styled.div`
  color: ${ErrorRedColor};
`;
