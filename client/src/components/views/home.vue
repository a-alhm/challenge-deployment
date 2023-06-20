<template lang="html">
  <main class="w-full main flex-auto min-h-[68.8vh]">
    <div class="container">
      <div class="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
        <!-- slider -->
        <Slider />
        <div
          class="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4"
        >
          <!-- product-entry -->
          <ProductCard
            :openProductDetailsDialog="openProductDetailsDialog"
            v-for="product in products"
            :product="product"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="js">

import Slider from "../common/Slider.vue"
import { useStore } from 'vuex'
import { ref, onMounted } from 'vue'
import ProductCard from "../domain/ProductCard.vue"

  export default  {
    name: 'home',
    props: ["openProductDetailsDialog"],
    components:{
      Slider,
      ProductCard
    },
    setup(props){
      const store = useStore()
      let products = ref(null)
      onMounted(async() =>  {products.value = await store.dispatch('getProducts')});


      return {
        ...props,
        products
      }
    }
}
</script>

<style scoped lang="scss">
.home {
}
</style>
