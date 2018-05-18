import Vue from "vue";
import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
});

export const db = firebaseApp.firestore();

export const collections = {
  contacts: db.collection("contacts")
};
