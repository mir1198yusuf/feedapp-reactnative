import postActionTypes from './../actionTypes/postActionTypes';

// post fetch actions
export const postFetchRequestAction = () => {
	return {
		type: postActionTypes.postFetchRequestAction,
	};
};

export const postFetchRequestSuccess = (posts) => {
	return {
		type: postActionTypes.postFetchRequestSuccess,
		posts: posts,
	};
};

export const postFetchRequestFailure = (error) => {
	return {
		type: postActionTypes.postFetchRequestFailure,
		error: error,
	};
};

//post create actions
export const postCreateRequestAction = (message, file) => {
	return {
		type: postActionTypes.postCreateRequestAction,
		message: message,
		file: file,
	};
};

export const postCreateRequestSuccess = (createdPost) => {
	return {
		type: postActionTypes.postCreateRequestSuccess,
		post: createdPost,
	};
};

export const postCreateRequestFailure = (error) => {
	return {
		type: postActionTypes.postCreateRequestFailure,
		error: error,
	};
};

export const postErrorResolveAction = () => {
	return {
		type: postActionTypes.postErrorResolveAction,
	};
}