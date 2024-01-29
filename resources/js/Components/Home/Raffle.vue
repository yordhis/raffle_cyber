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

</script>

<template>
    <div class="bg-white">
        <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-15 sm:px-6 sm:py-2 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ props.raffle.eslogan }}</h2>
                <h1 class="text-6xl text-gray-400 font-bold tracking-tight text-gray-900 sm:text-6x1 ">{{ props.raffle.titulo }}</h1>
                <p class="mt-4 text-gray-500"> {{  props.raffle.descripcion  }} </p>

                <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    <div v-for="caracteristica in props.raffle.caracteristicas ">
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">{{ caracteristica.titulo }}</dt>
                            <dd class="mt-2 text-sm text-gray-500">{{ caracteristica.descripcion }}</dd>
                        </div>

                    </div>
                </dl>
            </div>
            <div class="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                <img :src="props.raffle.image"
                    alt="imagen del premio"
                    class="rounded-lg bg-gray-100 shadow-lg">
                   
                        <Link :href="route('compras.index')" 
                            class="bg-indigo-700 rounded-lg p-2  text-white text-2xl text-center">
                            Comprar tu ticket Ahora
                        </Link>
            </div>
        </div>


     
</div></template>