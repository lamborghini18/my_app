let rerenderEntireTree = () => {
	console.log('State changed');
}

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', likesCount: 10 },
			{ id: 2, message: "It's my first post!", likesCount: 15 },
			{ id: 3, message: "Hello", likesCount: 16 }
		],
		newPostText: ' '
	},
	dialogsPage:{
	dialogs: [
			{ id: 1, name: 'Sveta', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
			{ id: 2, name: 'Vlad', ava: <img src='https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg' /> },
			{ id: 3, name: 'Ilya', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
			{ id: 4, name: 'Lika', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' />},
			{ id: 5, name: 'Nikita', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' />},
			{ id: 6, name: 'Evgenia', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
			{ id: 7, name: 'Ryslan', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
			{ id: 8, name: 'Masha', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> }
	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your first progect?' },
		{ id: 3, message: 'It is OK' },
		{ id: 4, message: 'Fine!' }
	],
		newMessageText: 'hello '
	},
	navbar:{
		friends: [
			{ id: 1, name: 'Sveta', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
			{ id: 2, name: 'Vlad', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },
			{ id: 3, name: 'Ilya', ava: <img src='http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg' /> },

		],
	}
}
window.state = state;

export const addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export const addMessage = () => {
	let newMessage = {
		id: 5,
		message: state.dialogsPage.newMessageText
		};
	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
	state.dialogsPage.newMessageText = newMessage;
	rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}

export default state;