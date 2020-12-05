import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
	{ id: 1, message: 'Hi, how are you?', likesCount: 10 },
	{ id: 2, message: "It's my first post!", likesCount: 15 },
	{ id: 3, message: "Hello", likesCount: 16 }
]

let dialogs = [
	{ id: 1, name: 'Sveta' },
	{ id: 2, name: 'Vlad' },
	{ id: 3, name: 'Ilya' },
	{ id: 4, name: 'Lika' },
	{ id: 5, name: 'Nikita' },
	{ id: 6, name: 'Evgenia' },
	{ id: 7, name: 'Ryslan' },
	{ id: 8, name: 'Masha' }
]

let messages = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'How is your it-kamasytra' },
	{ id: 3, message: 'Yo' },
	{ id: 4, message: 'Yo' }
]


ReactDOM.render(
  <React.StrictMode>
		<App posts={posts} dialogs={dialogs} messages={messages}/>,	 
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();