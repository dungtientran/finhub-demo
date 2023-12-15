import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBbaANc45ZRsT3Cr-K18XvBsOvAHVZsKCk",
    authDomain: "finhub-subscribe.firebaseapp.com",
    projectId: "finhub-subscribe",
    storageBucket: "finhub-subscribe.appspot.com",
    messagingSenderId: "825171541634",
    appId: "1:825171541634:web:a553ab72f20f4ead697e9b",
    measurementId: "G-39JW0WBPC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;