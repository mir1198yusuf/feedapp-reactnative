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

const App: () => React$Node = () => {
  
  return (
      <Provider store={store} >
      	<RootNavigator />
      </Provider>  
  );
};

export default App;
