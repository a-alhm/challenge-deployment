<template lang="html">
  <main class="w-full main flex-auto min-h-[68.8vh]">
    <div class="container sm:w-[90%] md:w-[70%]">
      <h2 class="text-lg font-semibold pb-2">المشتريات</h2>
      <div v-if="cart?.length" class="flex flex-col">
        <CartCard
          :updateCart="updateCart"
          :deleteFromCart="deleteFromCart"
          v-for="product in cart"
          :product="product"
        />
      </div>
      <h1 v-else class="text-4xl font-bold">السلة فارغة</h1>
    </div>
  </main>
</template>

<script lang="js">
import CartCard from '@/components/domain/CartCard.vue'
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'

  export default  {
    name: 'cart',
    components:{
      CartCard
    },
    props: [],
    setup(props){
      const store = useStore()
      let cart = ref(null)
      onMounted(async() =>  {cart.value = await store.dispatch('getCart')});

      const updateCart = async (product) => {
        await store.dispatch('updateCart', {...product})
      }
      const deleteFromCart = async (productId) => {
        await store.dispatch('deleteFromCart', productId)
        await store.dispatch('getCartCount')
        cart.value = await store.dispatch('getCart')
      }

      return {
        ...props,
        updateCart,
        deleteFromCart,
        cart
      }
    }
}
</script>

<style scoped lang="scss">
.cart {
}
</style>
