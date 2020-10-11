import commentActionTypes from './../actionTypes/commentActionTypes';

const defaultState = {
	requestState: false,
	requestStatus: null,
	error: null,
	postId: null,
	comments: [],
};

export default commentReducer = (state=defaultState, action) => {
	switch (action.type) {
		// comment fetch actions
		case commentActionTypes.commentFetchRequestAction:
			let newState = {
				...state,
				requestState: true,
				requestStatus: 'comment fetch start',
				error: null,
				postId: action.postId,
			};
			// invalidate previous comments only if fetching for new post
			if (state.postId!==action.postId) {
				newState = {
					...newState,
					comments: [],
				};
			}
			return newState;

		case commentActionTypes.commentFetchRequestSuccess:
			return {
				...state,
				requestState: false,
				requestStatus: 'comment fetch success',
				error: null,
				comments: action.comments,
				//same postId
			};

		case commentActionTypes.commentFetchRequestFailure:
			return {
				...state,
				requestState: false,
				requestStatus: 'comment fetch failed',
				error: action.error,
				//postId: null, not invalidating postId
				//comments: [],  not invalidating previous comments
			};

		// comment create actions
		case commentActionTypes.commentCreateRequestAction:
			return {
				...state,
				requestState: true,
				requestStatus: 'comment create start',
				error: null,
				postId: action.postId,
			};

		case commentActionTypes.commentCreateRequestSuccess:
			return {
				...state,
				requestState: false,
				requestStatus: 'comment create success',
				error: null,
				//same postId as in state
				//comments: [] we will fetch again so not invalidating
			};

		case commentActionTypes.commentCreateRequestFailure:
			return {
				...state,
				requestState: false,
				requestStatus: 'comment create failed',
				error: action.error,
			};

		case commentActionTypes.commentErrorResolveAction:
			return {
				...state,
				requestStatus: 'comment error resolved',
				error: null,
			};

		default:
			return state;
	}
};