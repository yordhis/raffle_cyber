<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    raffle: {
        type: Object,
        default: {
            eslogan: "¡Concursa y Gana!",
            titulo: "Ferrari IT",
            descripcion: "Es un carro Italiano del año 2024 con cero KM total mente nuevo para tus paseos.",
            image:"/assets/images/ferrari_new.png",
            caracteristicas: [
                {
                    titulo: "Caracteristica 1",
                    descripcion: "Descripcion de la Caracteristica 1"
                },
                {
                    titulo: "Caracteristica 2",
                    descripcion: "Descripcion de la Caracteristica 2"
                },
                {
                    titulo: "Caracteristica 3",
                    descripcion: "Descripcion de la Caracteristica 3"
                },
                {
                    titulo: "Caracteristica 3",
                    descripcion: "Descripcion de la Caracteristica 3"
                },
               
            ]
        }
    }
});

let colorText = "text-white"

</script>

<template>
    <div class="">
        <div class="mx-auto text-center items-center gap-x-12 gap-y-16 px-4 my-3">
            <h1 class="text-white text-6xl">{{  props.raffle.eslogan }}</h1>
            <h1 class="text-white text-6xl">{{  props.raffle.titulo }}</h1>
        </div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-15 sm:px-6 sm:py-2 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
         
            <div class="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 ">
                
                <div class="bg-gray-100 rounded-full ">
                    <img :src="props.raffle.image"
                        alt="imagen del premio"
                        class="rounded-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300" >

                </div>
                    
                    
            </div>

            <div class="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 ">
                
                <div class="static bg-stone-900 text-center p-10 m-3 rounded-2xl shadow-2xl shadow-orange-500/50 ">

                        <img src="/assets/images/ticket.png" width="150"
                            alt="imagen del premio"
                            class="invisible md:visible scale-75 absolute top-10 right-10 " >
                    
                        <img src="/assets/images/ticket.png" width="150"
                            alt="imagen del premio"
                            class="invisible md:visible scale-75 absolute top-10 left-10 " >

                        <p class="text-xl  text-white ">¡Aprovecha de comprar tus boletos antes de que se acaben!</p>


                        <div class="w-100 border rounded-2xl p-1 my-4">
                            <div class="bg-orange-500 rounded-2xl " style="width: 100%;">100%</div>
                        </div>
                        
                        <button class="text-center ease-in duration-300">
                            <Link :href="route('compras.index')" 
                                    class="bg-green-500 hover:bg-orange-700 shadow-lg  shadow-green-500/50 rounded-lg p-2  text-white text-2xl text-center ">
                                    ¡PARTICIPA AHORA!
                            </Link>
                        </button>
                    </div>
            </div>
        </div>


     
</div></template>