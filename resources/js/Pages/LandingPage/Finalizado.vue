<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';
import Footer from '@/Components/Home/Footer.vue';
import CustomFormSection from "@/Components/ComponentForm/CustomFormSection.vue";
import CustomInput from "@/Components/ComponentForm/CustomInput.vue";
import BarraDePasos from '@/Components/Partials/BarraDePasos.vue';
import { useForm } from '@inertiajs/vue3'
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SectionTitle from '@/Components/SectionTitle.vue';

const form = useForm({
  name: null, 
  card_id: null,
  phone: null,
  email: null,
})




</script>

<template><ClientLayout title="Finalizado">

    
        <template #header>

            <h1 class="mt-10 text-4xl text-white">Gracias por participar en la rifa</h1>

        </template>

        <div class=" flex justify-center">
            <div></div>
            <img class=" object-cover" width="500" src="/assets/images/level-up.jpg" alt="Modern building architecture">
        </div>
 





</ClientLayout></template>
