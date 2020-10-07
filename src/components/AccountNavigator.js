import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./LoginScreen.js";
import MyAccountScreen from "./MyAccountScreen.js";
import {connect} from 'react-redux';

const Stack = createStackNavigator();

const AccountNavigator = (props) => {
	
	if (props.userReducer.USER) {
		return (
			<Stack.Navigator headerMode="screen"
				screenOptions={{
					headerTintColor : "white",
					headerStyle : {
						backgroundColor : "#443e3e",
					},
				}}	>
				<Stack.Screen name="My Account" component={MyAccountScreen}	/>
			</Stack.Navigator>
		);
	}
	else {
		return (
			<Stack.Navigator headerMode="screen"
				screenOptions={{
					headerTintColor : "white",
					headerStyle : {
						backgroundColor : "#443e3e",
					},
				}}	>
				<Stack.Screen name="Login" component={LoginScreen}	/>
			</Stack.Navigator>
		);
	}
}

const mapStateToProps = state => {
	const {userReducer} = state;
	return {userReducer};
};

export default connect(mapStateToProps) (AccountNavigator);