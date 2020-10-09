import React from "react";
import {connect} from 'react-redux';
import {View, ScrollView, TouchableOpacity, StyleSheet, RefreshControl,
        Alert, ActivityIndicator,}
        from "react-native";
import Text from "./MyText.js";
import FilterModal from "./FilterModal.js";
import PostTemplate from "./PostTemplate.js";
import store from './../redux-store';
import * as postActionCreators from './../redux-store/actionCreators/postActionCreators';

const PostsScreen = (props) => {

    const [showFilterModalState, changeFilterModalState] = React.useState(false);
    const [filterCondition, changeFilterCondition] = React.useState({keyword: "", createdBy: ""});
    const [isFetchingPosts, onIsFetchingPostsChange] = React.useState(false);

    React.useEffect(() => {
        store.dispatch(postActionCreators.postFetchRequestAction());
    }, []
    );

    React.useEffect(() => {
        if (props.postReducer.requestState) {
            onIsFetchingPostsChange(true);
        }
        else if (!props.postReducer.requestState) {
            onIsFetchingPostsChange(false);
        }

        if (props.postReducer.requestStatus==='post fetch failed') {
            Alert.alert(
                'Error',
                'Posts fetching action failed. Refresh again',
            );
        }
        else if (props.postReducer.requestStatus==='post create success') {
            store.dispatch(postActionCreators.postFetchRequestAction());
        }
    },[props.postReducer]
    );

    let data = props.postReducer.posts;
    
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
        store.dispatch(postActionCreators.postFetchRequestAction());
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
                    isFetchingPosts &&
        			<ActivityIndicator   
                        animating={isFetchingPosts}
                        color='#443e3e'
                        size='large'    />
                }
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

const mapStateToProps = state => {
    const {postReducer} = state;
    return {postReducer};
};

export default connect (mapStateToProps) (PostsScreen);