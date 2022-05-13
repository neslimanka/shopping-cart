<template>
  <div class="flex flex-row justify-center mt-8">
    <div>
      <div class="rounded-lg border border-amber-600 p-2 mb-20">
        <span
          class="
            flex
            justify-center
            border-lime-300
            text-yellow-700 text-xl
            font-semibold
          "
          >Sepetiniz</span
        >
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <tbody>
            <Carts v-for="item in cart" :item="item" :key="item.id" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import Carts from "@/components/cart/Carts.vue";

export default {
  name: "Cart",
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  components: {
    Carts,
  },
};
</script>