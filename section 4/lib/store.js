import Vue from "vue";
import Vuex from "vuex";

import Model from "@codeship/modelist";
import { collections } from "./firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: new Model({})
  },

  mutations: {
    addContact(state, contact) {
      state.contacts.record(contact);
    },

    updateContact(state, contact) {
      state.contacts.update(contact.id, contact);
    }
  },

  actions: {
    addContact({ commit }, contact) {
      collections.contacts.add(contact).then(doc =>
        commit("addContact", {
          id: doc.id,
          ...contact
        })
      );
    },

    updateContact({ commit }, contact) {
      collections.contacts
        .doc(contact.id)
        .set(contact)
        .then(() => {
          commit("updateContact", contact);
        });
    }
  },

  getters: {
    contacts: s => s.contacts
  },

  plugins: [
    store => {
      collections.contacts.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          store.state.contacts.record(doc.data());
        });
      });
    }
  ]
});
