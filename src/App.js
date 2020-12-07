import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Navbar/Friends/Friends';
;


const App = (props) => {


	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar navbar={props.state.navbar} />
			<div className='app-wrapper-content'>
				<Route path='/profile'
					render={() => <Profile
						profilePage={props.state.profilePage}
						addPost={props.addPost}
						updateNewPostText={props.updateNewPostText} />} />

				<Route path='/dialogs'
					render={() => <Dialogs dialogsPage={props.state.dialogsPage}
						newMessageText={props.state.dialogsPage.newMessageText}
						updateNewMessageText={props.updateNewMessageText}
						addMessage={props.addMessage}  />} />

				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/settings' render={() => <Settings />} />
			</div>
		</div>


	);
}

export default App;
