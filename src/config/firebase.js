import firebase from "firebase";
import 'firebase/auth'
const firebaseConfig = require('./config');



class Firebase {
    constructor() {
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        this.auth = firebaseApp.auth();
        this.db =  firebaseApp.firestore();
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email,password);
    }

    logout() {
        return this.auth.signOut();
    }

    async register(name, user, password) {
        await this.auth.createUserWithEmailAndPassword(user, password)
        return this.auth.currentUser.updateProfile( {
            displayName : name,
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName;
    }

    getCurrentUserUID() {
        return this.auth.currentUser && this.auth.currentUser.uid;
    }
    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }
}
export default new Firebase();
