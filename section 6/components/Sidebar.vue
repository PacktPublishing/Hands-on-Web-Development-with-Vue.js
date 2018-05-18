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

    <List :items="filteredList" itemKey="name" type="contact" />
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
    ...mapGetters(["contacts"]),

    filteredList() {
      const filter = c => {
        return c.name.toLowerCase().includes(this.filter.toLowerCase());
      };

      if (this.filter.trim().length > 0) {
        return this.contacts.all().filter(filter);
      }

      return this.contacts.all();
    }
  }
};
</script>

<style scoped>

</style>
