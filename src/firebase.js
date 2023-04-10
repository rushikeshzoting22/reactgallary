import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
   apiKey: "AIzaSyDF6mS0WvJKkzSaGA2DkdrA9z2s3lFcX34",
  authDomain: "image-upload-5e77c.firebaseapp.com",
  projectId: "image-upload-5e77c",
  storageBucket: "image-upload-5e77c.appspot.com",
  messagingSenderId: "612533799200",
  appId: "1:612533799200:web:301543a0682b9fe8cc2f45",
  measurementId: "G-KKGXBBQ6LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
