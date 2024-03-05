<script setup>
const props = defineProps({
    title: { type: String, default: "Filantropía" },
    description: { type: String, default: 'Si quieres levantarte, levanta a alguien más". - Booker T. Washington' }
});


</script>

<template>
    <section class="text-gray-400 bg-neutral-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="h-1 bg-orange-500 rounded overflow-hidden mb-4">
                <div class="w-80 h-full bg-orange-500"></div>
            </div>
            <div class=" w-full mb-5">
                <h1 class="sm:text-4xl text-2xl font-bold title-font text-white lg:w-1/3 lg:mb-0 mb-2">{{ title }}</h1>
                <p class="w-80 mt-2">{{ description }}</p>
            </div>
            <div class="md:flex md:flex-wrap md:-m-2 -m-1">

                <div class="flex flex-wrap md:w-1/2">
                    <div class="md:p-2 p-1 md:w-1/2 ">
                        <img alt="gallery" class="w-full object-cover h-full object-center block"
                            src="https://dummyimage.com/500x300">
                    </div>

                    <div class="md:p-2 p-1 md:w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block"
                            src="https://dummyimage.com/501x301">
                    </div>
                    <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block"
                            src="https://dummyimage.com/600x360">
                    </div>
                </div>
                <div class="flex flex-wrap md:w-1/2">
                    <div class="md:p-2 p-1 w-full">
                        <img alt="gallery" class="w-full h-full object-cover object-center block"
                        src="https://dummyimage.com/600x360">
                    </div>
                    <div class="md:p-2 p-1 md:w-1/2 ">
                        <img alt="gallery" class="w-full object-cover h-full object-center block"
                            src="https://dummyimage.com/500x300">
                    </div>

                    <div class="md:p-2 p-1 md:w-1/2">
                        <img alt="gallery" class="w-full object-cover h-full object-center block"
                            src="https://dummyimage.com/501x301">
                    </div>
                </div>

                
            </div>
        </div>
    </section>
</template>


<style></style>