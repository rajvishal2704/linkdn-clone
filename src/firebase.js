import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCoDgqQX0DlwgKwMx7Fv9YObD3QPXXl3SM",
    authDomain: "linkedin-clone-824bc.firebaseapp.com",
    projectId: "linkedin-clone-824bc",
    storageBucket: "linkedin-clone-824bc.appspot.com",
    messagingSenderId: "140837415148",
    appId: "1:140837415148:web:0aa54e9dbfd685e7a05dc9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export {auth, provider, storage};
export default db;