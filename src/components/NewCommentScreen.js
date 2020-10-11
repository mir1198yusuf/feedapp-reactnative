import React from "react";
import Text from "./MyText.js";
import {ScrollView, TouchableOpacity, StyleSheet, View, TextInput,
		Alert, ActivityIndicator,} from "react-native";
import {connect} from 'react-redux';
import store from './../redux-store';
import * as commentActionCreators from './../redux-store/actionCreators/commentActionCreators';

const NewCommentScreen = (props) => {

	const [messageValue, onMessageChange] = React.useState();
	const [isCreatingComment, onIsCreatingCommentChange] = React.useState(false);

	React.useEffect(() => {
		if (props.commentReducer.requestState) {
			onIsCreatingCommentChange(true);
		}
		else if (!props.commentReducer.requestState) {
			onIsCreatingCommentChange(false);
		}

		if (props.commentReducer.requestStatus==='comment create success') {
			props.navigation.navigate('Comments', {post: props.route.params.post});
		}
		else if (props.commentReducer.requestStatus==='comment create failed') {
			let errorMessage = '';
			if (props.commentReducer.error.message) {
				errorMessage = `Message: ${props.commentReducer.error.message[0]}`;
			}
			else if (props.commentReducer.error.detail) {
				errorMessage = 'Comment Creation failed. Login first';
			}
			else {
				errorMessage = 'Comment Creation failed. Try again';
			}
			Alert.alert(
				'Error',
				errorMessage,
			);
			store.dispatch(commentActionCreators.commentErrorResolveAction());
		}

	},[props.commentReducer]
	);

	const submitComment = () => {
		const postId = props.route.params.post.id;
		store.dispatch(commentActionCreators.commentCreateRequestAction(postId,messageValue.trim()));
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
				{
					!isCreatingComment &&
					<TouchableOpacity onPress={submitComment}>
						<Text style={styles.buttonStyle}>	
							Create Comment
						</Text>
					</TouchableOpacity>
				}
				<ActivityIndicator 
					animating={isCreatingComment}
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

const mapStateToProps = state => {
	const {commentReducer} = state;
	return {commentReducer};
};

export default connect(mapStateToProps) (NewCommentScreen);