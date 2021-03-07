import { combineReducers, createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';

import CreateTaskWindowReducer from './CreateTaskWindowReducer';
import NewPurposesReducer from './CreateTaskWindowReducer';


let reducers = combineReducers({
 taskWindow: CreateTaskWindowReducer,
 purposes: NewPurposesReducer
});

let store = createStore(
  reducers,
  applyMiddleware(logger)
  );

export default store;