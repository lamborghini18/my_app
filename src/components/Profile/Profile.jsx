import React from 'react';
import MyPostsConteiner from './My posts/MyPostsConteiner';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

	return (
		<div>
			<ProfileInfo />
			<MyPostsConteiner />

		</div>)
}

export default Profile;

