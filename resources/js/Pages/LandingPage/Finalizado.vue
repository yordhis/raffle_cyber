<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';
import Footer from '@/Components/Home/Footer.vue';
import BarraDePasos from '@/Components/Partials/BarraDePasos.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SectionTitle from '@/Components/SectionTitle.vue';

defineProps({
  compra: {type: Object}
});




</script>

<template><ClientLayout title="Finalizado">

    
        <template #header>

            <SectionTitle>
              <template #title >
                <h1 class="mt-10 text-4xl text-white">¡Ya casi estas participando! </h1>
                <span class="box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white px-2 text-4xl">
                        {{ compra.client.name.toUpperCase()}}
                </span>
              </template>
              <template #description>
                <p class="text-orange-400 text-2xl">
                  Verificaremos tu pago y al corfirmar tu pago te enviaremos tus 
                  ¡BOLETOS GANADORES! al correo sumistrado o whatsapp.
                 


                </p>
              </template>
            </SectionTitle>

        </template>

        <div class=" flex justify-center">
            <div></div>
            <img class=" hover:animate-spin" width="400" src="/assets/images/level-up.jpg" alt="Modern building architecture">
        </div>
 





</ClientLayout></template>
