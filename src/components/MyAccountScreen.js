import React from "react";
import {connect} from 'react-redux';
import Text from "./MyText.js";
import {ScrollView, StyleSheet, View, TouchableOpacity, Alert,ActivityIndicator} from "react-native";
import store from './../redux-store';
import * as userActionCreators from './../redux-store/actionCreators/userActionCreators';

const MyAccountScreen = (props) => {

	let username = props.userReducer.USER;
	const [isLoggingOut, onIsLoggingOutChange] = React.useState(false);

	const logoutUser = () => {
		store.dispatch(userActionCreators.userLogoutRequestAction());
	};

	React.useEffect(() => {
		if (props.userReducer.requestState) {
			onIsLoggingOutChange(true);
		}
		else if (!props.userReducer.requestState) {
			onIsLoggingOutChange(false);
		}

		if (props.userReducer.requestStatus==='user logout success') {
			// don't need below stmt as account navigator auto-handles this
			//props.navigation.navigate('Login');
		}
		else if (props.userReducer.requestStatus==='user logout failed') {
			Alert.alert(
				'Error',
				'Logout action failed. Try again'
			);
		}
	}, [props.userReducer]
	);

	return (
		<ScrollView style={styles.container} >
			<View style={styles.usernameStyle} >
				<Text style={styles.usernameText} >
					{username}
				</Text>
			</View>
			<View>
				{
					!isLoggingOut && 
					<TouchableOpacity onPress={logoutUser}>
						<Text style={styles.buttonStyle}>	
							Logout
						</Text>
					</TouchableOpacity>
				}
				<ActivityIndicator
					animating={isLoggingOut}
					color='#443e3e'
					size='large'	/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container : {
		flex : 1,
		marginTop : 15,
		marginBottom : 15,
		marginLeft : 10,
		marginRight : 10,
	},
	usernameStyle : {
		marginBottom : 30,
	},
	usernameText : {
		textAlign :"center",
		color : "#443e3e",
		fontSize : 20,
		fontWeight : "bold",
	},
	buttonStyle : {
		width : 100,
		padding : 10,
		backgroundColor : "#443e3e",
		color : "white",
		textAlign : "center",
		borderRadius : 10,
	},
});

const mapStateToProps = state => {
	const {userReducer} = state;
	return {userReducer};
};

export default connect(mapStateToProps) (MyAccountScreen);