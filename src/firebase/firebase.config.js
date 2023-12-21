// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA14HksZEZCTmP5o9a7gWBBrzgPqkH5Jk8",
  authDomain: "task-management-c3da2.firebaseapp.com",
  projectId: "task-management-c3da2",
  storageBucket: "task-management-c3da2.appspot.com",
  messagingSenderId: "775689303596",
  appId: "1:775689303596:web:de14fbdd607e1a448b8389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;