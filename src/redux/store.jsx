import { combineReducers, createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";

import refreshReducer from './refreshReducer';
import startDateReducer from './startDateReducer';
import chunkItemsReducer from './chunkItemsReducer';


let reducers = combineReducers({
 refresh: refreshReducer,
 startDate: startDateReducer,
 chunks: chunkItemsReducer,
});

let store = createStore(
  reducers,
  applyMiddleware( thunk )
  );

export default store;