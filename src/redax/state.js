import { rerenderEntireTree } from '../render';

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 10 },
			{ id: 2, message: "It's my first post!", likesCount: 15 },
			{ id: 3, message: "Hello", likesCount: 16 }
		],},
	dialogsPage:{
	dialogs: [
		{ id: 1, name: 'Sveta' },
		{ id: 2, name: 'Vlad' },
		{ id: 3, name: 'Ilya' },
		{ id: 4, name: 'Lika' },
		{ id: 5, name: 'Nikita' },
		{ id: 6, name: 'Evgenia' },
		{ id: 7, name: 'Ryslan' },
		{ id: 8, name: 'Masha' }
	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your first progect?' },
		{ id: 3, message: 'It is OK' },
		{ id: 4, message: 'Fine!' }
	]
	},
	sidebar:{
		friends: [
			{ id: 1, name: 'Sveta' },
			{ id: 2, name: 'Vlad' },
			{ id: 3, name: 'Ilya' },
		]
	}
}

export let addPost = (postMessage) => {
	
	let newPost={
		id: 5,
		message: postMessage,
		likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
}



export default state;