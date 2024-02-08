<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';
import { Link } from '@inertiajs/vue3';




</script>

<template><ClientLayout title="Información">

    
    

  <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 

    <section class="flex justify-center  ">
        <div class="h-full">
            <!-- Left column container with background-->
            <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div
                    class="shrink-1  grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <img
                    src="/assets/images/ferrari_new.png"
                    class="w-full"
                    alt="Premio" />
                </div>

                <article class="mt-2 sm:mt-20  p-10  text-white bg-stone-900 rounded-3xl md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 ">
                    <span class="box-decoration-slice bg-gradient-to-r from-neutral-600 to-pink-500 text-white px-2 text-3xl">
                        ¡Gran Sorteo!
                    </span><br>
                    <span class="box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white px-2 text-6xl">
                        De Ferrari IT
                    </span>
                    <div class="py-5 text-2xl">
                        <h3 class="">Fecha del sorteo: <span class="text-green-500"> 14-02-2024 </span></h3>
                        <p><span class="text-orange-400">Premios:</span> 1er lugar se lleva el carro</p>
                        <p><span class="text-orange-400">Transmisión en vivo por:</span> Loteria del tachira canal 12 </p>
                        <p><span class="text-orange-400">Costo por boleto:</span> 2$</p>
                   
                        <button class="text-center ease-in duration-300 mt-3 bg-green-500 hover:bg-orange-700 shadow-lg  shadow-green-500/50 rounded-lg p-2  text-white text-2xl text-center">
                            <Link :href="route('compras.comprar')" 
                                    class=" ">
                                    ¡COMPRAR BOLETO AHORA!
                            </Link>
                        </button>
                    </div>
                </article>
            </div>
        </div>

        
     
    </section>

        <div class="w-full px-10 mt-20">            
            <label for="progreso" class="text-white py-5"> ¡Total de voletos vendidos! </label>
                <div class="w-100 border rounded-2xl p-1 my-2">
                    <div class="bg-orange-500 rounded-2xl text-center" style="width: 100%;">100%</div>
                </div>
        </div>




</ClientLayout></template>
