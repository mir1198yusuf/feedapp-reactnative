# Sample Feed app built in React Native

I created this project while learning React Native.

## Background

- This project contains the front-end code in React Native.
- The back-end for this project is built in Django. 
- Earlier I built the React.js webapp using the same Django back-end.
- You can see the code for React.js and Django REST apis here : [code](https://bit.ly/feed_django_reactjs_code)
- The React.js webapp live demo [site](https://bit.ly/feed_django_reactjs_live)


*This sample application contains limited features and therefore can be updated to include new ones.*


## Brief description of project:

- It is basically like a mini-feeds app like LinkedIn or Facebook where user can create post and other users can see, comment. 

## Functionalities included in project:

1. User can create post including text and file of any type.
2. On Feed page user can see posts of all other users with details like created by, created on, post, comments.
3. If file in post is video/image it will be displayed along with the post. For other types, just the url link will be displayed for downloading it.
4. User can filter the post using two filters : keyword in post or created_by user id
5. User can comment on other posts.
6. Login/Logout feature with API token stored using rn-secure-storage library.


## Tools and technologies :

- React Native - React framework for making native mobile applications
- axios - Promise-based JavaScript library for calling API endpoints 
- react-navigation - NPM package for routing in React Native
- react-native-dialog - NPM package for creating dialogs in React Native
- react-native-document-picker - NPM package for file selection 
- react-native-webview - NPM package for webview in React Native
- redux - Redux for managing state in app
- react-redux - React library for Redux
- redux-saga - Using Saga for async operations in Redux
- rn-secure-storage - Secure storage for React Native
- Sublime Text Editor - for writing code
- Git - for version control

