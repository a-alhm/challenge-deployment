<template lang="html">
  <div>
    <Transition>
      <router-view
        :openProductDetailsDialog="openProductDetailsDialog"
      ></router-view>
    </Transition>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'pageBody',
    props: ['openProductDetailsDialog'],
    setup(props){
      return props
    }
}
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
