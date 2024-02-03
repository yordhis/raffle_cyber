<script setup>

    defineProps({
        raffle:Object,
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
    })
</script>

<template>

       <div :class="colorText">
                <h2  class="text-3xl font-bold tracking-tight sm:text-4xl text-amber-300">
                    {{ props.raffle.eslogan }}
                
                </h2>
                <h1 class="text-6xl font-bold tracking-tight sm:text-6x1 ">{{ props.raffle.titulo }}</h1>
                <p class="mt-4"> {{  props.raffle.descripcion  }} </p>

                <dl class="mt-5 ">
                    <div v-for="caracteristica in props.raffle.caracteristicas ">
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium">{{ caracteristica.titulo }}</dt>
                            <dd class="mt-2 text-sm">{{ caracteristica.descripcion }}</dd>
                        </div>

                    </div>
                </dl>
        </div>
</template>


