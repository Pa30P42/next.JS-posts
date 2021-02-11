import axios from "axios";
import constants from "../constants/postsConstants";

const getPosts = () => async (dispatch) => {
  const res = await axios.get("https://simple-blog-api.crew.red/posts");

  const response = res.data;
  dispatch({ type: constants.GET_POSTS_SUCCESS, payload: response });
};

const createNewPost = (post) => async (dispatch) => {
  const res = await axios.post(`https://simple-blog-api.crew.red/posts`, post);

  const response = res.data;

  dispatch({ type: constants.CREATE_NEW_POST, payload: response });
};

const deleteChosenPost = (id) => async (dispatch) => {
  const res = await axios.delete(
    `https://simple-blog-api.crew.red/posts/${id}`
  );

  dispatch({ type: constants.DELETE_CHOSEN_POST, payload: id });
};

const updatePost = (id, post) => async (dispatch) => {
  const res = await axios.put(
    `https://simple-blog-api.crew.red/posts/${id}`,
    post
  );

  const response = res.data;

  dispatch({ type: constants.UPDATE_POST, payload: response });
};

const cleanPosts = () => ({
  type: constants.CLEAN_ALL_DATA,
});

export default {
  getPosts,
  cleanPosts,
  createNewPost,
  updatePost,
  deleteChosenPost,
};
