// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgpx9H_kSzJVN8JZQCxoe2QjuIXttVzK4",
  authDomain: "movieticket-195de.firebaseapp.com",
  projectId: "movieticket-195de",
  storageBucket: "movieticket-195de.appspot.com",
  messagingSenderId: "1042206563725",
  appId: "1:1042206563725:web:d90685bbacfd1f841771c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)