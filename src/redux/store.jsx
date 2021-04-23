import { combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import refreshReducer from './refreshReducer';
import chunkItemsReducer from './chunkItemsReducer';


let reducers = combineReducers({
 refresh: refreshReducer,
 chunks: chunkItemsReducer,
});

let store = createStore(
  reducers,
  applyMiddleware( thunk )
  );

export default store;