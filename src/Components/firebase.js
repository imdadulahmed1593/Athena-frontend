//at first npm i firebase
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0wfG9bMHYu8UdYLQ-2Mno_EwUNUppU-M",
  authDomain: "athe-c26e2.firebaseapp.com",
  databaseURL: "https://athe-c26e2.firebaseio.com",
  projectId: "athe-c26e2",
  storageBucket: "athe-c26e2.appspot.com",
  messagingSenderId: "81311491907",
  appId: "1:81311491907:web:f5db8cc994b72cc7ba71f6",
  measurementId: "G-V77DHV60GN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
