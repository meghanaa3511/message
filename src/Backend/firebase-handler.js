import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
 

// TODO: Add SDKs for Firebase products that you want to use
 

// https://firebase.google.com/docs/web/setup#available-libraries
 
 

// Your web app's Firebase configuration
 

const firebaseConfig = {
 

  apiKey: "AIzaSyCNet6aeXTaVdrwNpfQCuQe07cQChQlIVA",
 

  authDomain: "full-stack-example-fb56b.firebaseapp.com",
 

  databaseURL: "https://full-stack-example-fb56b-default-rtdb.asia-southeast1.firebasedatabase.app",
 

  projectId: "full-stack-example-fb56b",
 

  storageBucket: "full-stack-example-fb56b.appspot.com",
 

  messagingSenderId: "860885258446",
 

  appId: "1:860885258446:web:5751fceb7e795cde27009f"
 

};
 
 

// Initialize Firebase
 

const app = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(app);