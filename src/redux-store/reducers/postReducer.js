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
			return {
				...state,
				requestState: true,
				requestStatus: 'post create start',
				error: null,
			};

		case postActionTypes.postCreateRequestSuccess:
			return {
				...state,
				requestState: false,
				requestStatus: 'post create success',
				error: null,
				// posts[] we will fetch again, and not invalidating previous posts
			};

		case postActionTypes.postCreateRequestFailure:
			return {
				...state,
				requestState: false,
				requestStatus: 'post create failed',
				error: action.error,
			};

		case postActionTypes.postErrorResolveAction:
			return {
				...state,
				requestStatus: 'post error resolved',
				error: null,
			};

		default:
			return state;
	}
};