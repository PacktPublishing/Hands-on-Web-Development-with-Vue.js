<template>
  <div>
    <h1>Create new Contact</h1>
    <Form submitButtonText="Create Contact" @submit="submit" />
  </div>
</template>

<script>
import Form from "./Form";
import { mapActions } from "vuex";
import { extractDetails } from "@/lib/transformers";

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
    ...mapActions(["addContact"]),

    submit(data) {
      this.addContact({
        contact: extractDetails(data),
        router: this.$router
      });
    }
  }
};
</script>
