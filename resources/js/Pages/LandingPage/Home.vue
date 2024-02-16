<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';
import { Link } from '@inertiajs/vue3';
// import { HomeIcon } from '@heroicons/vue/20/solid';

import  Raffle from '@/Components/Home/Raffle.vue';
import  Footer from '@/Components/Home/Footer.vue';

const props = defineProps({
    raffles:{type:Object}
});

</script>

<template>
    <ClientLayout title="Home" >
        <template #header >
            <template v-if="raffles[0]">
                <div class="flex flex-col">
                    <div class="h-100 w-100">
                        <img :src="raffles[0].file" alt="sorteo-image">
                    </div>
                    <div class="text-center font-bold box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white pt-3  text-2xl sm:text-5xl">
                        {{ raffles[0].title }}
                    </div>
                    <div class="flex flex-col box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white p-4 text-2xl">
                        <div>
                            <span class="text-orange-200">
                                <b>Descripción: </b>
                            </span>
                            {{ raffles[0].description }}
                        </div>
                        <div>
                            <span class="text-orange-200">
                                <b>Fecha del sorteo: </b>
                            </span>
                            {{ raffles[0].end_date }}
                        </div>
                        <div>
                            <span class="text-orange-200">
                                <b>Costo por boleto: </b>
                            </span>
                            {{ raffles[0].cost }}$
                        </div>
                        <div>
                            <span class="text-orange-200">
                                <b>Mínimo de compra: </b>
                            </span>
                            {{ raffles[0].minimum_purchese }}
                        </div>
                     
                        <button class="text-center ease-in duration-300 mt-3 bg-green-500 hover:bg-orange-700 shadow-lg  shadow-green-500/50 rounded-lg p-2 text-center">
                                <Link :href="route('compras.comprar', raffles[0].id)" class="text-white text-2xl">
                                        ¡COMPRAR BOLETO AHORA!
                                </Link>
                            </button>
                    </div>
    
                    <div class="w-full ">            
                        <label for="progreso" class="text-white py-5"> ¡Total de boletos vendidos! </label>
                            <div class="w-100 border rounded-2xl p-1 my-2">
                                <div class="bg-orange-500 rounded-2xl text-center text-white" :style="'width:'+  raffles[0].total_sold*100/raffles[0].limit_number  + '%;'">{{  (raffles[0].total_sold*100/raffles[0].limit_number).toFixed(2) }}%</div>
                            </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="flex flex-col justify-center ">
                    <div class="flex justify-center mt-20">
                        <img src="assets/images/no-hay-sorteo.png" 
                        class="" width="300" alt="">
                    </div>

                        <h1 class="text-2xl text-white text-center">En estos momentos no hay Sorteo disponibles, este atento a nuestras redes sociales.</h1>
                </div>
            </template>


        </template>



</ClientLayout></template>
