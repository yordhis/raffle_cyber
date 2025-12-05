<!-- component -->
<!-- <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> -->

<script setup>
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/20/solid';
import { ref } from 'vue';

    let currentIndex = ref(1);
    const props = defineProps({
        activeCounter: { type: Boolean, default:false},
        timeout: {type: Number, default:3000},
        images:{type:String, default:[
            "assets/images/no-image.png",
            "assets/images/no-hay-sorteo.png",
            "assets/images/level-up.jpg",
        ]},
    });

    const previous = () =>{
        if (currentIndex.value > 1) {
          currentIndex.value = currentIndex.value - 1;
        }else{
            currentIndex.value = props.images.length;
        }
   
        console.log(currentIndex.value);
    }
    const forward = () =>{
        if (currentIndex.value < props.images.length) {
          currentIndex.value = currentIndex.value + 1;
        }else{
            currentIndex.value = 1
        }
        console.log(currentIndex.value);
    }

  
</script>

<template>
    <section class="mt-2 object-cover object-center block">
        <div class="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-gray-100 shadow-lg" >
            <div v-if="activeCounter" class="absolute right-5 top-5 z-10 rounded-full px-2 text-center text-sm text-white">
                <span v-text="currentIndex"></span>/<span v-text="images.length"></span>
            </div>
    
            <button @click="previous" class="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full ">
                <ChevronLeftIcon class="text-gray-100 hover:text-gray-300 "></ChevronLeftIcon>
            </button>
    
            <button @click="forward" class="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full ">
                <ChevronRightIcon class="text-gray-100 hover:text-gray-300 "></ChevronRightIcon>
                <!-- <i class="fas fa-chevron-right text-2xl font-bold text-gray-500"></i> -->
            </button>
    
         
                <template v-for="(image, index) in images">
                    <div v-show="currentIndex == index + 1" >
                        <img :src="image" alt="image" class="object-cover object-center block animate-fade-right animate-once animate-ease-in animate-normal rounded-sm w-full h-100" id=""/>
                    </div>
                </template>
          
        </div>
    </section>
</template>

<style>
  #caja-image{
    height: 450px;
  }
</style>