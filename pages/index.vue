<template>
  <div class="flex flex-row">
    <div class="w-1/2">
      <Item :items="items" />
    </div>
    <div class="flex w-1/3">
      <div
        class="bg-red-100 w-1/2 h-8 mt-8 border rounded-lg"
        v-if="cart.length == 0"
      >
        <p class="flex justify-center">Sepetinizde ürün bulunmamaktadır!!</p>
      </div>
      <div v-if="cart.length >= 1">
        <Cart :cart="cart" />
        <div class="mt-5">
          <span
            class="
              flex
              justify-end
              border-lime-300
              text-yellow-700 text-xl
              font-normal
            "
          >
            Toplam: {{ totalPrice }} TL
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/item/Item.vue";
import Cart from "@/components/cart/Cart.vue";
export default {
  components: {
    Item,
    Cart,
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
    },
    cart() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },
};
</script>
