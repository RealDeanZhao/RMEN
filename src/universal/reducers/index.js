import {combineReducers} from 'redux';

const HelloMsg = (state = {}, action) => {
  return state;
};

const rmenApp = combineReducers({
  HelloMsg
});

export default rmenApp;
