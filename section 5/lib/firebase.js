import { firebase } from "@firebase/app";
import "@firebase/firestore";

// Define the connections for our own app
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYAe7kTixAKCHwNrIPDZQhO7xRtZQiL2w",
  authDomain: "vuecrm-abda7.firebaseapp.com",
  databaseURL: "https://vuecrm-abda7.firebaseio.com",
  projectId: "vuecrm-abda7",
  storageBucket: "vuecrm-abda7.appspot.com",
  messagingSenderId: "396881427814"
});

// Prepare the connection to the firestore db
export const db = firebaseApp.firestore();

// Unified way of accessing collections
export const collections = {
  contacts: db.collection("contacts")
};
