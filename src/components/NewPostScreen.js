import React from "react";

import Text from "./MyText.js";
import {ScrollView, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";

import DocumentPicker from "react-native-document-picker";

const NewPostScreen = (props) => {

	const [messageValue, onMessageChange] = React.useState();
	const [fileValue, onFileChange] = React.useState();

	const chooseSingleFile = async () => {
		try {
			const result = await DocumentPicker.pick({
				type : [DocumentPicker.types.allFiles],
			});
			onFileChange(result);
		} catch(err){
			alert(err.message);
		}
	};

	const submitPost = () => {
		/*let form_data = new FormData();
		form_data.append("message", messageValue);
		if (fileValue){
			form_data.append("file", fileValue, fileValue.name);
		}
		console.log(form_data);*/
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.formStyle}>
				<View style={styles.formElementStyle}>
					<Text>
						Message :
					</Text>
					<TextInput style={styles.textInputStyle}
						value={messageValue}
						placeholder="enter post message here"
						multiline={true}
						onChangeText={text => onMessageChange(text)}	/>
				</View>
				<View style={styles.formElementStyle}>
					<Text>
						File :
					</Text>
					<TouchableOpacity onPress={chooseSingleFile}>
						<Text style={styles.buttonStyle}>
							Choose File
						</Text>
					</TouchableOpacity>
					<Text>
						Selected file : {(fileValue) ? (fileValue.name) : "Null"}
					</Text>
				</View>
			</View>
			<View>
				<TouchableOpacity onPress={submitPost}>
					<Text style={{...styles.buttonStyle, ...styles.submitButton}}>
						Create Post
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
	textInputStyle : {
		borderColor : "#443e3e",
		borderWidth : 2,
		borderRadius : 10,
		padding : 10,
	},
	formElementStyle : {
		paddingTop : 10,
		paddingLeft : 10,
		paddingRight : 10,
		paddingBottom : 15,
		marginBottom : 15,
	},
	formStyle : {
		borderWidth : 1,
		marginBottom : 20,
	},
	submitButton : {
		width : 120,
	},
	buttonStyle : {
		width : 200,
		padding : 10,
		backgroundColor : "#443e3e",
        color : "white",
        textAlign : "center",
        borderRadius : 10,
	},
});

export default NewPostScreen;