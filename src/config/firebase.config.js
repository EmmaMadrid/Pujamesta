// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDOgtdKWtFRybJc9Wq0QY1tTUIVeMpJNDk",
	authDomain: "subasta-8e8df.firebaseapp.com",
	projectId: "subasta-8e8df",
	storageBucket: "subasta-8e8df.appspot.com",
	messagingSenderId: "988328122412",
	appId: "1:988328122412:web:63de95d1291ec1f5075989"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Storage
export const storage = getStorage(app);

// Firestore
export const db = getFirestore(app);
export const itemsDB = collection(db, 'items');
export const usersDB = collection(db, 'users');