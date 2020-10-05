import commentActionTypes from './../actionTypes/commentActionTypes';

//comment fetch actions
export const commentFetchRequestAction = (postId) => {
	return {
		type: commentActionTypes.commentFetchRequestAction,
		postId: postId,
	};
};

export const commentFetchRequestSuccess = (comments) => {
	return {
		type: commentActionTypes.commentFetchRequestSuccess,
		comments: comments,
	};
};

export const commentFetchRequestFailure = (error) => {
	return {
		type: commentActionTypes.commentFetchRequestFailure,
		error: error,
	};
};

// comment create actions 

export const commentCreateRequestAction = (postId,message) => {
	return {
		type: commentActionTypes.commentCreateRequestAction,
		postId: postId,
		message: message,
	};
};

export const commentCreateRequestSuccess = (createdComment) => {
	return {
		type: commentActionTypes.commentCreateRequestSuccess,
		comment: createdComment,
	};
};

export const commentCreateRequestFailure = (error) => {
	return {
		type: commentActionTypes.commentCreateRequestFailure,
		error: error,
	};
};

