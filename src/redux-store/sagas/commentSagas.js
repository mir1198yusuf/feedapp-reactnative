import {commentFetchRequestSuccess, commentFetchRequestFailure,
		commentCreateRequestSuccess, commentCreateRequestFailure}
		from './../actionCreators/commentActionCreators';
import {BACKEND_URLS, HTTP_METHODS, RN_SECURE_STORAGE_KEYS} from './../commons/constants';
import {put,call} from 'redux-saga/effects';
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

};

