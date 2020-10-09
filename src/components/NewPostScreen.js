import React from "react";
import Text from "./MyText.js";
import {ScrollView, View, StyleSheet, TextInput, TouchableOpacity,
		Alert, ActivityIndicator,} from "react-native";
import DocumentPicker from "react-native-document-picker";
import store from './../redux-store';
import * as postActionCreators from './../redux-store/actionCreators/postActionCreators';
import {connect} from 'react-redux';

const NewPostScreen = (props) => {

	const [messageValue, onMessageChange] = React.useState('');
	const [fileValue, onFileChange] = React.useState();
	const [isCreatingPost, onIsCreatingPostChange] = React.useState(false);

	const chooseSingleFile = async () => {
		try {
			const result = await DocumentPicker.pick({
				type : [DocumentPicker.types.allFiles],
			});
			onFileChange(result);
		} catch(err){
			Alert.alert(
				'Error',
				err.message,
			);
		}
	};

	React.useEffect(() => {
		if (props.postReducer.requestState) {
			onIsCreatingPostChange(true);
		}
		else if (!props.postReducer.requestState) {
			onIsCreatingPostChange(false);
		}

		if (props.postReducer.requestStatus==='post create success') {
			props.navigation.navigate('Posts');
		}
		else if (props.postReducer.requestStatus==='post create failed') {
			let errorMessage = '';
			if (props.postReducer.error.message) {
				errorMessage = `Message: ${props.postReducer.error.message[0]}`;
			}
			else if (props.postReducer.error.detail) {
				errorMessage = 'Post Creation failed. Login first';
			}
			else {
				errorMessage = 'Post Creation failed. Try again';
			}
			Alert.alert(
				'Error',
				errorMessage,
			);
			store.dispatch(postActionCreators.postErrorResolveAction());
		}
	},[props.postReducer]
	);

	const submitPost = () => {
		store.dispatch(postActionCreators.postCreateRequestAction(messageValue,fileValue));
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
				{
					!isCreatingPost &&
					<TouchableOpacity onPress={submitPost}>
						<Text style={{...styles.buttonStyle, ...styles.submitButton}}>
							Create Post
						</Text>
					</TouchableOpacity>
				}
				<ActivityIndicator
					animating={isCreatingPost}
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

const mapStateToProps = state => {
	const {postReducer} = state;
	return {postReducer};
};

export default connect(mapStateToProps) (NewPostScreen);