<template>
  <nav class="flex flex-auto justify-around py-6 mx-auto bg-gray-300 font-bold">
    <div class="space-x-8 flex flex-row">
      <nuxt-link to="/" class="text-black">
        <img
          class="w-2/3 m-auto"
          src="@/assets/img/logoipsum3.svg"
          alt="_alt"
        />
      </nuxt-link>
      <nuxt-link to="/urunlistesi" class="text-stone-600"
        >Ürün Listesi</nuxt-link
      >
    </div>
    <div>
      <nuxt-link to="/sepet" class="text-white"
        ><img class="w-8" src="@/assets/img/cart-icon.png" alt="_alt"
      /></nuxt-link>
    </div>
  </nav>
</template>