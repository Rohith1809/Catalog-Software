// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXlhUeanCpxFWporveQo-HxG7yzuo8TPE",
  authDomain: "scsc1-23650.firebaseapp.com",
  projectId: "scsc1-23650",
  storageBucket: "scsc1-23650.appspot.com",
  messagingSenderId: "848457772198",
  appId: "1:848457772198:web:983d0fb35560f69c125867",
  measurementId: "G-LJ77SM2VG9"
};

export const componentStorageName = "components";
export const usersStorageName = "users";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);


