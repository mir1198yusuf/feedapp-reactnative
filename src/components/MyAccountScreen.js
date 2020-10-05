import React from "react";
import {connect} from 'react-redux';
import Text from "./MyText.js";
import {ScrollView, StyleSheet, View, TouchableOpacity} from "react-native";

const MyAccountScreen = (props) => {

	let username = props.userReducer.USER;

	const logoutUser = () => {
		console.log("logout clicked");
	};

	return (
		<ScrollView style={styles.container} >
			<View style={styles.usernameStyle} >
				<Text style={styles.usernameText} >
					{username}
				</Text>
			</View>
			<View>
				<TouchableOpacity onPress={logoutUser}>
					<Text style={styles.buttonStyle}>	
						Logout
					</Text>
				</TouchableOpacity>
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