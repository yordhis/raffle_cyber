<script setup>
  
  const props = defineProps({
    title: String,
    subTitle: String,
    redes:{ type: Array, default:[
        {
            link: "https://javiierdu.com",
            image: "assets/images/instagram.png",
            name: "Instagram"
        },
        {
            link: "https://javiierdu.com",
            image: "assets/images/whatsapp.png",
            name: "WhatsApp"
        }
    ]}
  });
</script>

<template>
  
    <div class="w-full p-4 text-center bg-white border border-gray-0  shadow sm:p-8 dark:bg-orange-600 dark:border-orange-900">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{{ title }}</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-200">{{ subTitle }}</p>
        <div class="flex justify-center space-x-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <div v-for="red in redes">
                <a :href="red.link" class="w-full flex flex-inline ">
                    <img :src="red.image" class="h-10 w-10 text-white" alt="red" >
                    <div class="text-center text-white ">
                        <div class="mt-3 mx-1 font-sans text-sm font-semibold">{{ red.name }}</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
  
