import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/database';
import { getDatabase } from "firebase/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCJD1TagipftukAJBdo7K5GMuuKN8Eyw7Q",
  authDomain: "myfoodtracker-c19f9.firebaseapp.com",
  projectId: "myfoodtracker-c19f9",
  storageBucket: "myfoodtracker-c19f9.appspot.com",
  messagingSenderId: "383604542489",
  appId: "1:383604542489:web:2d44409f9482cb4ccd2e88"
})

export const auth = app.auth()
export const database = getDatabase(app);
export default app;
