import {postFetchRequestSuccess, postFetchRequestFailure,
		postCreateRequestSuccess, postCreateRequestFailure}
		from './../actionCreators/postActionCreators';
import {axiosAPICall, getRNSecureStorage} from 	'./../commons/helpers';
import {BACKEND_URLS, HTTP_METHODS, RN_SECURE_STORAGE_KEYS} from './../commons/constants';
import {put,call,select} from 'redux-saga/effects';

export function* postFetchSaga(action) {
	let response;
	let functionParams = [
		HTTP_METHODS.GET,
		BACKEND_URLS.API_URL + 'posts/',
	];
	try {
		response = yield call(axiosAPICall, ...functionParams);
		yield put(postFetchRequestSuccess(response));
	}
	catch (error) {
		yield put(postFetchRequestFailure(error));
	}
};

export function* postCreateSaga(action) {
	let response;
	let formData = new FormData();
	formData.append('message', action.message);
	if (action.file) {
		formData.append('file', action.file, action.file.name);
	}
	let apiToken, functionParams;
	try {
		const USER = yield select(state => state.userReducer.USER);
		if (USER) {
			apiToken = yield call(getRNSecureStorage, RN_SECURE_STORAGE_KEYS.API_TOKEN_KEY);
		}
		functionParams = [
			HTTP_METHODS.POST,
			BACKEND_URLS.API_URL + 'posts/',
			formData,
			{
				Authorization: `Token ${apiToken}`,
				'Content-type': 'multipart/form_data',
			},
		];
		response = yield call(axiosAPICall, ...functionParams);
		yield put(postCreateRequestSuccess(response));
	}
	catch (error) {
		if (error.response) {
			yield put(postCreateRequestFailure(error.response.data));
		}
		else {
			yield put(postCreateRequestFailure(error));
		}
	}
};
