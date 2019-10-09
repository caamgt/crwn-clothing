import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkygRqu3WuvlixgXss_VKzIYw_0xh0I-U",
    authDomain: "crwn-db-a571d.firebaseapp.com",
    databaseURL: "https://crwn-db-a571d.firebaseio.com",
    projectId: "crwn-db-a571d",
    storageBucket: "",
    messagingSenderId: "354485861773",
    appId: "1:354485861773:web:ab7ef2f0211447b0d111c4",
    measurementId: "G-YVVVJX9ZFD"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;