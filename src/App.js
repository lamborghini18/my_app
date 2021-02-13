import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import UsersConteiner from './components/Users/UsersConteiner';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';



const App = (props) => {

	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar />
			<div className='app-wrapper-content'>
				<Route path='/profile/:userId?'
					render={() => <ProfileContainer />} />

				<Route path='/dialogs'
					render={() => <DialogsConteiner />} />

				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/users' render={() => <UsersConteiner /> } />
				<Route path='/settings' render={() => <Settings />} />
				<Route path='/login' render={() => <LoginPage />} />
			</div>
		</div>

	);
}

export default App;
