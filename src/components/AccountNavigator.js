import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import LoginScreen from "./LoginScreen.js";
import MyAccountScreen from "./MyAccountScreen.js";

const Stack = createStackNavigator();

const AccountNavigator = (props) => {
	
	return (
		<Stack.Navigator headerMode="screen"
			screenOptions={{
				headerTintColor : "white",
				headerStyle : {
					backgroundColor : "#443e3e",
				},
			}}	>
			<Stack.Screen name="Login" component={LoginScreen}	/>
			<Stack.Screen name="My Account" component={MyAccountScreen}	/>
		</Stack.Navigator>
	);
}

export default AccountNavigator;