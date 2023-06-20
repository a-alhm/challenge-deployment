<template lang="html">
  <swiper-container
    :slides-per-view="1"
    :centered-slides="true"
    :pagination="true"
    :centeredSlides="true"
    :centeredSlidesBounds="true"
    @progress="onProgress"
    @slidechange="onSlideChange"
  >
    <swiper-slide
      lazy="true"
      v-for="image in [
        'images/main-slider/01.png',
        'images/main-slider/02.png',
        'images/main-slider/03.png',
      ]"
    >
      <div class="w-full bg-gray-100 rounded-lg mb-8">
        <img
          :src="image"
          class="md:w-[50%] sm:w-[30%] m-auto aspect-video rounded-lg"
          alt=""
        />
      </div>
    </swiper-slide>
  </swiper-container>
</template>

<script lang="js">
import { register } from 'swiper/element/bundle';

register();

    export default  {
    name: 'slider',
    props: [],
    setup() {
      const onProgress = (e) => {
      };

      const onSlideChange = (e) => {
      }

      return {
        onProgress,
        onSlideChange,
      };
    },
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

<style lang="scss"></style>
