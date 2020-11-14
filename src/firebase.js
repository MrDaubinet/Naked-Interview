import firebase from 'firebase/app';// rollup bundle issue with ESM import
// import 'firebase/auth';
import 'firebase/storage'; 
import 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyD9cM6oiXNZlfmGu2IYLpa14jngNSWh7Yk",
  authDomain: "naked-insurance-interview.firebaseapp.com",
  databaseURL: "https://naked-insurance-interview.firebaseio.com",
  projectId: "naked-insurance-interview",
  storageBucket: "naked-insurance-interview.appspot.com",
  messagingSenderId: "1005709981194",
  appId: "1:1005709981194:web:1fc9c9c2cd3b567c5c51f3"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// I think i can take this out
// export const auth = firebase.auth();
// Create a root reference
export const storageRef = firebase.storage().ref();
export const storage_test = firebase.storage()
// Create a db reference
const db = firebase.firestore();
export const dataRef = db.collection('food');
