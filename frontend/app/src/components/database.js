// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyKVyTtIHEFPmZgM5wI_1ea4q7TUAxClQ",
    authDomain: "abortion-policy-project.firebaseapp.com",
    databaseURL: "https://abortion-policy-project-default-rtdb.firebaseio.com",
    projectId: "abortion-policy-project",
    storageBucket: "abortion-policy-project.appspot.com",
    messagingSenderId: "798743301439",
    appId: "1:798743301439:web:de466c3ecc408244cf578a",
    measurementId: "G-H2Y1R85YSG"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);