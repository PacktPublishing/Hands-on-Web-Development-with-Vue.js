<template>
  <div>
    <h1>Show Contact</h1>
    {{ contact }}
    <!-- <Form submitButtonText="TEXT" @submit="submit" /> -->
  </div>
</template>

<script>
import Form from "./Form";

export default {
  name: "Show",

  components: {
    Form
  },

  data() {
    return {
      userId: this.$route.params.id
    };
  },

  computed: {
    contact() {
      return this.$store.state.contacts.find(this.userId).fold();
    }
  },

  methods: {
    submit(data) {
      console.log(data);
    }
  },

  watch: {
    $route: function() {
      this.userId = this.$route.params.id;
    }
  }
};
</script>
