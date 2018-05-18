import {
  firebase
} from "@firebase/app";
import "@firebase/firestore";

// Define the connections for our own app
const firebaseApp = firebase.initializeApp({
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "..."
});

// Prepare the connection to the firestore db
export const db = firebaseApp.firestore();

// Unified way of accessing collections
export const collections = {
  contacts: db.collection("contacts")
};
