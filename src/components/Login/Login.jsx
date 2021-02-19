import React from "react";
import { textColorBlue } from "../../assets/colors/colors";
import { heading_30 } from "../../assets/fonts/fonts";
import styled from "styled-components";

const Login = (props) => {
  return <StyledLogin>Login</StyledLogin>;
};

export default Login;

const StyledLogin = styled.div`
  color: ${textColorBlue};
  ${heading_30};
`;
