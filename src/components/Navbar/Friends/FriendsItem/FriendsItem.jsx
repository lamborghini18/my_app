import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './FriendsItem.module.css'


const FriendsItem = (props) => {
	let path = "/friend/" + props.id;
	return (
		<div className={s.friends}>
			<div className={s.ava}>
				<NavLink to={path}>{props.ava}</NavLink>
			</div>
			<div className={s.name}>
				<NavLink to={path}>{props.friend}</NavLink>
			</div>

		</div>
	)
}

export default FriendsItem;