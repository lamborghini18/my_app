import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redax/profile_reduser';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
	
	let postElements = props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

	let newPostElement = React.createRef();
	
	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}
	
let onPostChange = () => {
	let text = newPostElement.current.value;
	let action = updateNewPostTextActionCreator(text);
	props.dispatch(action)
}

	return (
		<div className={s.postsBlock}>
			<h3>My post</h3> 
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} 
					value = {props.newPostText}/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
				<div>
					<button>Remove</button>
				</div>
			</div>
			<div className={s.posts}>
				{postElements}
			</div>
		</div>)
}

export default MyPosts;