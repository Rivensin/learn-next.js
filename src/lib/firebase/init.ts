// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjCesNqavYTDo3_RE0s-iEql16I4kgt3c",
  authDomain: "nextjsapp-aaede.firebaseapp.com",
  projectId: "nextjsapp-aaede",
  storageBucket: "nextjsapp-aaede.firebasestorage.app",
  messagingSenderId: "446586132709",
  appId: "1:446586132709:web:fb26ce023dbb0a6595dc0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app