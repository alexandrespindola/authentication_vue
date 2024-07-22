// Imports the necessary modules and initializes the Firebase app.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// Amplify
import { Amplify } from 'aws-amplify'
import awsExports from './aws-exports'
Amplify.configure(awsExports)

// Firebase
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
  };

// Initialize Firebase
initializeApp(firebaseConfig);

// Create the app
createApp(App).use(router).mount('#app')
