import {userLoginRequestSuccess, userLoginRequestFailure,
		userLogoutRequestSuccess, userLogoutRequestFailure,
		userCheckLoggedInRequestSuccess, userCheckLoggedInRequestFailure,} 
		from './../actionCreators/userActionCreators';
import {axiosAPICall} from './../commons/helpers';
import {put,call} from 'redux-saga/effects';
import {BACKEND_URLS, HTTP_METHODS} from './../commons/constants';

export function* userLoginSaga(action) {
	let response;
	let functionParams = [
		HTTP_METHODS.POST,
		BACKEND_URLS.API_URL + 'login/',
		{
			username: action.username,
			password: action.password,
		},
	];
	try {
		response = yield call(axiosAPICall, ...functionParams);
		yield put(userLoginRequestSuccess(response.username));
	}
	catch (error) {
		yield put(userLoginRequestFailure(error.response.data));
	}
};

export function* userLogoutSaga(action) {

};

export function* userCheckLoggedInSaga(action) {

};