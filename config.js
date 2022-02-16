import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBLhykelaOLnmXboRn8XSOWdxzhKEiQxKU",
  authDomain: "c-71-5ea2a.firebaseapp.com",
  projectId: "c-71-5ea2a",
  storageBucket: "c-71-5ea2a.appspot.com",
  messagingSenderId: "778717151554",
  appId: "1:778717151554:web:c8db08790240b628b9c8db"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
