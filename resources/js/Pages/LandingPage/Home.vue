<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';
import  Raffle from '@/Components/Home/Raffle.vue';
import  Footer from '@/Components/Home/Footer.vue';

</script>

<template>
    <ClientLayout title="Home" >
        <template #header>
            <Raffle></Raffle>
        </template>



</ClientLayout></template>
