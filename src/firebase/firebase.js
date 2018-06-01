import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyAAAfffC3F26XWfoTr9-d92GRDpyrQNACw",
    authDomain: "react-chat-da21a.firebaseapp.com",
    databaseURL: "https://react-chat-da21a.firebaseio.com",
    projectId: "react-chat-da21a",
    storageBucket: "react-chat-da21a.appspot.com",
    messagingSenderId: "115507154657"

};

const devConfig = {
    apiKey: "AIzaSyAAAfffC3F26XWfoTr9-d92GRDpyrQNACw",
    authDomain: "react-chat-da21a.firebaseapp.com",
    databaseURL: "https://react-chat-da21a.firebaseio.com",
    projectId: "react-chat-da21a",
    storageBucket: "react-chat-da21a.appspot.com",
    messagingSenderId: "115507154657"

};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};