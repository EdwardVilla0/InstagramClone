import firebase from 'firebase';

const firebaseApp = firebase.initializedApp({
    apiKey: "AIzaSyAF-Ic33tNI-vRTNG1jAxilVASRP0OI2x0",
    authDomain: "instagram-clone-react-4daf4.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-4daf4.firebaseio.com",
    projectId: "instagram-clone-react-4daf4",
    storageBucket: "instagram-clone-react-4daf4.appspot.com",
    messagingSenderId: "307743232741",
    appId: "1:307743232741:web:2f8bfb658712cb72c3ba0c",
    measurementId: "G-9J0C3ZW0N5"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };