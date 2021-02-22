import { addPost } from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (newPost) => {
    dispatch(addPost(newPost));
  },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
