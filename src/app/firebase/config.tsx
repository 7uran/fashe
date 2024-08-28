// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD1BIeZ5Mrkrq3IQzB387DfQG2YMdh_7Q",
  authDomain: "fashe-cb067.firebaseapp.com",
  projectId: "fashe-cb067",
  storageBucket: "fashe-cb067.appspot.com",
  messagingSenderId: "603740934197",
  appId: "1:603740934197:web:34b63275d0289ff2e2217c",
  measurementId: "G-V06GVFNSN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);