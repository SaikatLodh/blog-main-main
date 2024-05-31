// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC49CbzWc9mtFUP9rzB03hGTn_LkhpNI0",
  authDomain: "blog-53c45.firebaseapp.com",
  projectId: "blog-53c45",
  storageBucket: "blog-53c45.appspot.com",
  messagingSenderId: "225194511912",
  appId: "1:225194511912:web:03b125389829196b7f6f1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 const fireDB = getFirestore(app);
const auth = getAuth(app)
 const storage = getStorage(app);
export {  auth,fireDB,storage };