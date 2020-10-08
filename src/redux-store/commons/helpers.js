import axios from 'axios';
import RNSecureStorage from 'rn-secure-storage';

export const axiosAPICall = (method,url,data,headers) => {
	let request = {
		method: method,
		url: url,
	};
	if (data) {
		request['data'] = data;
	}
	if (headers) {
		request['headers'] = headers;
	}
	// Referer is auto-set in react.js as same website value.
	// for react-native we have to set it manually to target api:port
	request['headers'] = {
		...request['headers'],
		Referer: url
	}
	return axios.request(request)
		.then(res => res.data)
		.catch(error => {throw error});
};

export const setRNSecureStorage = (key,value) => {
	return RNSecureStorage.set(key,value,{})
		.then(res => res)
		.catch(error => {throw error});
};

export const getRNSecureStorage = (key) => {
	return RNSecureStorage.get(key)
		.then(res => res)
		.catch(error => {throw error});
};

export const removeRNSecureStorage = (key) => {
	return RNSecureStorage.remove(key)
		.then(res => res)
		.catch(error => {throw error});
};