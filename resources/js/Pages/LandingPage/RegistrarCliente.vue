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

<template><ClientLayout title="Registrar datos de contacto">

    
        <template #header>

           <BarraDePasos/>

        </template>

  <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 

    <section class="">
        <div class="h-full">
            <div class="flex justify-center my-2 ">
                <span class="box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white px-2 text-6xl">
                    Ingresa tus datos
                </span>
                
            </div>
            <div class="flex justify-center">
                <!-- <div class="col-span-2 bg-white">01</div> -->
          
                  
                   
       

                <div class="bg-white  rounded-2xl p-4 mx-10">
                    <form @submit.prevent="form.post('/clientes')">
                            <!-- Nombre -->
                            <InputLabel class="text-xl">Nombre Completo</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="text" v-model="form.name">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>
                            <!-- Cedula -->
                            <InputLabel class="text-xl">Rif o número de identificación</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="text" v-model="form.card_id">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.card_id">{{ form.errors.card_id }}</div>
                            <!-- Teléfono-->
                            <InputLabel class="text-xl">Teléfono movil</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="text" v-model="form.phone">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.phone">{{ form.errors.phone }}</div>
                            <!-- Correo -->
                            <InputLabel class="text-xl">E-mail</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="text" v-model="form.email">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.email">{{ form.errors.email }}</div>
                            
                            <!-- submit -->
                            <button class="w-full text-center ease-in duration-300 bg-green-500 hover:bg-orange-700 shadow-lg  shadow-green-500/50 rounded-lg p-2 my-2 text-white text-2xl text-center">
                                Guardar mis datos
                            </button>
                            
                        </form>
                </div>    
            </div>    
        </div>
    </section>




</ClientLayout></template>
