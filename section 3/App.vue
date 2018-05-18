<template>
  <div id="app" class="container">
    <Sidebar :contacts="contacts.all()" />
    <AppContent />
  </div>
</template>

<script>
import AppContent from "@/components/AppContent";
import Sidebar from "@/components/Sidebar";

import Model from "@codeship/modelist";

export default {
  name: "App",

  components: {
    AppContent,
    Sidebar
  },

  data() {
    return {
      contacts: new Model({
        setPrimaryKey: true,

        data: [{ name: "Jane Doe" }, { name: "John Doe" }]
      })
    };
  }
};
</script>

<style lang="scss">
@import "./styles/page.scss";
</style>

