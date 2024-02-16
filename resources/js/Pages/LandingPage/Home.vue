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
            <div v-for="raffle in raffles" :key="raffle.id" class="flex flex-col">
                <div class="">
                    <img :src="raffle.file" alt="">
                </div>
                <div class="text-center font-bold box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white pt-3 text-5xl">
                    {{ raffle.title }}
                </div>
                <div class="flex flex-col box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white p-4 text-2xl">
                    <div>
                        <span class="text-orange-200">
                            <b>Descripción: </b>
                        </span>
                        {{ raffle.description }}
                    </div>
                    <div>
                        <span class="text-orange-200">
                            <b>Fecha del sorteo: </b>
                        </span>
                        {{ raffle.end_date }}
                    </div>
                    <div>
                        <span class="text-orange-200">
                            <b>Costo por boleto: </b>
                        </span>
                        {{ raffle.cost }}$
                    </div>
                    <div>
                        <span class="text-orange-200">
                            <b>Mínimo de compra: </b>
                        </span>
                        {{ raffle.minimum_purchese }}
                    </div>
                 
                    <button class="text-center ease-in duration-300 mt-3 bg-green-500 hover:bg-orange-700 shadow-lg  shadow-green-500/50 rounded-lg p-2 text-center">
                            <Link :href="route('compras.comprar')" class="text-white text-2xl">
                                    ¡COMPRAR BOLETO AHORA!
                            </Link>
                        </button>
                </div>

                <div class="w-full ">            
                    <label for="progreso" class="text-white py-5"> ¡Total de voletos vendidos! </label>
                        <div class="w-100 border rounded-2xl p-1 my-2">
                            <div class="bg-orange-500 rounded-2xl text-center text-white" :style="'width:'+  raffle.total_sold*100/raffle.limit_number  + '%;'">{{  (raffle.total_sold*100/raffle.limit_number).toFixed(2) }}%</div>
                        </div>
                </div>
            </div>
        </template>



</ClientLayout></template>
