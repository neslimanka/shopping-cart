<template>
  <Cart :cart="cart" />
</template>
<script>
import Cart from "@/components/cart/Cart.vue";
export default {
  components: {
    Cart,
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>