import {userLoginRequestSuccess, userLoginRequestFailure,
		userLogoutRequestSuccess, userLogoutRequestFailure,
		userCheckLoggedInRequestSuccess, userCheckLoggedInRequestFailure,} 
		from './../actionCreators/userActionCreators';
import {axiosAPICall, setRNSecureStorage} from './../commons/helpers';
import {put,call} from 'redux-saga/effects';
import {BACKEND_URLS, HTTP_METHODS, RN_SECURE_STORAGE_KEYS} from './../commons/constants';

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
		yield call(setRNSecureStorage, RN_SECURE_STORAGE_KEYS.API_TOKEN_KEY, response.token);
		yield call(setRNSecureStorage, RN_SECURE_STORAGE_KEYS.USERNAME_KEY, response.username);
		yield call(setRNSecureStorage, RN_SECURE_STORAGE_KEYS.TOKEN_EXPIRY_KEY, response.expiry);
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