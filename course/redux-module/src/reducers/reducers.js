import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const reducers = combineReducers({
  // if you have multiple reducers you can add them below todo
  // don't modify this
  todo: todoReducer,
});

export default reducers;
