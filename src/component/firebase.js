import firebase from "firebase";
var config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAQcr_LdngriyDG_lyMYHlsgWrSAzAif2E",
  authDomain: "gedeh-website-14265.firebaseapp.com",
  databaseURL: "https://gedeh-website-14265.firebaseio.com",
  projectId: "gedeh-website-14265",
  storageBucket: "gedeh-website-14265.appspot.com",
  messagingSenderId: "935357538817"
};
var fire = firebase.initializeApp(config);
export default fire;