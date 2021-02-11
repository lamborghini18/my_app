import {combineReducers, createStore} from "redux";
import profileReduсer from "./profile_reduсer";
import dialogsReduсer from "./dialogs_reduсer ";
import navbarReduсer from "./navbar_reduсer";
import usersReduсer from "./users_reduсer ";
import authReduсer from "./auth_reducer";


let reducers = combineReducers({
	profilePage: profileReduсer,
	dialogsPage: dialogsReduсer,
	navbar: navbarReduсer,
	usersPage: usersReduсer,
	auth: authReduсer,
	
});

let store = createStore(reducers);

window.store = store;

export default store;

