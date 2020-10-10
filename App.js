/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {Provider} from 'react-redux';
import RootNavigator from "./src/components/RootNavigator.js";
import store from './src/redux-store';
import * as userActionCreators from './src/redux-store/actionCreators/userActionCreators';

const App: () => React$Node = () => {
  
	React.useEffect(() => {
		store.dispatch(userActionCreators.userCheckLoggedInRequestAction());		
	},[]
	);

  	return (
    	<Provider store={store} >
      		<RootNavigator />
      	</Provider>  
  	);
};

export default App;
