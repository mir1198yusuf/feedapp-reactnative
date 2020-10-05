import {combineReducers} from 'redux';
import userReducer from './userReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

export default rootReducer = combineReducers({
	userReducer: userReducer,
	postReducer: postReducer,
	commentReducer: commentReducer,
});
