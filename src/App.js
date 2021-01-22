import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersConteiner from './components/Users/UsersConteiner';



const App = (props) => {

	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Route path='/profile'
					render={() => <Profile />} />

				<Route path='/dialogs'
					render={() => <DialogsConteiner />} />

				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/users' render={() => <UsersConteiner /> } />
				<Route path='/settings' render={() => <Settings />} />
			</div>
		</div>

	);
}

export default App;
