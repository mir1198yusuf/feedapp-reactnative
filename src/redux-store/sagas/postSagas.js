import {postFetchRequestSuccess, postFetchRequestFailure,
		postCreateRequestSuccess, postCreateRequestFailure}
		from './../actionCreators/postActionCreators';
import {axiosAPICall} from 	'./../commons/helpers';
import {BACKEND_URLS, HTTP_METHODS} from './../commons/constants';
import {put,call} from 'redux-saga/effects';

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

};
