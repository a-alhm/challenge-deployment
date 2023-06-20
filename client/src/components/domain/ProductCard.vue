<template lang="html">
  <div
    class="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative"
  >
    <a href="#" class="block w-full relative mb-4">
      <img
        :src="product.image"
        class="w-full aspect-4/3 object-cover rounded-lg"
        alt="product"
      />
    </a>
    <div class="w-full flex flex-col flex-1 items-start justify-start">
      <a href="#" class="block w-full text-primary text-center">
        <h2 class="text-sm">{{ product.title }}</h2>
        <small class="text-xs text-gray-500">{{
          product.shortDescription
        }}</small>
      </a>
    </div>

    <div
      class="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2"
    >
      <span class="font-medium text-md">
        {{ product.currency }}
        {{ formatPrice(Number(product.price - product.discount)) }}</span
      >
      <span class="font-medium text-sm line-through text-gray-300"
        >{{ product.currency }} {{ formatPrice(Number(product.price)) }}</span
      >
    </div>
    <button
      v-if="isLoggedIn"
      @click="openProductDetailsDialog(product)"
      type="button"
      class="w-full bg-primary text-secondary p-2 text-md rounded-md"
    >
      إضافة للسلة
    </button>
  </div>
</template>

<script lang="js">
import { formatPrice } from '@/utils/moneyUtils'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default  {
    name: 'product-card',
    props: ['product', 'openProductDetailsDialog'],
    setup(props){
        const store = useStore()
        const isLoggedIn = computed(() => store.getters.isLoggedIn)

        return{
            ...props,
            formatPrice,
            isLoggedIn
        }
    }
}
</script>

<style scoped lang="scss"></style>
