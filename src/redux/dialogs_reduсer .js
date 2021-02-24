const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Sveta",
      avatarURL: "http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg",
    },
    {
      id: 2,
      name: "Vlad",
      avatarURL:
        "https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg",
    },
    {
      id: 3,
      name: "Ilya",
      avatarURL: "http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg",
    },
    {
      id: 4,
      name: "Lika",
      avatarURL: "http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg",
    },
    {
      id: 5,
      name: "Nikita",
      avatarURL: "http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg",
    },
    {
      id: 6,
      name: "Evgenia",
      avatarURL: "http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg",
    },
    {
      id: 7,
      name: "Ryslan",
      avatarURL: "http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg",
    },
    {
      id: 8,
      name: "Masha",
      avatarURL: "http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg",
    },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your first progect?" },
    { id: 3, message: "It is OK" },
    { id: 4, message: "Fine!" },
  ],
};

const dialogsReduсer = (state = initialState, action) => {
  let stateCopy;

  switch (action.type) {
    case ADD_MESSAGE: {
      let text = action.newMessageBody;
      stateCopy = {
        ...state,
        messages: [...state.messages, { id: 5, message: text }],
      };
      return stateCopy;
    }

    default:
      return state;
  }
};

export const addMessage = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});

export default dialogsReduсer;
