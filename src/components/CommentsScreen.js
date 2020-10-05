import React from "react";

import Text from "./MyText.js";
import {View, TouchableOpacity, ScrollView, StyleSheet} from "react-native";

import CommentTemplate from "./CommentTemplate.js";

const CommentsScreen = (props) => {

	let data = [
    {
        "created_by": {
            "email": "mir1198yusuf@gmail.com",
            "id": 1,
            "username": "mir1198yusuf1"
        },
        "created_on": "2020-06-18T13:02:09.492529+05:30",
        "created_on_humanized": "1 month ago",
        "id": 1,
        "message": "first comment",
        "post": {
            "created_by": {
                "email": "mir1198yusuf@gmail.com",
                "id": 1,
                "username": "mir1198yusuf1"
            },
            "created_on": "2020-06-18T12:57:40.470161+05:30",
            "created_on_humanized": "1 month ago",
            "file": "/media/download.jpeg",
            "id": 2,
            "message": "second post with image"
        }
    },
    {
        "created_by": {
            "email": "mir1198yusuf@gmail.com",
            "id": 1,
            "username": "mir1198yusuf1"
        },
        "created_on": "2020-06-18T13:02:09.492529+05:30",
        "created_on_humanized": "1 month ago",
        "id": 2,
        "message": "first comment",
        "post": {
            "created_by": {
                "email": "mir1198yusuf@gmail.com",
                "id": 1,
                "username": "mir1198yusuf1"
            },
            "created_on": "2020-06-18T12:57:40.470161+05:30",
            "created_on_humanized": "1 month ago",
            "file": "/media/download.jpeg",
            "id": 2,
            "message": "second post with image"
        }
    },
    {
        "created_by": {
            "email": "mir1198yusuf@gmail.com",
            "id": 1,
            "username": "mir1198yusuf1"
        },
        "created_on": "2020-06-18T13:02:09.492529+05:30",
        "created_on_humanized": "1 month ago",
        "id": 3,
        "message": "first comment",
        "post": {
            "created_by": {
                "email": "mir1198yusuf@gmail.com",
                "id": 1,
                "username": "mir1198yusuf1"
            },
            "created_on": "2020-06-18T12:57:40.470161+05:30",
            "created_on_humanized": "1 month ago",
            "file": "/media/download.jpeg",
            "id": 2,
            "message": "second post with image"
        }
    },
    {
        "created_by": {
            "email": "mir1198yusuf@gmail.com",
            "id": 1,
            "username": "mir1198yusuf1"
        },
        "created_on": "2020-06-18T13:02:09.492529+05:30",
        "created_on_humanized": "1 month ago",
        "id": 4,
        "message": "first comment",
        "post": {
            "created_by": {
                "email": "mir1198yusuf@gmail.com",
                "id": 1,
                "username": "mir1198yusuf1"
            },
            "created_on": "2020-06-18T12:57:40.470161+05:30",
            "created_on_humanized": "1 month ago",
            "file": "/media/download.jpeg",
            "id": 2,
            "message": "second post with image"
        }
    },
    {
        "created_by": {
            "email": "mir1198yusuf@gmail.com",
            "id": 1,
            "username": "mir1198yusuf1"
        },
        "created_on": "2020-06-18T13:02:09.492529+05:30",
        "created_on_humanized": "1 month ago",
        "id": 5,
        "message": "first comment",
        "post": {
            "created_by": {
                "email": "mir1198yusuf@gmail.com",
                "id": 1,
                "username": "mir1198yusuf1"
            },
            "created_on": "2020-06-18T12:57:40.470161+05:30",
            "created_on_humanized": "1 month ago",
            "file": "/media/download.jpeg",
            "id": 2,
            "message": "second post with image"
        }
    }
];

    const navigateToNewComment = () => {
        props.navigation.navigate("New Comment");
    };

	return (
		<ScrollView style={styles.container} >
            {console.log(props.route.params.post.id)}
			<View>
				<TouchableOpacity onPress={navigateToNewComment} >
					<Text style={{...styles.whiteOn443e3e, ...styles.buttonStyle}} >
						New Comment
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.marginTop15} >
				{(data.length>0) ? (data.map(comment => (<CommentTemplate key={comment.id} comment={comment} />))) : (<Text style={styles.textAlignCenter} >No comments created</Text>)}
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

export default CommentsScreen;