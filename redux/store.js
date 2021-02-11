import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
// import root from "./reducers/root";
import reducers from "./reducers/postsReducers";

const middlewares = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const makeStore = () => store;
const wrapper = createWrapper(makeStore, { debug: true });

export { wrapper, store };
