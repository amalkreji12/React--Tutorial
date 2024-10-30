import { initializeApp } from 'firebase/app';

import { getFirestore,getDocs,collection } from 'firebase/firestore'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApc7U5wgNu__1nE1Xcwg3Mdxxn0yuSfYw",
    authDomain: "fir-4129b.firebaseapp.com",
    projectId: "fir-4129b",
    storageBucket: "fir-4129b.appspot.com",
    messagingSenderId: "333165018687",
    appId: "1:333165018687:web:5e1c2e4f3409cffe50828a",
    measurementId: "G-WKYGVSNVP7"
};

const Firebase = initializeApp(firebaseConfig);
const db = getFirestore(Firebase); // Uncomment if using Firestore

export { Firebase, db }; 