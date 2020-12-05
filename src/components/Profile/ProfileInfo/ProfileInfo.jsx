import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
	return (
		<div>
			<div className={s.picture}>
				<img src='https://img4.goodfon.ru/original/2560x1024/d/43/tsvety-vesna-tsvetenie-vetki-fon.jpg' />
			</div>
				<div className={s.descriptionBlock}>
				ava + description
			</div>
		</div>)
}

export default ProfileInfo;

