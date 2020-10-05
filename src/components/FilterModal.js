import React from "react";

import Text from "./MyText.js";
import {View} from "react-native";
import Dialog from "react-native-dialog";

const FilterModal = (props) => {
	const [keywordInput, changeKeywordInput] = React.useState("");
	const [createdByInput, changeCreatedByInput] = React.useState("");

	const applyFilter = () => {
		props.hideFilter();
		props.changeFilter(keywordInput.trim() ,createdByInput.trim());
	}

	return (
		<View>
			<Dialog.Container visible={props.showFilter}
				onBackdropPress={props.hideFilter}	>
				<Dialog.Title>Filter Posts</Dialog.Title>
				<Dialog.Input label="Keyword" value={keywordInput} onChangeText={text => changeKeywordInput(text)} />
				<Dialog.Input label="Created by" value={createdByInput} onChangeText={text => changeCreatedByInput(text)} />
				<Dialog.Button label="Cancel" color="#443e3e" onPress={props.hideFilter} />
				<Dialog.Button label="Apply" color="#443e3e" onPress={applyFilter} />
			</Dialog.Container>
		</View>
	);
};

export default FilterModal;