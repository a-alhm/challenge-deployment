<template lang="html">
  <header class="w-full">
    <div class="container">
      <div class="md:py-6 py-4">
        <div
          class="flex justify-between flex-col sm:flex-row gap-4 items-center"
        >
          <!-- store logo & title -->
          <div class="flex flex-col sm:flex-row items-center gap-4 relative">
            <div
              class="block w-[80px] h-[80px] bg-gray-50 p-2 rounded-full border-4 border-secondary-50"
            >
              <router-link to="/">
                <img
                  src="https://cdn.salla.network/images/logo/logo-square.png"
                  alt="Logo"
                />
              </router-link>
            </div>
            <div class="flex flex-col">
              <h1 class="text-xl">متجر التجربة الجميلة</h1>
              <small class="text-gray-400"
                >متجرك لكل تجاربك وأفكارك الجميلة</small
              >
            </div>
          </div>
          <!-- cart and user -->
          <div class="flex items-center gap-4">
            <span v-if="isLoggedIn">{{ user.name }}</span>
            <button
              v-else
              @click="openLoginDialog"
              type="button"
              class="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary"
            >
              <i class="sicon-user"></i>
            </button>
            <div class="relative">
              <router-link to="/cart">
                <button
                  type="button"
                  class="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary"
                >
                  <i class="sicon-shopping-bag"></i>
                  <span
                    v-if="cartCount"
                    class="inline-block px-2 py-1 text-xs font-semibold leading-none text-white bg-blue-500 rounded-full absolute top-[-8px] left-[-8px]"
                    >{{ cartCount }}</span
                  >
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="js">
  import { useStore } from 'vuex'
  import { computed } from 'vue'

  export default  {
    name: 'pageHeader',
    props: ['openLoginDialog'],
    setup(props){
      const store = useStore()
      const isLoggedIn = computed(() => store.getters.isLoggedIn)
      const user = computed(() => store.getters.getUser)
      const cartCount = computed(() => store.getters.getCartCount)
      return {
        ...props,
        isLoggedIn,
        user,
        cartCount
      }
    }
}
</script>

<style scoped lang="scss">
.header {
}
</style>
