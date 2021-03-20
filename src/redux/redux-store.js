import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReduсer from "./profile_reducer";
import dialogsReduсer from "./dialogs_reduсer ";
import navbarReduсer from "./navbar_reducer";
import usersReduсer from "./users_reducer";
import authReduсer from "./auth_reducer";
import appReduсer from "./app_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: profileReduсer,
  dialogsPage: dialogsReduсer,
  navbar: navbarReduсer,
  usersPage: usersReduсer,
  auth: authReduсer,
  form: formReducer,
  app: appReduсer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
