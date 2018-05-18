<template>
  <div id="sidebar" class="flex-1">
    <header class="flex">
      <span class="flex-grow">
        <i class="fas fa-users"></i> Contacts {{ contacts.size }}
      </span>
      <router-link to="/">
        <button class="flex-end">+ new contact</button>
      </router-link>
    </header>

    <input type="text" class="input mt-2" placeholder="Search Name" v-model="filter">

    <List :items="contacts.all()" itemKey="name" type="contact" />
  </div>
</template>

<script>
import List from "@/components/general/List";
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",

  data() {
    return {
      filter: ""
    };
  },

  components: {
    List
  },

  computed: {
    ...mapGetters(["contacts"])
  }
};
</script>

<style scoped>

</style>
