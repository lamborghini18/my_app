import {combineReducers, createStore} from "redux";
import profileReduсer from "./profile_reduсer";
import dialogsReduсer from "./dialogs_reduсer ";
import navbarReduсer from "./navbar_reduсer";

let reducers = combineReducers({
	profilePage: profileReduсer,
	dialogsPage: dialogsReduсer,
	navbar: navbarReduсer
});

let store = createStore(reducers);

export default store;

