import firebase from 'firebase/app';
import  'firebase/firestore';
import  'firebase/auth';

const config = {
    apiKey: "AIzaSyDg7gZuoT3X-DQT9uT43GqYH3WAcrzKvRo",
    authDomain: "e-commerce-b6374.firebaseapp.com",
    databaseURL: "https://e-commerce-b6374.firebaseio.com",
    projectId: "e-commerce-b6374",
    storageBucket: "e-commerce-b6374.appspot.com",
    messagingSenderId: "735960116450",
    appId: "1:735960116450:web:16581745684898a5f382bb"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;