import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0MG9_Qn3v69vNaxBVpQO_NuZZFT80jz8",
  authDomain: "autentica-usuario-3095a.firebaseapp.com",
  projectId: "autentica-usuario-3095a",
  storageBucket: "autentica-usuario-3095a.appspot.com",
  messagingSenderId: "314872332058",
  appId: "1:314872332058:web:f639c595490dd1ab70b6a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);