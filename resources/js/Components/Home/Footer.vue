<script setup>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'


  const props = defineProps({
    title: String,
    subTitle: String,
    redes:{ type: Array, default:[
        {
            link: "https://Instagram.javiierdu.com",
            icono: faInstagram,
            name: "Instagram"
        },
        {
            link: "https://WhatsApp.javiierdu.com",
            icono: faWhatsapp,
            name: "WhatsApp"
        }
    ]}
  });
</script>

<template>


  <div class="bg-orange-500 bg-opacity-95">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <span class="ml-3 text-xl font-serif font-bold">JAVIIERDU</span>
    </a>

        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        
        <!-- redes -->
        <a v-for="red in redes" :href="red.link" class="ml-3 text-gray-300">
            <FontAwesomeIcon :icon="red.icono" class="text-2xl"/>
        </a>
        
      </span>
      <p class="text-xs text-gray-300 sm:ml-6 sm:mt-0 mt-4">
        © 2024 Javiirdu.com —
        <a href="https://cyberstaffstore.com/" class="text-gray-300 ml-1" target="_blank" rel="noopener noreferrer"> 
            Desarrollado por cyberstaffstore.com</a>
      </p>
     
    </div>
  </div>



    <!-- <div class="w-full  p-4 text-center bg-orange-600 border border-gray-0  shadow sm:p-8 dark:bg-orange-600 dark:border-orange-900">
        <h5 class="mb-2 text-3xl font-bold text-white dark:text-white">{{ title }}</h5>
        <p class="mb-5 text-base text-gray-800 sm:text-lg">{{ subTitle }}</p>
        <div class="flex justify-center space-x-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <div v-for="red in redes">
                <a :href="red.link" class="w-full flex flex-inline ">

                    imagen -->
                    <!-- <img :src="red.image" class="h-5 w-5 text-white" alt="red" > -->
                    <!-- nombre de la red social -->
                    <!-- <div class="mt-3 mx-1 font-sans text-sm font-semibold">{{ red.name }}</div> -->
                    

                <!-- </a>
            </div>
        </div>
    </div> -->
</template>
  
