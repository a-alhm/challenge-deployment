<template lang="html">
  <div
    class="w-screen h-screen absolute top-0 end-0 bottom-0 left-0 bg-gray-500/70 py-8 px-4 z-50 flex items-start justify-center overflow-y-auto overflow-x-hidden"
  >
    <div
      class="w-full sm:w-[50%] max-w-[700px] h-auto p-4 bg-white rounded-lg shadow-xl"
    >
      <!-- modal header -->
      <div class="flex items-center justify-between mb-8 gap-4">
        <div class="flex-1">
          <h2 class="text-lg">{{ product.title }}</h2>
          <span class="text-xs text-gray-500">{{
            product.shortDescription
          }}</span>
        </div>
        <button
          @click="closeProductDetailsDialog"
          type="button"
          class="w-[28px] h-[28px] shrink-0 flex items-center justify-center text-xs border border-red-500 text-red-500 rounded-full p-1"
        >
          <i class="sicon-cancel"></i>
        </button>
      </div>
      <div class="flex flex-col w-full">
        <article class="text-sm text-darker-300 leading-[1.8] mb-4">
          <img
            :src="product.image"
            class="mb-4 aspect-4/3 object-cover rounded-lg"
            alt="product img"
          />
          <p>
            {{ product.description }}
          </p>
        </article>
        <div class="flex items-center justify-center gap-4">
          <div
            class="flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg"
          >
            <button
              @click="increaseAmount"
              class="shrink-0 px-2 text-md text-gray-500"
            >
              +
            </button>
            <input
              type="number"
              :value="amount"
              class="w-[50px] flex-1 text-center appearance-none"
            />
            <button
              @click="decreaseAmount"
              class="shrink-0 px-2 text-md text-gray-500"
            >
              -
            </button>
          </div>
          <button
            @click="addToCart(product, amount)"
            type="button"
            class="w-full h-[42px] bg-primary text-secondary flex-1 p-2 text-md rounded-md"
          >
            إضافة للسلة
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  import { ref } from 'vue';

  export default  {
    name: 'product-details',
    props: ['closeProductDetailsDialog', 'product', 'addToCart'],
    setup(props){
      const amount = ref(1)
      const increaseAmount = () => {
        amount.value++
      }
      const decreaseAmount = () => {
        amount.value--
      }
      return {
        ...props,
        amount,
        increaseAmount,
        decreaseAmount
      }
    }
}
</script>

<style scoped lang="scss">
.product-details {
}
</style>
