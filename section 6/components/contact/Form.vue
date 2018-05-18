<template>
  <form @submit.prevent="submit">
    <input v-model="name" type="text" class="input" placeholder="Contact Name" required="true" id="name">

    <div class="flex">
      <div class="flex-1 pr-2">
        <div class="input-block">
          <label for="details">Details about first contact:</label>
          <input type="text" class="input" v-model="contactDetails">
        </div>
        <div class="input-block">
          <label class="input-label">Notes:</label>
          <textarea v-model="contactNotes" rows="10" class="textarea"></textarea>
        </div>

        <div class="input-block">
          <label class="input-label">Relationship Quality</label>
          <div class="flex">
            <label class="flex-1 option bg-green-light" for="good">
              <input type="radio" id="good" value="good" v-model="quality">
              <span>Good</span>
            </label>
            <label class="flex-1 option bg-orange-light" for="okay">
              <input type="radio" id="okay" value="okay" v-model="quality">
              <span>Okay</span>
            </label>
            <label class="flex-1 option bg-red-lightest" for="barely">
              <input type="radio" id="barely" value="barely" v-model="quality">
              <span>Barely</span>
            </label>
          </div>
        </div>
      </div>

      <div class="flex-1 pl-2">
        <template v-for="(src, key) in contact.main">
          <div class="input-block" :key="key">
            <label :for="`contact.${key}`">{{ src.placeholder }}</label>
            <input
              type="text"
              v-model="src.value"
              class="input"
              :id="`contact.${key}`"
              :placeholder="src.placeholder"
            >
            <a :href="links[key]" target="_blank">{{ src.value }}</a>
          </div>
        </template>

        <div class="input-block">
          <label for="tags" class="input-label">Custom Tags <em>Seperate by comma</em></label>
          <input type="text" class="input" v-model="availableTags">
        </div>

        <div class="tags">
          <span class="tag" v-for="(tag, index) in availableTags" :key="index">
            {{ tag }}
          </span>
        </div>

      </div>
    </div>

    <button type="submit" class="btn">{{ submitButtonText }}</button>
  </form>
</template>

<script>
import { isEmpty } from "lodash";
import { mergeDetails } from "@/lib/transformers";

export default {
  name: "Form",

  props: {
    submitButtonText: String,
    details: {
      default: function() {
        return {};
      }
    }
  },

  data() {
    return {
      name: "",
      contact: {
        main: {
          mail: {
            value: "",
            placeholder: "Email Address"
          },
          phone: {
            value: "",
            placeholder: "Phone Number"
          },
          twitter: {
            value: "",
            placeholder: "Twitter Handle"
          }
        }
      },
      tags: "",
      contactDetails: "",
      contactNotes: "",
      quality: ""
    };
  },

  computed: {
    links() {
      return {
        mail: `mailto:${this.contact.main.mail.value}`,
        phone: `tel:${this.contact.main.phone.value}`,
        twitter: `https://twitter.com/${this.contact.main.twitter.value}`
      };
    },

    availableTags: {
      get() {
        return this.tags.length == 0 ? [] : this.tags.split(","); // hello => ['hello']
      },
      set(value) {
        this.tags = value;
      }
    }
  },

  methods: {
    submit() {
      this.$emit("submit", this.$data);
    }
  },

  watch: {
    details: {
      immediate: true,
      handler(val) {
        if (isEmpty(val)) return;
        mergeDetails(this.$data, this.details);
      }
    }
  }
};
</script>

<style scoped>

</style>
