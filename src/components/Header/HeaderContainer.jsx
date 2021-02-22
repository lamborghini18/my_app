import React, { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData, logout } from "../../redux/auth_reducer";

const HeaderContainer = ({ getAuthUserData, isAuth, login, logout }) => {
  useEffect(() => {
    getAuthUserData();
  }, []);

  return <Header isAuth={isAuth} login={login} logout={logout} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData, logout })(
  HeaderContainer
);
