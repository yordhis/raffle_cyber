<script setup>

const props = defineProps({
    title: { type: String, default: "Nuestros aliados" },
    description: { type: String, default: "Tenemos la dicha de contar con un gran grupo de patrocinantes que son los siguientes:" },
        aliados: {type: Array, default: [
            {
                logo: "assets/images/suzuki.png",
                name: "King Tachira"
            },
            {
                logo: "assets/images/pepsi.png",
                name: "Pepsi"
            },
            {
                logo: "assets/images/king.png",
                name: "King Tachira"
            },
            {
                logo: "assets/images/farmamas.png",
                name: "Pepsi"
            },
            {
                logo: "assets/images/loteria-zulia.png",
                name: "King Tachira"
            },
            {
                logo: "assets/images/iphone.png",
                name: "Triplegordo"
            },
            {
                logo: "assets/images/lotopegamax.png",
                name: "Pepsi"
            },
            {
                logo: "assets/images/toyota.png",
                name: "King Tachira"
            },
            {
                logo: "assets/images/triple-chance-logo.png",
                name: "Triplegordo"
            },
            {
                logo: "assets/images/bera.png",
                name: "Pepsi"
            },
            {
                logo: "assets/images/triplegordo.png",
                name: "Triplegordo"
            }
        ]
    }

});

</script>

<template>
    <section class="text-gray-200 bg-neutral-900 body-font">

        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{{ title }}</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-neutral-500">
                    {{ description }}
                </p>
            </div>

            <div class="flex flex-wrap justify-center ">
                <div  v-for="aliado in aliados" class="lg:w-2/12 md:w-2/12 ">
                   
                        <img  alt="team"
                            class=" h-20 w-100 object-center rounded-full"
                            :src="aliado.logo">
                            
                        <!-- <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">{{ aliado.name }}</h2>
                             <p class="text-gray-600">CTO</p>
                        </div> -->
                    
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>