import React from "react";

import {View, ScrollView, TouchableOpacity, StyleSheet, RefreshControl} from "react-native";
import Text from "./MyText.js";
import FilterModal from "./FilterModal.js";
import PostTemplate from "./PostTemplate.js";

const PostsScreen = (props) => {

    const [showFilterModalState, changeFilterModalState] = React.useState(false);
    const [filterCondition, changeFilterCondition] = React.useState({keyword: "", createdBy: ""});

	let data = [
    {
        "created_by": {
            "email": "",
            "id": 2,
            "username": "userdemo"
        },
        "created_on": "2020-07-14T12:23:37.995320+05:30",
        "created_on_humanized": "a minute ago",
        "file": "/media/SampleVideo_1280x720_1mb.mp4",
        "id": 10,
        "message": "video post"
    },
    {
        "created_by": {
            "email": "",
            "id": 2,
            "username": "userdemo"
        },
        "created_on": "2020-07-02T15:15:00.948653+05:30",
        "created_on_humanized": "1 week, 4 days ago",
        "file": "/media/runthis.txt",
        "id": 9,
        "message": "this is the post message"
    },
    {
        "created_by": {
            "email": "",
            "id": 2,
            "username": "userdemo"
        },
        "created_on": "2020-06-20T19:41:16.000292+05:30",
        "created_on_humanized": "3 weeks, 2 days ago",
        "file": "/media/annual_yyp1F1p.jpg",
        "id": 8,
        "message": "asdf"
    },
    {
        "created_by": {
            "email": "",
            "id": 2,
            "username": "userdemo"
        },
        "created_on": "2020-06-20T19:41:13.077974+05:30",
        "created_on_humanized": "3 weeks, 2 days ago",
        "file": "/media/annual_cEIPHx2.jpg",
        "id": 7,
        "message": "asdf"
    },
    {
        "created_by": {
            "email": "",
            "id": 2,
            "username": "userdemo"
        },
        "created_on": "2020-06-20T19:41:10.698424+05:30",
        "created_on_humanized": "3 weeks, 2 days ago",
        "file": "/media/annual.jpg",
        "id": 6,
        "message": "asdf"
    },
    {
        "created_by": {
            "email": "",
            "id": 2,
            "username": "userdemo"
        },
        "created_on": "2020-06-19T01:26:28.044978+05:30",
        "created_on_humanized": "3 weeks, 4 days ago",
        "file": null,
        "id": 5,
        "message": "fifth post"
    },
    {
        "created_by": {
            "email": "",
            "id": 2,
            "username": "userdemo"
        },
        "created_on": "2020-06-19T01:26:13.178066+05:30",
        "created_on_humanized": "3 weeks, 4 days ago",
        "file": null,
        "id": 4,
        "message": "fourth\npost"
    },
    {
        "created_by": {
            "email": "",
            "id": 2,
            "username": "userdemo"
        },
        "created_on": "2020-06-18T13:04:32.429234+05:30",
        "created_on_humanized": "3 weeks, 4 days ago",
        "file": null,
        "id": 3,
        "message": "third post"
    },
    {
        "created_by": {
            "email": "mir1198yusuf@gmail.com",
            "id": 1,
            "username": "mir1198yusuf1"
        },
        "created_on": "2020-06-18T12:57:40.470161+05:30",
        "created_on_humanized": "3 weeks, 4 days ago",
        "file": "/media/download.jpeg",
        "id": 2,
        "message": "second post with image"
    },
    {
        "created_by": {
            "email": "mir1198yusuf@gmail.com",
            "id": 1,
            "username": "mir1198yusuf1"
        },
        "created_on": "2020-06-18T12:57:13.274334+05:30",
        "created_on_humanized": "3 weeks, 4 days ago",
        "file": null,
        "id": 1,
        "message": "first post"
    }
];
    
    const navigateToNewPost = () => {
        props.navigation.navigate("New Post");
    }

    const openFilterModal = () => {
        changeFilterModalState(true);
    };

    const closeFilterModal = () => {
        changeFilterModalState(false);
    };

    const onFilterConditionChange = (keyword,createdBy) => {
    	changeFilterCondition({
    		keyword: keyword,
    		createdBy: createdBy,
    	});
    }

    const onFeedRefresh = () => {
    	onFilterConditionChange("", "");
    };

    data = data.filter(post => {
    	return (post.message.includes(filterCondition.keyword)
    		&& post.created_by.username.includes(filterCondition.createdBy));
    });

	return (
		<ScrollView style={styles.container}
			refreshControl={
				<RefreshControl refreshing={false} onRefresh={onFeedRefresh} />
			}
			 >
            <View style={styles.buttonContainer} >
                <TouchableOpacity onPress={navigateToNewPost}>
                    <Text style={styles.buttonStyle} >
                        New Post
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openFilterModal} >
                    <Text style={styles.buttonStyle} >
                        Filter
                    </Text>
                </TouchableOpacity>
            </View>
            <FilterModal showFilter={showFilterModalState} 
            	hideFilter={closeFilterModal}
            	changeFilter={onFilterConditionChange}
                />
            <View style={styles.marginTop15} >
    			{
    				(data.length>0) ? 
	    			(data.map(post => (<PostTemplate key={post.id} post={post} navigation={props.navigation} />))) : 
	    			(<Text style={styles.textAlignCenter} >No posts created</Text>)
	    		}
            </View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
        marginTop : 15,
        marginBottom : 15,
        marginLeft : 10,
        marginRight : 10,
	},
    buttonStyle : {
        width : 100,
        padding : 10,
        backgroundColor : "#443e3e",
        color : "white",
        textAlign : "center",
        borderRadius : 10,
    },
    buttonContainer : {
        flexDirection : "row",
        justifyContent : "space-evenly",
    },
    marginTop15 : {
        marginTop : 15,
    },
    textAlignCenter : {
        textAlign : "center",
    },
});	

export default PostsScreen;