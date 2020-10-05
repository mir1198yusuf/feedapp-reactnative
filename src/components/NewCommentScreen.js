import React from "react";

import Text from "./MyText.js";
import {ScrollView, TouchableOpacity, StyleSheet, View, TextInput} from "react-native";

const NewCommentScreen = (props) => {

	const [messageValue, onMessageChange] = React.useState();

	const submitComment = () => {
		console.log(messageValue);
	};

	return (
		<ScrollView style={styles.container} >
			<View style={styles.formStyle}>
				<View style={styles.formElementStyle}>
					<Text>
						Message : 
					</Text>
					<TextInput style={styles.textInputStyle}
						value={messageValue}
						placeholder="enter comment message here"
						multiline={true}
						onChangeText={text => onMessageChange(text)}	/>
				</View>
			</View>
			<View>
				<TouchableOpacity onPress={submitComment}>
					<Text style={styles.buttonStyle}>	
						Create Comment
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
	buttonStyle : {
		width : 150,
		padding : 10,
		backgroundColor : "#443e3e",
		color : "white",
		textAlign : "center",
		borderRadius : 10,
	},
	textInputStyle : {
		borderColor : "#443e3e",
		borderWidth : 2,
		borderRadius : 10,
		padding : 10,
	},
});

export default NewCommentScreen;