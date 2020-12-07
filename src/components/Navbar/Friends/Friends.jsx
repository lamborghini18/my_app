import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';


const Friends = (props) => {

	let friendsElements = props.friend.map(friend => <FriendsItem friend={friend.name} ava={friend.ava} id={friend.id} />);
	

	return (
	<div>
		<div>
			<h3>Friends</h3>
		</div>
		{/* <div className={s.item}>
			<img src='https://www.ejin.ru/wp-content/uploads/2018/11/avatarki_dlya_devushek_4_19105932.jpg' />
		</div> */}
			<div className={s.friends}>
				{friendsElements}
				</div>
	</div>)
}

export default Friends;