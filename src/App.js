import logo from "./logo.svg";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginContainer";
import styled from "styled-components";
import { BackgroundLightGreyColor } from "./assets/colors/colors";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app_reducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

const App = ({ initialized, initializeApp }) => {
  useEffect(() => {
    initializeApp();
  }, []);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <AppWrapper>
      <HeaderContainer />
      <Navbar />
      <AppWrapperContainer>
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <LoginPage />} />
      </AppWrapperContainer>
    </AppWrapper>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const AppWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  width: 1200px;
  grid-template-areas:
    "header header"
    "nav cont";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;
`;

const AppWrapperContainer = styled.div`
  grid-area: cont;
  background-color: ${BackgroundLightGreyColor};
`;
