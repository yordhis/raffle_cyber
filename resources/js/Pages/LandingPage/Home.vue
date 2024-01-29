<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';
import  Raffle from '@/Components/Home/Raffle.vue';
import Organizers from '@/Components/Home/Organizers.vue';
import RaffleModal from '@/Components/Home/RaffleModal.vue'
import Footer from '@/Components/Home/Footer.vue'
import Litetime from "@/Components/Home/Litetime.vue";


</script>

<template>
    <ClientLayout title="Home">
        <template #header>

            <Raffle></Raffle>

        </template>

        <!-- <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                hola
                </div>
            </div>
        </div> -->
        <!-- Organizadores -->
        <Organizers></Organizers>

        <!-- Concursos pasados -->
        <!--
            This example requires some changes to your config:
            
            ```
            // tailwind.config.js
            module.exports = {
                // ...
                plugins: [
                // ...
                require('@tailwindcss/aspect-ratio'),
                ],
            }
            ```
        -->
            <div class="bg-white" id="concursos">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="text-6xl mb-4">Concursos realizados</h2>

                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <a href="#" class="group">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">Concurso 1</h3>
                    </a>

                    <a href="#" class="group">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75">
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">Concurso 2 </h3>
                    </a>

                    <a href="#" class="group">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75">
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">Concurso 3</h3> 
                    </a>

                    <a href="#" class="group">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
                        </div>
                        <h3 class="mt-4 text-sm text-gray-700">Concurso 4</h3>
                    </a>
              

                <!-- More products... -->
                </div>
            </div>
            </div>

            <!-- Modal para visualizar mas informacion del concurso y su ganador -->
            <RaffleModal></RaffleModal>

        
        <!-- Rifa activa -->
        <Litetime></Litetime>
        <!-- Suscripcion -->

        <!-- Footer -->
        <Footer></Footer>

</ClientLayout></template>
