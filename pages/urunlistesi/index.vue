<template>
  <Item :items="items" />
</template>
<script>
import Item from "@/components/item/Item.vue";
export default {
  components: {
    Item,
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
    },
  },
};
</script>