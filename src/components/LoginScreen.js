import React from "react";
import Text from "./MyText.js";
import {ScrollView, View, StyleSheet, TextInput, TouchableOpacity,
		ActivityIndicator, Alert,}
		from "react-native";
import * as userActionCreators from './../redux-store/actionCreators/userActionCreators';
import store from './../redux-store';
import {connect} from 'react-redux';

const LoginScreen = (props) => {

	const [usernameValue, onUsernameChange] = React.useState('');
	const [passwordValue, onPasswordChange] = React.useState('');
	const [isLoggingIn, onIsLoggingInChange] = React.useState(false);

	const submitCredentials = () => {
		let username = usernameValue ? usernameValue.trim() : '';
		let password = passwordValue;
		store.dispatch(userActionCreators.userLoginRequestAction(username,password));
	};

	React.useEffect(() => {
		if (props.userReducer.requestState===true) {
			onIsLoggingInChange(true);
		} 
		else if (props.userReducer.requestState===false) {
			onIsLoggingInChange(false);
		} 
		if (props.userReducer.requestStatus==='user login success') {
			props.navigation.navigate('Posts');
		}
		else if (props.userReducer.requestStatus==='user login failed') {
			let errorMessage = '';
			if (props.userReducer.error.username) {
				errorMessage += `Username: ${props.userReducer.error.username[0]} \n`;
			}
			if (props.userReducer.error.password) {
				errorMessage += `Password: ${props.userReducer.error.password[0]}`;
			}
			if (props.userReducer.error.non_field_errors) {
				errorMessage += props.userReducer.error.non_field_errors[0];
			}
			Alert.alert(
				'Error',
				errorMessage,
			);
		}
	},[props.userReducer]
	);

	return (
		<ScrollView style={styles.container} >
			<View style={styles.formStyle} >
				<View style={styles.formElementStyle}>
					<Text>
						Username
					</Text>
					<TextInput style={styles.textInputStyle}
						value={usernameValue}
						onChangeText={text => onUsernameChange(text)}	/>
				</View>
				<View style={styles.formElementStyle}>
					<Text>
						Password
					</Text>
					<TextInput style={styles.textInputStyle}
						secureTextEntry={true}
						value={passwordValue}
						onChangeText={text => onPasswordChange(text)}	/>
				</View>
			</View>
			<View>
				{
					!isLoggingIn && 
					<TouchableOpacity onPress={submitCredentials}>
						<Text style={styles.buttonStyle}>	
							Login
						</Text>
					</TouchableOpacity>
				}
				<ActivityIndicator 
					animating={isLoggingIn} 
					color='#443e3e'
					size='large' />
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
	formStyle : {
		borderWidth : 1,
		marginBottom : 20,
	},
	formElementStyle : {
		paddingTop : 10,
		paddingLeft : 10,
		paddingRight : 10,
		paddingBottom : 15,
		marginBottom : 15,
	},
	textInputStyle : {
		borderColor : "#443e3e",
		borderWidth : 2,
		borderRadius : 10,
		padding : 5,
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

export default connect(mapStateToProps) (LoginScreen);