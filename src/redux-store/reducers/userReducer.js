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

		case userActionTypes.userLogoutRequestSuccess:

		case userActionTypes.userLogoutRequestFailure:

		// user check logged-in actions
		case userActionTypes.userCheckLoggedInRequestAction:

		case userActionTypes.userCheckLoggedInRequestSuccess:

		case userActionTypes.userCheckLoggedInRequestFailure:

		default:
			return state;
	}
};

