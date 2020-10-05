import postActionTypes from './../actionTypes/postActionTypes';

const defaultState = {
	requestState: false,
	requestStatus: null,
	error: null,
	posts: [],
};

export default postReducer = (state=defaultState, action) => {
	switch (action.type) {
		//post fetch actions
		case postActionTypes.postFetchRequestAction:

		case postActionTypes.postFetchRequestSuccess:

		case postActionTypes.postFetchRequestFailure:

		// post create actions
		case postActionTypes.postCreateRequestAction:

		case postActionTypes.postCreateRequestSuccess:

		case postActionTypes.postCreateRequestFailure:

		default:
			return state;
	}
};