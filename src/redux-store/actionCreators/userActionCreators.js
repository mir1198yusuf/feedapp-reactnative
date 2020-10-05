import userActionTypes from './../actionTypes/userActionTypes';

// user login actions
export const userLoginRequestAction = (username,password) => {
	return {
		type: userActionTypes.userLoginRequestAction,
		username: username,
		password: password,
	};
};

export const userLoginRequestSuccess = (user) => {
	return {
		type: userActionTypes.userLoginRequestSuccess,
		user: user,
	};
};

export const userLoginRequestFailure = (error) => {
	return {
		type: userActionTypes.userLoginRequestFailure,
		error: error,
	};
};

//user logout actions 
export const userLogoutRequestAction = () => {
	return {
		type: userActionTypes.userLogoutRequestAction,
	};
}

export const userLogoutRequestSuccess = () => {
	return {
		type: userActionTypes.userLogoutRequestSuccess,
	};
};

export const userLogoutRequestFailure = (error) => {
	return {
		type: userActionTypes.userLogoutRequestFailure,
		error: error,
	};
};

// user check logged in actions

export const userCheckLoggedInRequestAction = () => {
	return {
		type: userActionTypes.userCheckLoggedInRequestAction,
	};
};

export const userCheckLoggedInRequestSuccess = (user) => {
	return {
		type: userActionTypes.userCheckLoggedInRequestSuccess,
		user: user,
	};
};

export const userCheckLoggedInRequestFailure = (error) => {
	return {
		type: userActionTypes.userCheckLoggedInRequestFailure,
		error: error,
	};
};