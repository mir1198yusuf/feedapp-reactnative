import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import PostsScreen from "./PostsScreen.js";
import CommentsScreen from "./CommentsScreen.js";
import NewPostScreen from "./NewPostScreen.js";
import NewCommentScreen from "./NewCommentScreen.js";

const Stack = createStackNavigator();

const FeedsNavigator = (props) => {
	
	return (
		<Stack.Navigator headerMode="screen"
			screenOptions={{
				headerTintColor : "white",
				headerStyle : {
					backgroundColor : "#443e3e",
				}
			}}
			initialRouteName="Posts"	>
			<Stack.Screen name="Posts" component={PostsScreen} />
			<Stack.Screen name="Comments" component={CommentsScreen} />
			<Stack.Screen name="New Post" component={NewPostScreen} />
			<Stack.Screen name="New Comment" component={NewCommentScreen} />
		</Stack.Navigator>
	);
}

export default FeedsNavigator;