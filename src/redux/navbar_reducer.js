let initialState = {
  friends: [
    {
      id: 1,
      name: "Sveta",
      ava: (
        <img
          src="http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg"
          alt=""
        />
      ),
    },
    {
      id: 2,
      name: "Vlad",
      ava: (
        <img
          src="http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg"
          alt=""
        />
      ),
    },
    {
      id: 3,
      name: "Ilya",
      ava: (
        <img
          src="http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg"
          alt=""
        />
      ),
    },
  ],
};

const navbarReduсer = (state = initialState, action) => {
  return state;
};

export default navbarReduсer;
