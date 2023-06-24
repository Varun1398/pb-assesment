import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from './Reducers/rootReducer';

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, middleware);

export default store;
