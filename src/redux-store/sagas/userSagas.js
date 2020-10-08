import {userLoginRequestSuccess, userLoginRequestFailure,
		userLogoutRequestSuccess, userLogoutRequestFailure,
		userCheckLoggedInRequestSuccess, userCheckLoggedInRequestFailure,} 
		from './../actionCreators/userActionCreators';
import {axiosAPICall, setRNSecureStorage, getRNSecureStorage, removeRNSecureStorage} from './../commons/helpers';
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
	let response;
	let apiToken = yield call(getRNSecureStorage, RN_SECURE_STORAGE_KEYS.API_TOKEN_KEY);
	let functionParams = [
		HTTP_METHODS.POST,
		BACKEND_URLS.API_URL + 'logout/',
		{},
		{
			Authorization: `Token ${apiToken}`,
		},
	];
	try {
		response = yield call(axiosAPICall, ...functionParams);
		yield call(removeRNSecureStorage, RN_SECURE_STORAGE_KEYS.API_TOKEN_KEY);
		yield call(removeRNSecureStorage, RN_SECURE_STORAGE_KEYS.USERNAME_KEY);
		yield call(removeRNSecureStorage, RN_SECURE_STORAGE_KEYS.TOKEN_EXPIRY_KEY);
		yield put(userLogoutRequestSuccess());
	}
	catch(error) {
		yield put(userLogoutRequestFailure(error.response.data));
	}
};

export function* userCheckLoggedInSaga(action) {

};