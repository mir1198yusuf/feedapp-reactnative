import {takeEvery,all} from 'redux-saga/effects';
import userActionTypes from './../actionTypes/userActionTypes';
import postActionTypes from './../actionTypes/postActionTypes';
import commentActionTypes from './../actionTypes/commentActionTypes';
import {userLoginSaga,userLogoutSaga,userCheckLoggedInSaga} from './userSagas';
import {postFetchSaga,postCreateSaga} from './postSagas';
import {commentFetchSaga,commentCreateSaga} from './commentSagas';

export default function* rootSaga() {
	yield all([

		// user sagas
		takeEvery(userActionTypes.userLoginRequestAction, userLoginSaga),
		takeEvery(userActionTypes.userLogoutRequestAction, userLogoutSaga),
		takeEvery(userActionTypes.userCheckLoggedInRequestAction, userCheckLoggedInSaga),

		// post sagas
		takeEvery(postActionTypes.postFetchRequestAction, postFetchSaga),
		takeEvery(postActionTypes.postCreateRequestAction, postCreateSaga),

		// comment sagas
		takeEvery(commentActionTypes.commentFetchRequestAction, commentFetchSaga),
		takeEvery(commentActionTypes.commentCreateRequestAction, commentCreateSaga),
	]);
}