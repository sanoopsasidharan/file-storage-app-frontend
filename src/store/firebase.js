// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAR2vplANVXsdF-Q4QHRZTFq-9-L4D7EfY",
  authDomain: "pdfstorageapp-5dcf4.firebaseapp.com",
  projectId: "pdfstorageapp-5dcf4",
  storageBucket: "pdfstorageapp-5dcf4.appspot.com",
  messagingSenderId: "252961097384",
  appId: "1:252961097384:web:9dba0096629f999d93a49d",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
