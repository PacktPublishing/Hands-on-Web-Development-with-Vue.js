<template>
  <ul>
    <Item
      v-if="any"
      v-for="item in items"
      :key="item.id"
      :class="type"
    >
      {{ item[itemKey] }}
    </Item>
  </ul>
</template>

<script>
export default {
  name: "List",

  components: {
    Item: {
      name: "Item",
      render(createElement) {
        return createElement("li", this.$slots.default);
      }
    }
  },

  props: {
    items: {
      type: Array,
      default: () => []
    },

    itemKey: {
      type: String,
      default: () => "value"
    },

    type: {
      type: String,
      default: () => "item"
    }
  },

  computed: {
    any() {
      return this.items.length > 0;
    }
  }
};
</script>

<style scoped>

</style>
