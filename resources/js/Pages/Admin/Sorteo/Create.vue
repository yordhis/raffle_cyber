<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { useForm } from '@inertiajs/vue3';
import NavLinkSub from '@/Components/NavLinkSub.vue';
import { TableCellsIcon, PlusCircleIcon, PencilSquareIcon, TrashIcon, TicketIcon, CheckIcon } from '@heroicons/vue/20/solid';
import SectionTitle from '@/Components/SectionTitle.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';


const form = useForm({
    title: "", // titulo
    description: "", // Descripcion
    cost: "", // costo por ticket
    start_date: "", // fecha de inicio
    end_date: "", // fecha de finalización
    limit_number: "",  // limite de números
    minimum_purchese: "",  // el minimo de compra
    file: "",  // imagen del premio
    status: 1 // activo o inactivo el sorteo
})
</script>

<template>
    <AuthenticatedLayout title="Sorteos">
        <template #header>
            <div class="flex flex-wrap justify-between">
                <div>
                  <SectionTitle>
                      <template #title><div class="text-4xl">
                          Formulario para crear sorteo
                        </div></template>
                        <template #description>
                            Debe llenar todos los campos, para configurar correctamente el sorteo.
                        </template>
                  </SectionTitle>
                </div>
                <div >
                    <NavLinkSub :href="route('raffles.index')" >
                        <TableCellsIcon></TableCellsIcon>
                        Lista Sorteos 
                    </NavLinkSub>
                </div>
               
            </div>
        </template>

        <div class=" flex justify-center flex-wrap">
            <div class="bg-white  rounded-2xl p-4 mx-10 my-5">
                <form @submit.prevent="form.post(route('raffles.store'))">
                    <!-- Titulo -->
                    <InputLabel class="text-xl">Premio del premio</InputLabel>
                    <input class="rounded-2xl my-2 w-full" type="text"
                    placeholder="Ingrese titulo del premio"    
                    v-model="form.title">
                    <div class="p-0 m-0 text-red-500" v-if="form.errors.title">{{ form.errors.title }}</div>

                    <!-- Descripción -->
                    <InputLabel class="text-xl">Descripción</InputLabel>
                    <textarea class="rounded-2xl my-2 w-full" v-model="form.description" 
                    placeholder="Ingrese descripción del premio"></textarea>
                    <div class="p-0 m-0 text-red-500" v-if="form.errors.description">{{ form.errors.description }}</div>
    

                    <div class="sm:flex sm:justify-between">
                        <!-- Cantidad limite de boletos a vender -->
                        <div class=" py-2 pr-2">
                            <InputLabel class="text-xl">Limite de bolelos a vender</InputLabel>
                            <input class="w-full rounded-2xl my-2" 
                            placeholder="Ingrese el límite de venta" 
                            type="number"
                            v-model="form.limit_number">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.limit_number">{{ form.errors.limit_number }}</div>
                        </div>
                        <div class=" py-2 pr-2">
                            <InputLabel class="text-xl">Cantidad mínima de compra</InputLabel>
                            <input class="w-full rounded-2xl my-2" 
                            placeholder="Ingrese la cantidad mínima de compra de boletos" 
                            type="number"
                            v-model="form.minimum_purchese">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.minimum_purchese">{{ form.errors.minimum_purchese }}</div>
                        </div>
                        <!-- Costo de los boletos -->
                        <div class="py-2">
                            <InputLabel class="text-xl">Costo por boleto</InputLabel>
                            <input class="w-full rounded-2xl my-2" type="number"
                                step="any" 
                                placeholder="Ingrese el costo del boleto"
                                v-model="form.cost">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.cost">{{ form.errors.cost }}</div>
                        </div>

                    </div>


                    <!-- Fecha de inicio -->
                    <InputLabel class="text-xl">Fecha de incio del sorteo</InputLabel>
                    <input class="rounded-2xl my-2 w-full" type="date" v-model="form.start_date">
                    <div class="p-0 m-0 text-red-500" v-if="form.errors.start_date">{{ form.errors.start_date }}</div>
                  
                    <!-- Fecha de fin -->
                    <InputLabel class="text-xl">Fecha de finalización del sorteo</InputLabel>
                    <input class="rounded-2xl my-2 w-full" type="date" v-model="form.end_date">
                    <div class="p-0 m-0 text-red-500" v-if="form.errors.end_date">{{ form.errors.end_date }}</div>
                  
                    
                    
                    <!-- Imagen -->
                    <InputLabel class="text-xl">Añade la imagen del premio</InputLabel>
                    <input class="rounded-2xl my-2 p-4 w-full block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-green-50 file:text-black-700
                                        hover:file:bg-orange-100" accept="image/*" type="file"
                        @input="form.file = $event.target.files[0]">
                    <div class="p-0 m-0 text-red-500" v-if="form.errors.file">{{ form.errors.file }}</div>

             

                    <progress v-if="form.progress" class="w-full" :value="form.progress.percentage" max="100">
                        {{ form.progress.percentage }}%
                    </progress>

                    <!-- submit -->

                    <button
                        class="w-full text-center ease-in duration-300 bg-green-500 hover:bg-orange-700 shadow-lg  shadow-green-500/50 rounded-lg p-2 my-2 text-white text-2xl text-center">
                        Crear Sorteo
                    </button>

                </form>

            </div>
        </div>


    </AuthenticatedLayout>
</template>