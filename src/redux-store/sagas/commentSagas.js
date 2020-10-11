import {commentFetchRequestSuccess, commentFetchRequestFailure,
		commentCreateRequestSuccess, commentCreateRequestFailure}
		from './../actionCreators/commentActionCreators';
import {BACKEND_URLS, HTTP_METHODS, RN_SECURE_STORAGE_KEYS} from './../commons/constants';
import {put,call,select} from 'redux-saga/effects';
import {axiosAPICall, getRNSecureStorage} from 	'./../commons/helpers';

export function* commentFetchSaga(action) {
	let response;
	let functionParams = [
		HTTP_METHODS.GET,
		BACKEND_URLS.API_URL + `posts/${action.postId}/`,
	];
	try {
		response = yield call(axiosAPICall, ...functionParams);
		yield put(commentFetchRequestSuccess(response));
	}
	catch (error) {
		yield put(commentFetchRequestFailure(error));
	}
};

export function* commentCreateSaga(action) {
	let response, apiToken, functionParams;
	try {
		const USER = yield select(state => state.userReducer.USER);
		if (USER) {
			apiToken = yield call(getRNSecureStorage, RN_SECURE_STORAGE_KEYS.API_TOKEN_KEY);
		}
		functionParams = [
			HTTP_METHODS.POST,
			BACKEND_URLS.API_URL + `posts/${action.postId}/`,
			{
				message: action.message
			},
			{
				Authorization: `Token ${apiToken}`,
			}
		];	
		response = yield call(axiosAPICall, ...functionParams);
		yield put(commentCreateRequestSuccess(response));
	}
	catch (error) {
		if (error.response) {
			yield put(commentCreateRequestFailure(error.response.data));
		}
		else {
			yield put(commentCreateRequestFailure(error));
		}
	}
};

