import React from "react";
import { textColorBlue } from "../../assets/colors/colors";
import { heading_30 } from "../../assets/fonts/fonts";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";

const Login = ({ login, isAuth, captchaUrl }) => {
  const addLogin = (values) => {
    login(values.email, values.password, values.rememberMe, values.captcha);
  };

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <StyledLoginBlock>
      <StyledLogin>Login</StyledLogin>
      <LoginForm onSubmit={addLogin} captchaUrl={captchaUrl} />
    </StyledLoginBlock>
  );
};

export default Login;

const StyledLogin = styled.div`
  text-align: center;
  padding: 0 10px;
  color: ${textColorBlue};
  ${heading_30};
`;
const StyledLoginBlock = styled.div`
  margin: auto;
  width: 10em;
  padding-top: 20px;
`;
