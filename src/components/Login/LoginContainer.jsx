import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/auth_reducer";
import Login from "./Login";

const LoginContainer = ({ login, isAuth, error, captchaUrl }) => {
  return (
    <Login
      login={login}
      isAuth={isAuth}
      error={error}
      captchaUrl={captchaUrl}
    />
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  error: state.auth.error,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(LoginContainer);
