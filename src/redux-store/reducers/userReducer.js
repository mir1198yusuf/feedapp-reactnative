import userActionTypes from './../actionTypes/userActionTypes';

const defaultState = {
	requestState: false,
	requestStatus: null,
	error: null,
	USER: null,
};

export default userReducer = (state=defaultState, action) => {
	switch (action.type) {
		//user login actions
		case userActionTypes.userLoginRequestAction: 
			return {
				...state,
				requestState: true,
				requestStatus: 'user login start',
				error: null,
				USER: null,
			};

		case userActionTypes.userLoginRequestSuccess:
			return {
				...state,
				requestState: false,
				requestStatus: 'user login success',
				error: null,
				USER: action.user,
			};

		case userActionTypes.userLoginRequestFailure:
			return {
				...state,
				requestState: false,
				requestStatus: 'user login failed',
				error: action.error,
				USER: null,
			};

		// user logout actions
		case userActionTypes.userLogoutRequestAction:
			return {
				...state,
				requestState: true,
				requestStatus: 'user logout start',
				error: null,
			};

		case userActionTypes.userLogoutRequestSuccess:
			return {
				...state,
				requestState: false,
				requestStatus: 'user logout success',
				error: null,
				USER: null,
			};

		case userActionTypes.userLogoutRequestFailure:
			return {
				...state,
				requestState: false,
				requestStatus: 'user logout failed',
				error: action.error,
			};

		// user check logged-in actions
		case userActionTypes.userCheckLoggedInRequestAction:
			return {
				...state,
				requestState: true,
				requestStatus: 'user check logged-in start',
				error: null,
				USER: null,
			};

		case userActionTypes.userCheckLoggedInRequestSuccess:
			return {
				...state,
				requestState: false,
				requestStatus: 'user check logged-in success',
				error: null,
				USER: action.user,
			};

		case userActionTypes.userCheckLoggedInRequestFailure:
			return {
				...state,
				requestState: false,
				requestStatus: 'user check logged-in failed',
				error: action.error,
				USER: null,
			};

		default:
			return state;
	}
};

