<template>
  <div id="sidebar" class="flex-1">
    Render Contacts
    <List :items="contacts" itemKey="name" type="contact" />
  </div>
</template>

<script>
import List from "@/components/general/List";

export default {
  name: "Sidebar",

  props: {
    contacts: Array
  },

  components: {
    List
  }
};
</script>

<style scoped>

</style>
