import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css';


const Navbar = (props) => {
	return (
	<nav className = {s.nav}>
			<div className = {s.item}>
				<NavLink to= "/profile" activeClassName = {s.activeLink}>Profile</NavLink>
			</div>
		<div className= {s.item}>
				<NavLink to="/dialogs" activeClassName={s.activeLink}>Messedges</NavLink>
			</div>
		<div className={`${s.item} ${s.active}`}>
				<NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
			</div>
		<div className={s.item}>
				<NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
		</div>
		<div className={s.item}>
				<NavLink to='settings' activeClassName={s.activeLink}>Settings</NavLink>
		</div>
			<div className={s.item}>
				<NavLink to='friends' activeClassName={s.activeLink}>
					<Friends friend={props.navbar.friends}/>
					</NavLink>
			</div>
		</nav>)
}

export default Navbar;