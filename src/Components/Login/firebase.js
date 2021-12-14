import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB_vqoBoqbuFKNZaGVLooAFn7bRjLSejGQ",
    authDomain: "otp-demo-ae2fc.firebaseapp.com",
    projectId: "otp-demo-ae2fc",
    storageBucket: "otp-demo-ae2fc.appspot.com",
    messagingSenderId: "776684607276",
    appId: "1:776684607276:web:4f23282c5d7c6cb956fe89"
    // eslint-disable-next-line no-template-curly-in-string
    // measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const authentication = getAuth(app);

export {authentication};

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB_vqoBoqbuFKNZaGVLooAFn7bRjLSejGQ",
//   authDomain: "otp-demo-ae2fc.firebaseapp.com",
//   projectId: "otp-demo-ae2fc",
//   storageBucket: "otp-demo-ae2fc.appspot.com",
//   messagingSenderId: "776684607276",
//   appId: "1:776684607276:web:4f23282c5d7c6cb956fe89"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);