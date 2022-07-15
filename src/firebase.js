import * as firebase from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  projectId: process.env.REACT_APP_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
