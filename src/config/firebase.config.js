// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDYCqzIN2VIkxt0XE3JCHud5aBH1YtDHP8",
	authDomain: "subasta-fe15e.firebaseapp.com",
	projectId: "subasta-fe15e",
	storageBucket: "subasta-fe15e.appspot.com",
	messagingSenderId: "1052780584040",
	appId: "1:1052780584040:web:3c140f6c94ed0f74d66fdd"
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