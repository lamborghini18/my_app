import React from "react";
import { textColorBlue } from "../../assets/colors/colors";
import { heading_30 } from "../../assets/fonts/fonts";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";

const Login = ({ login, isAuth }) => {
  const addLogin = (values) => {
    login(values.email, values.password, values.rememberMe);
  };

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <StyledLogin>Login</StyledLogin>
      <LoginForm onSubmit={addLogin} />
    </div>
  );
};

export default Login;

const StyledLogin = styled.div`
  color: ${textColorBlue};
  ${heading_30};
`;
