<template>
  <div class="flex flex-row justify-center mt-8 mb-24">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <Items v-for="item in items" :item="item" :key="item.id" />
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Items from "@/components/item/Items.vue";

export default {
  components: {
    Items,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

