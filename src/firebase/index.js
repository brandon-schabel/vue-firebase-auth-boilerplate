
import firebase from 'firebase';
import 'firebase/firestore'

const config = {
  projectId: process.env.VUE_APP_PROJECT_ID,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN
};

firebase.initializeApp(config);

export const db = firebase.firestore()