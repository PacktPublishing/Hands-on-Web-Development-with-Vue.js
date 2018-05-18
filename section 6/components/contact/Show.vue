<template>
  <div>
    <h1>Show Contact</h1>
    <Form submitButtonText="Update Contact" :details="contact" @submit="submit" />
  </div>
</template>

<script>
import Form from "./Form";
import { mapActions } from "vuex";
import { extractDetails } from "@/lib/transformers";

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
    ...mapActions(["updateContact"]),

    submit(data) {
      const contact = {
        id: this.userId,
        ...extractDetails(data)
      };
      this.updateContact(contact);
    }
  },

  watch: {
    $route: function() {
      this.userId = this.$route.params.id;
    }
  }
};
</script>
