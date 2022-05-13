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
    </th>

    <td class="px-6 py-4">
      <button class="border rounded-lg p-1" @click="changeValue(false)">
        -
      </button>
      {{ item.count }}
      <button class="border rounded-lg p-1" @click="changeValue(true)">
        +
      </button>
    </td>
    <td class="px-6 py-4">{{ item.totalPrice }} TL</td>
    <td class="px-6 py-4 text-right">
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        ><button @click="removeItem">Remove</button></a
      >
    </td>
  </tr>
</template>
<script>
export default {
  name: "Carts",
  methods: {
    changeValue(val) {
      if (val) {
        //this.item.count++
        this.$store.dispatch("changeItemCount", {
          type: val,
          item: this.item,
        });
      } else {
        if (this.item.count >= 0) {
          this.$store.dispatch("changeItemCount", {
            type: val,
            item: this.item,
          });
        }
      }
    },
    removeItem() {
      this.$store.dispatch("removeFromCard", this.item.id);
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