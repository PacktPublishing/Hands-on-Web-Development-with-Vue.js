import Vue from "vue";
import Vuex from "vuex";

import Model from "@codeship/modelist";
import { collections } from "./firebase";

export const structure = {
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
    addContact({ commit }, { contact, router }) {
      collections.contacts.add(contact).then(doc => {
        commit("addContact", {
          id: doc.id,
          ...contact
        });

        router.push({
          name: "contact",
          params: {
            id: doc.id
          }
        });
      });
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
          const entry = {
            id: doc.id,
            ...doc.data()
          };
          store.state.contacts.record(entry);
        });
      });
    }
  ]
};

Vue.use(Vuex);
export default () =>
  new Vuex.Store({
    ...structure
  });
