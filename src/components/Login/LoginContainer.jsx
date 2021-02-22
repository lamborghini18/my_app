import React from "react";
import { connect } from "react-redux";
import { login } from "../../redux/auth_reducer";
import Login from "./Login";

const LoginContainer = ({ login, isAuth }) => {
  return <Login login={login} isAuth={isAuth} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

// const mapDispatchToprops = (dispatch) => ({
//   login: () => {
//     dispatch(login());
//   },
// });

export default connect(mapStateToProps, { login })(LoginContainer);
