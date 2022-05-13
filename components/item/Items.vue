<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <td>
      <img class="w-24" :src="item.src" />
    </td>
    <th
      scope="row"
      class="
        px-6
        py-4
        font-medium
        text-gray-900
        dark:text-white
        whitespace-nowrap
      "
    >
      {{ item.name }}

      <hr />

      {{ item.author }}
    </th>

    <td class="px-6 py-4">
      <button class="border rounded-lg p-1" @click="changeValue(false)">
        -
      </button>
      {{ count }}
      <button class="border rounded-lg p-1" @click="changeValue(true)">
        +
      </button>
    </td>
    <td class="px-6 py-4">{{ item.price }} TL</td>
    <td class="px-6 py-4 text-right">
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        ><button @click="addToCart">Add</button></a
      >
    </td>
  </tr>
</template>
<script>
export default {
  name: "Items",
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    changeValue(val) {
      if (val) {
        this.count++;
      } else {
        if (this.count > 1) {
          this.count--;
        }
      }
    },
    addToCart() {
      this.$store.dispatch("addToCard", { count: this.count, ...this.item });
    },
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>