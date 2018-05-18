<template>

<div id="app" class="container">
  <Sidebar />
  <AppContent />
</div>

</template>

<script>
import AppContent from "@/components/AppContent";
import Sidebar from "@/components/Sidebar";

export default {
  name: "App",

  components: {
    AppContent,
    Sidebar
  }
};
</script>

<style lang="scss">
@import "./styles/page.scss";
</style>

