import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "auth.krowdee.com",
  projectId: "krowdee-20",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "select_account",
  display: "popup",
});

export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
facebookAuthProvider.setCustomParameters({
  prompt: "select_account",
  display: "popup",
});

export default firebase;
