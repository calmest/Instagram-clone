import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEmMmTd3aJbXhGBAVhstrjzLgwFOZID7c",
    authDomain: "instagram-clone-46ebf.firebaseapp.com",
    databaseURL: "https://instagram-clone-46ebf.firebaseio.com",
    projectId: "instagram-clone-46ebf",
    storageBucket: "instagram-clone-46ebf.appspot.com",
    messagingSenderId: "173466233186",
    appId: "1:173466233186:web:358028409bec2a55f8243b",
    measurementId: "G-3NDB87QXQK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };