import React from "react";
import styles from './Users.module.css'

let Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers ( [
			{
				id: 1, photoUrl: 'http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg',
				followed: true, fullName: 'Sveta', status: 'I am a boss', location: { city: 'Sochi', country: 'Russia' }
			},
			{
				id: 2, photoUrl: 'http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg',
				followed: false, fullName: 'Vlad', status: 'I am a boss', location: { city: 'Moscow', country: 'Russia' }
			},
			{
				id: 3, photoUrl: 'http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg',
				followed: false, fullName: 'Misha', status: 'I am a boss', location: { city: ' Sochi', country: 'Russia' }
			},
		],
		)
	}

	return <div>
	{
		props.users.map( u => <div key={u.id}>
			<span>
				<div>
					<img src={u.photoUrl} className = {styles.userPhoto}/>
				</div>
				<duv>
					{u.followed 
						? <button onClick={() => { props.unfollow(u.id) } } >unFollow</button> 
					: <button onClick = { () => { props.follow(u.id) } } >Follow</button> }
					
				</duv>
			</span>
			<span>
				<div>{u.fullName}</div>
				<div>{u.status}</div>
			</span>
			<span>
				<div>{u.location.country}</div>
				<div>{u.location.city}</div>
			</span>
		</div>)
	}
	</div>
	
}

export default Users;