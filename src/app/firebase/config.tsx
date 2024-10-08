import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCD1BIeZ5Mrkrq3IQzB387DfQG2YMdh_7Q",
  authDomain: "fashe-cb067.firebaseapp.com",
  projectId: "fashe-cb067",
  storageBucket: "fashe-cb067.appspot.com",
  messagingSenderId: "603740934197",
  appId: "1:603740934197:web:34b63275d0289ff2e2217c",
  measurementId: "G-V06GVFNSN6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);


