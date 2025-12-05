<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';

import { ArrowPathIcon } from '@heroicons/vue/20/solid';

import Accordion from '@/Components/Home/Accordion.vue';
import Slider from '@/Components/Home/Slider.vue'; 
import Footer from '@/Components/Home/Footer.vue';
import Filantropia from '@/Components/Home/Filantropia.vue';
import Eventos from '@/Components/Home/Eventos.vue';
import Aliados from '@/Components/Home/Aliados.vue';

import BarraDePorcentaje from '@/Components/Partials/BarraDePorcentaje.vue';
import TreeButton from '@/Components/TreeButton.vue';
import { useForm } from '@inertiajs/vue3';
import axios from 'axios';

const props = defineProps({
    raffles:{type:Object}
});

const form = useForm({
    idRaffle: ""
});

const getComprar = (idRaffle) =>{
    form.idRaffle = idRaffle;
    form.get(route('compras.comprar', form.idRaffle));
};

</script>

<template>
    <ClientLayout title="Home" >
        
        <template #header >

            <template v-if="raffles[0]">
                <!-- Slider de las imagenes -->
                <Slider :images="[raffles[0].file]"></Slider>
                <!-- Boton de compra -->
                <TreeButton
                @click="getComprar(raffles[0].id)"
                >
                    COMPRAR BOLETO
                    <ArrowPathIcon v-if="form.processing" class="w-10 animate-spin"/>
                </TreeButton>

                <!-- Informacion del sorteo -->
                <Accordion :title="raffles[0].title">
                    {{ raffles[0].description }}
                </Accordion>

                <!-- Barra de porcentaje de todos los boletos vendidos -->
                <BarraDePorcentaje  
                    title="¡Total de boletos vendidos!"
                    :limit_number="raffles[0].limit_number"
                    :total_sold="raffles[0].total_sold"
                    />
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

        <!-- Aliados -->
        <Aliados id="aliados="></Aliados>

</ClientLayout></template>

<style>
html{
    scroll-behavior: smooth;
}
</style>