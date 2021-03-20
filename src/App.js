import logo from "./logo.svg";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import styled from "styled-components";
import { BackgroundLightGreyColor } from "./assets/colors/colors";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app_reducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const LoginPage = React.lazy(() => import("./components/Login/LoginContainer"));

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
        <Route
          path="/profile/:userId?"
          render={withSuspense(ProfileContainer)}
        />
        <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={withSuspense(LoginPage)} />
      </AppWrapperContainer>
    </AppWrapper>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default MainApp;

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
