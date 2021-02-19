import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReduсer from "./profile_reduсer";
import dialogsReduсer from "./dialogs_reduсer ";
import navbarReduсer from "./navbar_reduсer";
import usersReduсer from "./users_reducer";
import authReduсer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReduсer,
  dialogsPage: dialogsReduсer,
  navbar: navbarReduсer,
  usersPage: usersReduсer,
  auth: authReduсer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
