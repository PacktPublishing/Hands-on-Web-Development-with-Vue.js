<template>
  <div id="sidebar" class="flex-1">
    Render Contacts
    <List :items="contacts.all()" itemKey="name" type="contact" />
  </div>
</template>

<script>
import List from "@/components/general/List";

import Model from "@codeship/modelist";

export default {
  name: "Sidebar",

  components: {
    List
  },

  data() {
    return {
      contacts: new Model({
        data: [{ name: "Jane Doe", id: 1 }, { name: "John Doe", id: 2 }]
      })
    };
  }
};
</script>

<style scoped>

</style>
