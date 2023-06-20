<template lang="html">
  <div
    :class="{
      'overflow-y-hidden': [
        isLoginDialogVisible,
        isProductDetailsDialogVisible,
        isLoading,
      ].some((c) => c),
    }"
  >
    <Transition>
      <Login
        :login="login"
        :closeLoginDialog="closeLoginDialog"
        v-if="isLoginDialogVisible"
      />
    </Transition>
    <Transition>
      <ProductDetails
        :addToCart="addToCart"
        :closeProductDetailsDialog="closeProductDetailsDialog"
        :product="product"
        v-if="isProductDetailsDialogVisible"
      />
    </Transition>
    <Header :openLoginDialog="openLoginDialog" />
    <Body :openProductDetailsDialog="openProductDetailsDialog" />
    <Footer />
    <Loader v-if="isLoading" />
  </div>
</template>

<script lang="js">
  import Header from "./layout/Header.vue";
  import Body from "./layout/Body.vue";
  import Footer from "./layout/Footer.vue";
  import Login from "./forms/Login.vue";
  import ProductDetails from "./domain/ProductDetails.vue";
  import { useStore } from 'vuex'
  import { computed, onMounted, ref } from 'vue'
  import Loader from "./common/Loader.vue";

  export default  {
    name: 'app',
    props: [],
    components:{
      Header,
      Body,
      Footer,
      Login,
      ProductDetails,
      Loader
    },
    setup() {
      const store = useStore()

      const isLoginDialogVisible = ref(false);
      const isProductDetailsDialogVisible = ref(false);
      const product = ref(null);

      onMounted(async () =>  {
        await store.dispatch('getUser')
        await store.dispatch('getCartCount')
      });

      const openLoginDialog = () => {
        isLoginDialogVisible.value = true
      }
      const closeLoginDialog = () => {
        isLoginDialogVisible.value = false
      }
      const openProductDetailsDialog = (productDetails) => {
        isProductDetailsDialogVisible.value = true
        product.value = productDetails
      }
      const closeProductDetailsDialog = () =>{
        isProductDetailsDialogVisible.value = false
      }
      const login = async (user) => {
        await store.dispatch('login', user)
        await store.dispatch('getUser')
        if(store.getters.isLoggedIn) closeLoginDialog()
      }
      const addToCart = async (product, amount) => {
        await store.dispatch('addToCart', {...product, amount})
        await store.dispatch('getCartCount')
        closeProductDetailsDialog()
      }

      const isLoading = computed(() => store.getters.isLoading)

      return {
        isLoginDialogVisible,
        isProductDetailsDialogVisible,
        isLoading,
        product,
        openLoginDialog,
        closeLoginDialog,
        openProductDetailsDialog,
        closeProductDetailsDialog,
        login,
        addToCart
      }
    }
}
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
