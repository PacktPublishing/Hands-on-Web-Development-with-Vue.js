<template>
  <div>
    <h1>Create new Contact</h1>
    <Form submitButtonText="Create Contact" @submit="submit" />
  </div>
</template>

<script>
import Form from "./Form";

export default {
  name: "New",

  components: {
    Form
  },

  data() {
    return {};
  },

  computed: {},

  methods: {
    submit(data) {
      console.log(data);
    }
  }
};
</script>
