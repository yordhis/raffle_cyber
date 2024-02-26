<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';
// import { HomeIcon } from '@heroicons/vue/20/solid';
import "https://unpkg.com/flowbite@1.4.0/dist/flowbite.js";
import { ArrowPathIcon } from '@heroicons/vue/20/solid';
import AccordionVue from '@/Components/Home/Accordion.vue';
import BarraDePorcentaje from '@/Components/Partials/BarraDePorcentaje.vue';
import Slider from '@/Components/Home/Slider.vue'; 
import PrimaryButton  from "@/Components/PrimaryButton.vue";
import Footer from '@/Components/Home/Footer.vue';
import { useForm } from '@inertiajs/vue3';
import TreeButton from '@/Components/TreeButton.vue';

const props = defineProps({
    raffles:{type:Object}
});

const form = useForm({
    idRaffle: ""
});

const getComprar = (idRaffle) =>{
    form.idRaffle = idRaffle;
    form.get(route('compras.comprar', form.idRaffle));
}

</script>

<template>
    <ClientLayout title="Home" >
        <template #header >
            <template v-if="raffles[0]">
                <Slider :images="[raffles[0].file]"></Slider>
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
            
            <AccordionVue :title="raffles[0].title">
                {{ raffles[0].description }}
            </AccordionVue>
            <TreeButton
            @click="getComprar(raffles[0].id)"
            >
                COMPRAR BOLETO
                <ArrowPathIcon v-if="form.processing" class="w-10 animate-spin"/>
            </TreeButton>
        
            <BarraDePorcentaje 
                title="¡Total de boletos vendidos!"
                :limit_number="raffles[0].limit_number"
                :total_sold="raffles[0].total_sold"
                />
        </template>

        
        <Footer 
            title="Contáctenos"
            sub-title="Por medio de nuestras redes sociales"
        ></Footer>


        




</ClientLayout></template>
