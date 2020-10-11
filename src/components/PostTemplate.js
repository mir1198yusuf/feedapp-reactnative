import React from "react";
import Text from "./MyText.js";
import {View, StyleSheet, Linking, Image, TouchableOpacity} from "react-native";
import {WebView} from "react-native-webview";
import {BACKEND_URLS} from "./../redux-store/commons/constants";

const PostTemplate = (props) => {

	const navigateToComments = () => {
		props.navigation.navigate("Comments", {post : props.post});
	}

	return (
		<View style={styles.postTemplate} >
			<Text style={styles.whiteOn443e3e} >Created by : {props.post.created_by.username}</Text>
			<Text style={styles.whiteOn443e3e} >Created on : {props.post.created_on_humanized}</Text>
			<Text style={styles.quoteStyle} >❝</Text>
			<Text>{props.post.message}</Text>
			<Text style={styles.quoteStyle} >❞</Text>
			<View>
				{(props.post.file) ? getFile(BACKEND_URLS.API_MEDIA_URL+props.post.file) : null}
			</View>
			<TouchableOpacity onPress={navigateToComments} >
				<Text style={{...styles.buttonStyle, ...styles.whiteOn443e3e}} >
					Comments
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const getFile = (url) => {
	if (url.toLowerCase().slice(-4)===".png" || url.toLowerCase().slice(-4)===".jpg"){
		return (
			<Image source={{uri : url}} style={styles.fileImageStyle} />
		);
	}
	else if (url.toLowerCase().slice(-4)===".mp4"){
		return (
			<WebView source={{uri : url}} 
				style={styles.fileVideoStyle}	/>
		);
	}
	else{
		return (
			
			<Text>
				Attachment : 
				<Text style={styles.linkStyle} 
					onPress={() => Linking.openURL(url)} 	>
					file
				</Text> 
			</Text>
		);
	}
}

const styles = StyleSheet.create({
	postTemplate : {
        marginBottom : 30,
		padding : 10,
		backgroundColor : "#d4d4d4",
	},
	whiteOn443e3e : {
		backgroundColor : "#443e3e",
		color : "white",
	},
	quoteStyle : {
		fontSize : 20,
	},
	linkStyle : {
		color : "#443e3e",
		textDecorationLine : "underline",
	},
	fileImageStyle : {
		width : 300,
		height : 200,
	},
	fileVideoStyle : {
		height : 200,
		backgroundColor : "black"
	},
	buttonStyle : {
		width : 100,
		padding : 10,
		textAlign : "center",
		borderRadius : 10,
		marginTop : 10,
	}
});


export default PostTemplate;