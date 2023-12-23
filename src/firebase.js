// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWX4Q_O3CQ8WM3Fj0w8CcS77KuNY8ut8k",
  authDomain: "realtor-clone-react-65c15.firebaseapp.com",
  projectId: "realtor-clone-react-65c15",
  storageBucket: "realtor-clone-react-65c15.appspot.com",
  messagingSenderId: "367688553704",
  appId: "1:367688553704:web:dfcbfc7dd8fa5daeaee55d",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
