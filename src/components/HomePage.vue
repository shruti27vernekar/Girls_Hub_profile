<template>
  <div>
    <HeaderPage />
    <div class=" bg-gray-900 h-80 flex justify-evenly">
      <div class="py-30 pl-20">
        <h2 class="text-5xl text-white py-6">Engage with our xGirls</h2>
        <p class="text-2xl text-violet-800 py-0 w-1/2">
          Unlock your favorite adult model videos and photos
        </p>
        <button class="bg-pink-600 text-black h-10 pt-2 px-3 rounded-2xl py-3 my-4">
          Show models
        </button>
      </div>
      <div class="flex items-center">
        <img src="../assets/Red Kitty.png" class="w-40" />
      </div>
    </div>
  
<div v-for="index in 3" :key="index">
    <div class=" bg-gray-900 flex -m-4 py-10 px-60">
      
      <div v-for="product in products" :key="product.title" class="relative" >
        <div class=" rounded-lg overflow-hidden  ">
          <img v-bind:src="product.src" class=" lg:h-80 md:h-40 px-5 " />
        </div>
        <div class="absolute  bottom-0  border-black-500 lg:h-20 md:h-10  px-10 text-jestify text-white">
          <h2 >{{ product.name }}</h2>
          <h4>{{ product.content }}</h4>
        </div>
      </div>
      </div>
    </div>
    <ReviewData />
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from './Header.vue'
import ReviewData from './Review.vue'
import FooterPage from './Footer.vue'


export default {
  name: "HomePage",
  components: {
     HeaderPage,
     ReviewData,
     FooterPage
  },
  props: ["products"],

  data() {
    return {};
  },
};
</script>