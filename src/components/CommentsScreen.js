import React from "react";
import Text from "./MyText.js";
import {View, TouchableOpacity, ScrollView, StyleSheet,
        Alert, ActivityIndicator,} from "react-native";
import CommentTemplate from "./CommentTemplate.js";
import * as commentActionCreators from './../redux-store/actionCreators/commentActionCreators';
import store from './../redux-store';
import {connect} from 'react-redux';

const CommentsScreen = (props) => {

	const [isFetchingComments, onIsFetchingCommentsChange] = React.useState(false);
    
    let data = props.commentReducer.comments;

    React.useEffect(() => {
        let postId = props.route.params.post.id;
        store.dispatch(commentActionCreators.commentFetchRequestAction(postId));
    }, []
    );

    React.useEffect(() => {
        if (props.commentReducer.requestState) {
            onIsFetchingCommentsChange(true);
        }
        else if (!props.commentReducer.requestState) {
            onIsFetchingCommentsChange(false);
        }

        if (props.commentReducer.requestStatus==='comment fetch failed') {
            Alert.alert(
                'Error',
                'Comments fetching action failed. Refresh again',
            );
            store.dispatch(commentActionCreators.commentErrorResolveAction());
        }
        else if (props.commentReducer.requestStatus==='comment create success') {
            const postId = props.route.params.post.id;
            store.dispatch(commentActionCreators.commentFetchRequestAction(postId));
        }
    },[props.commentReducer]
    );

    const navigateToNewComment = () => {
        props.navigation.navigate("New Comment", {post: props.route.params.post});
    };

	return (
		<ScrollView style={styles.container} >
			<View>
				<TouchableOpacity onPress={navigateToNewComment} >
					<Text style={{...styles.whiteOn443e3e, ...styles.buttonStyle}} >
						New Comment
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.marginTop15} >
                {
                    isFetchingComments &&
                    <ActivityIndicator
                        animating={isFetchingComments}
                        color='#443e3e'
                        size='large'    />
                }
				{
                    (data.length>0) ? 
                    (data.map(comment => (<CommentTemplate key={comment.id} comment={comment} />))) : 
                    (<Text style={styles.textAlignCenter} >No comments created</Text>)
                }
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		marginTop : 15,
		marginRight : 10,
		marginLeft : 10,
	},
	whiteOn443e3e : {
		backgroundColor : "#443e3e",
		color : "white",
	},
	buttonStyle : {
		width : 120,
		padding : 10,
		textAlign : "center",
		borderRadius : 10,
	},
	marginTop15 : {
		marginTop : 15,
	},
	textAlignCenter : {
		textAlign : "center",
	}
});

const mapStateToProps = state => {
    const {commentReducer} = state;
    return {commentReducer};
};

export default connect (mapStateToProps) (CommentsScreen);