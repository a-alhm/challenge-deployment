<template lang="html">
  <div class="flex justify-between p-5 mb-1 border border-white-300">
    <div>
      <img
        :src="product.image"
        alt="Product Image"
        class="w-16 h-16 rounded mb-4"
      />
      <div>
        <h3 class="text-lg font-semibold">{{ product.title }}</h3>
        <p class="text-gray-600">
          {{ product.currency }}
          {{ formatPrice(Number(product.price - product.discount)) }}
        </p>
      </div>
    </div>
    <div class="flex flex-col items-end justify-between">
      <button
        @click="deleteFromCart(product.id)"
        type="button"
        class="w-[28px] h-[28px] shrink-0 flex items-center justify-center text-xs border border-red-500 text-red-500 rounded-full p-1"
      >
        <i class="sicon-cancel"></i>
      </button>
      <div class="flex items-center mb-4">
        <button class="px-2 py-1 bg-gray-200 rounded" @click="decreaseQuantity">
          -
        </button>
        <span class="px-5 py-1 mx-1 bg-gray-100 rounded">{{
          product.amount
        }}</span>
        <button class="px-2 py-1 bg-gray-200 rounded" @click="increaseQuantity">
          +
        </button>
      </div>
      <div>
        <p class="text-lg font-semibold">
          {{ product.currency }}
          {{
            formatPrice(
              Number(product.price - product.discount) * product.amount
            )
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { formatPrice } from '@/utils/moneyUtils'
import { ref } from 'vue'

export default  {
    name: 'cart-card',
    props: ['product', 'updateCart', 'deleteFromCart'],
    setup(props){
        const interval = ref(null)

        const updateAmount = () => {
          clearInterval(interval.value)
          interval.value = setTimeout(() => { props.updateCart(props.product) }, 800)
        }

        const increaseQuantity = () => {
          props.product.amount++
          updateAmount()
        }

        const decreaseQuantity = () => {
          props.product.amount--
          updateAmount()
        }

        return{
            ...props,
            formatPrice,
            increaseQuantity,
            decreaseQuantity
        }
    }
}
</script>

<style scoped lang="scss"></style>
