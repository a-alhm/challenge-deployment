<template lang="html">
  <div class="w-full h-screen top-0 absolute z-50 bg-gray-500/70">
    <div class="h-screen flex justify-center items-center">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script lang="js">


    export default  {
    name: 'loader',
    props: [],
    mounted () {
    },
    data () {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss">
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
