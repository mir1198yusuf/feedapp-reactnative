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
			return {
				...state,
				requestState: true,
				requestStatus: 'post fetch start',
				error: null,
				//posts: [],	we are not invalidating previous fetched posts
			};

		case postActionTypes.postFetchRequestSuccess:
			return {
				...state,
				requestState: false,
				requestStatus: 'post fetch success',
				error: null,
				posts: action.posts,
			};

		case postActionTypes.postFetchRequestFailure:
			return {
				...state,
				requestState: false,
				requestStatus: 'post fetch failed',
				error: action.error,
				//posts: [],	we are not invalidating previous fetched posts
			};

		// post create actions
		case postActionTypes.postCreateRequestAction:

		case postActionTypes.postCreateRequestSuccess:

		case postActionTypes.postCreateRequestFailure:

		default:
			return state;
	}
};