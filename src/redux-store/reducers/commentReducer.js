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

		case commentActionTypes.commentFetchRequestSuccess:

		case commentActionTypes.commentFetchRequestFailure:

		// comment create actions
		case commentActionTypes.commentCreateRequestAction:

		case commentActionTypes.commentCreateRequestSuccess:

		case commentActionTypes.commentCreateRequestFailure:

		default:
			return state;
	}
};