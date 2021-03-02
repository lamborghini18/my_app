import profileReduсer, { addPost, deletePost } from "./profile_reducer";

const state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post!", likesCount: 15 },
    { id: 3, message: "Hello", likesCount: 16 },
  ],
};

test("length of post should be incremented", () => {
  const action = addPost("hello");

  const newState = profileReduсer(state, action);

  expect(newState.posts.length).toBe(4);
});

test("message of new post should be correct", () => {
  const action = addPost("hello");

  const newState = profileReduсer(state, action);

  expect(newState.posts[3].message).toBe("hello");
});

test("after deleting length of messages should be decrement", () => {
  const action = deletePost(1);

  const newState = profileReduсer(state, action);

  expect(newState.posts.length).toBe(2);
});

test("after deleting length shouldn't be decrement if id is incorrect", () => {
  const action = deletePost(100);

  const newState = profileReduсer(state, action);

  expect(newState.posts.length).toBe(3);
});
