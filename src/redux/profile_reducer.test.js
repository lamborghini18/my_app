import profileReduсer, { addPost, deletePost } from "./profile_reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 10 },
    { id: 2, message: "It's my first post!", likesCount: 15 },
    { id: 3, message: "Hello", likesCount: 16 },
  ],
};

test("length of post should be incremented", () => {
  let action = addPost("hello");

  let newState = profileReduсer(state, action);

  expect(newState.posts.length).toBe(4);
});

test("message of new post should be correct", () => {
  let action = addPost("hello");

  let newState = profileReduсer(state, action);

  expect(newState.posts[3].message).toBe("hello");
});

test("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReduсer(state, action);

  expect(newState.posts.length).toBe(2);
});

test("after deleting length shouldn't be decrement if id is incorrect", () => {
  let action = deletePost(100);

  let newState = profileReduсer(state, action);

  expect(newState.posts.length).toBe(3);
});
