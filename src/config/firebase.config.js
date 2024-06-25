// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDici8LccB_ZdnUVGLVNJI1j4Wi4Nwojpk",
	authDomain: "auction-84942.firebaseapp.com",
	projectId: "auction-84942",
	storageBucket: "auction-84942.appspot.com",
	messagingSenderId: "193834765872",
	appId: "1:193834765872:web:cccf190be3b51e1c9b67f5"
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