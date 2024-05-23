import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq8O-TxMF83qd8hrgdDEaaGSF7yJWnNgM",
  authDomain: "eva64benavidesanthony.firebaseapp.com",
  projectId: "eva64benavidesanthony",
  storageBucket: "eva64benavidesanthony.appspot.com",
  messagingSenderId: "974985957751",
  appId: "1:974985957751:web:9ac5060080c77cbcf8d172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
