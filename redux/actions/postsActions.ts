import axios from "axios";
import { IPost } from "../../helpers/types";
import constants from "../constants/postsConstants";


interface IGetPosts {
  type: typeof constants.GET_POSTS_SUCCESS;
  payload: IPost[];
}

interface ICreatePost {
  type: typeof constants.CREATE_NEW_POST,
  payload: IPost
}

interface IDeletePost {
  type: typeof constants.DELETE_CHOSEN_POST,
  payload: string | number
}

interface IUpdatePost {
  type: typeof constants.UPDATE_POST,
  payload: IPost
}

type DispatchAllPosts = (arg: IGetPosts) => (IGetPosts ) 
type DispatchCreatePost = (arg: ICreatePost) => (ICreatePost)
type DispatchDeletePost = (arg: IDeletePost) => (IDeletePost)
type DispatchUpdatePost = (arg: IUpdatePost) => (IUpdatePost)


const getPosts = () => async  (dispatch: DispatchAllPosts) => {
  const res = await axios.get("https://simple-blog-api.crew.red/posts");

  const response = res.data;
  dispatch({ type: constants.GET_POSTS_SUCCESS, payload: response });
};

const createNewPost = (post) => async (dispatch: DispatchCreatePost) => {
  const res = await axios.post(`https://simple-blog-api.crew.red/posts`, post);

  const response = res.data;

  dispatch({ type: constants.CREATE_NEW_POST, payload: response });
};

const deleteChosenPost = (id) => async (dispatch: DispatchDeletePost) => {
  const res = await axios.delete(
    `https://simple-blog-api.crew.red/posts/${id}`
  );

  dispatch({ type: constants.DELETE_CHOSEN_POST, payload: id });
};

const updatePost = (id, post) => async (dispatch: DispatchUpdatePost) => {
  const res = await axios.put(
    `https://simple-blog-api.crew.red/posts/${id}`,
    post
  );

  const response = res.data;

  dispatch({ type: constants.UPDATE_POST, payload: response });
};

export default {
  getPosts,
  createNewPost,
  updatePost,
  deleteChosenPost,
};
