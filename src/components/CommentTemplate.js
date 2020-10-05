import React from "react";

import Text from "./MyText.js";
import {View, StyleSheet} from "react-native";

const CommentTemplate = (props) => {

	return (
		<View style={styles.commentContainer}  >
			<Text style={styles.whiteOn443e3e}>Created by : {props.comment.created_by.username}</Text>
			<Text style={styles.whiteOn443e3e}>Created on : {props.comment.created_on_humanized}</Text>
			<Text style={styles.quoteStyle} >❝</Text>
			<Text>{props.comment.message}</Text>
			<Text style={styles.quoteStyle} >❞</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	whiteOn443e3e : {
		color : "white",
		backgroundColor : "#443e3e",
	},
	commentContainer : {
		marginBottom : 30,
		padding : 10,
		backgroundColor : "#d4d4d4",
	},
	quoteStyle : {
		fontSize : 20,
	},
});

export default CommentTemplate;