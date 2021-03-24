import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, emailRequired } from "../../utils/validators/validators";
import styled from "styled-components";
import { ErrorRedColor } from "../../assets/colors/colors";
import { Button } from "@material-ui/core";
import { Textarea } from "../common/FormsControls/FormsControls";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FieldBlock>
        <Field
          placeholder={"email"}
          label="email"
          name={"email"}
          component={Textarea}
          validate={[required, emailRequired]}
        />
      </FieldBlock>
      <FieldBlock>
        <Field
          component={Textarea}
          label="password"
          placeholder={"Password"}
          name={"password"}
          validate={[required]}
          type={"password"}
        />
      </FieldBlock>
      <FieldBlock>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
        remember me
      </FieldBlock>

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && (
        <FieldBlock>
          <Field
            component={Textarea}
            label="enter characters"
            placeholder={"enter characters"}
            name={"captcha"}
            validate={[required]}
            type={"captcha"}
          />
        </FieldBlock>
      )}

      {error && <ErrorText>{error}</ErrorText>}

      <FieldBlock>
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </FieldBlock>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);

const ErrorText = styled.div`
  color: ${ErrorRedColor};
`;
const FieldBlock = styled.div`
  margin: 10px;
`;
