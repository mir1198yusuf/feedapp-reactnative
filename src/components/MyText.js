import React from "react";

import {Text} from "react-native";

const MyText = (props) => {
	return (
		<Text {...props} style={[{fontFamily : "monospace", fontSize : 14, padding : 5}, props.style]} >
			{props.children}
		</Text>
	);
}

export default MyText;