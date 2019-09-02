import firebase from "firebase";
const firebaseConfig = require('./config');

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export {db};

export default firebase;
