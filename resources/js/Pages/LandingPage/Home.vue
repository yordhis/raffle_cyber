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

// const options = {
//   method: 'GET',
//   url: 'https://api.instagapi.com/userposts/8153156059/12',
//   headers: {
//     'Content-Type': 'aplication/json',
//     'X-InstagAPI-Key': 'dca0ce484dfa824e624e4854c7a091ac'
// }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


    // const getFilantropia = async () => {
    //     // await axios.request('https://api.instagapi.com/userposts/8153156059/12',{
    //     await axios.request('https://api.instagapi.com/userposts/8153156059/12',{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'aplication/json',
    //             'X-InstagAPI-Key': 'dca0ce484dfa824e624e4854c7a091ac',
    //         }
    //     }).then(res => console.log(res))

    // }

    // getFilantropia()


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


        <!-- filantropia -->
        <Filantropia id="filantropia="></Filantropia>
        <!-- eventos -->
        <Eventos id="eventos="></Eventos>
        <!-- Aliados -->
        <Aliados id="aliados="></Aliados>
        <!-- Pie de página -->
        <Footer 
            title="Contáctenos"
            sub-title="Por medio de nuestras redes sociales"
        ></Footer>


        




</ClientLayout></template>

<style>
html{
    scroll-behavior: smooth;
}
</style>