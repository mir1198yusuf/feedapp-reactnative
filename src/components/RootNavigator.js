import React from "react";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

import FeedsNavigator from "./FeedsNavigator.js";
import AccountNavigator from "./AccountNavigator.js";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const RootNavigator = (props) => {

	return (
		<NavigationContainer>
			<Tab.Navigator 
                screenOptions={
                    ({route}) => ({
                        tabBarIcon : ({focused, color, size}) => {
                            let iconName;
                            if (route.name==="Feeds")  {
                                iconName = focused ? "message" : "message-outline";
                            }
                            else if (route.name==="Account") {
                                iconName = focused ? "account" : "account-outline";
                            }
                            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                        },
                    })
                }
                tabBarOptions={{
                    activeTintColor : "#443e3e",
                    inactiveTintColor : "#443e3e",
                }}
                    >
				<Tab.Screen name="Feeds" component={FeedsNavigator} />
				<Tab.Screen name="Account" component={AccountNavigator} />
			</Tab.Navigator>
		</NavigationContainer>
	);

}

export default RootNavigator;

