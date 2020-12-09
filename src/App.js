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
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
;


const App = (props) => {

	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar navbar={props.state.friends} />
			<div className='app-wrapper-content'>
				<Route path='/profile'
					render={() => <Profile store={props.store} />} />

				<Route path='/dialogs'
					render={() => <DialogsConteiner store={props.store} />} />

				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/settings' render={() => <Settings />} />
			</div>
		</div>

	);
}

export default App;
