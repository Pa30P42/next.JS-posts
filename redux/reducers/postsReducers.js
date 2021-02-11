import constants from "../constants/postsConstants";

import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

const latestPostsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return [...payload.posts];

    case constants.GET_POSTS_SUCCESS:
      return [...payload];
    case constants.CLEAN_ALL_DATA:
      return (state = []);
    case constants.CREATE_NEW_POST:
      return [...state, payload];
    case constants.DELETE_CHOSEN_POST:
      return state.filter((post) => post.id !== payload);
    case constants.UPDATE_POST:
      return state.map((item) =>
        item.id === payload.id ? { ...item, ...payload } : item
      );

    default:
      return state;
  }
};

export default combineReducers({
  posts: latestPostsReducer,
});
