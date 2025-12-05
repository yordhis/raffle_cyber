<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { useForm } from '@inertiajs/vue3';
import NavLink from '@/Components/NavLink.vue';
import NavLinkSub from '@/Components/NavLinkSub.vue';
import { TableCellsIcon, PlusCircleIcon, PencilSquareIcon, TrashIcon, TicketIcon, CheckIcon } from '@heroicons/vue/20/solid';
import SectionTitle from '@/Components/SectionTitle.vue';
import TextInput from '@/Components/TextInput.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const props = defineProps({
    raffle: {type:Object}
});

const formUpdate = useForm({
    title: props.raffle.title, // titulo
    description: props.raffle.description, // Descripcion
    cost: props.raffle.cost, // costo por ticket
    start_date: props.raffle.start_date, // fecha de inicio
    end_date: props.raffle.end_date, // fecha de finalización
    limit_number: props.raffle.limit_number,  // limite de números
    minimum_purchese: props.raffle.minimum_purchese,  // el minimo de compra
    file:  "",  // imagen del premio
    status: props.raffle.status // activo o inactivo el sorteo
});

const submit = () =>{
    formUpdate.put(route('raffles.update', props.raffle.id));
};
</script>

<template>
    <AuthenticatedLayout title="Editar Sorteo">
        <template #header>
            <div class="flex flex-wrap justify-between">
                <div>
                  <SectionTitle>
                      <template #title><div class="text-4xl">
                          Formulario para editar sorteo
                        </div></template>
                        <template #description>
                            Debe llenar todos los campos, para configurar correctamente el sorteo.
                        </template>
                  </SectionTitle>
                </div>
                <div class="text-verde-500">
                    <NavLinkSub :href="route('raffles.index')"
                    >
                        <TableCellsIcon></TableCellsIcon>
                         Lista Sorteos 
                    </NavLinkSub>
                </div>
               
            </div>
        </template>

        <div class=" flex justify-center flex-wrap">
            <div class="bg-white  rounded-2xl p-4 mx-10 my-5">
                <form @submit.prevent="submit" >
                    <!-- Imagen -->
                    <InputLabel class="text-xl">Edita la imagen del premio</InputLabel>
                    <div class="flex justify-between">
                        <div>
                            <input class="rounded-2xl my-2 p-4 w-full block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-green-50 file:text-black-700
                                        hover:file:bg-verde-100" accept="image/*" type="file"
                            @input="formUpdate.file = $event.target.files[0]">
                            <div class="p-0 m-0 text-red-500" v-if="formUpdate.errors.file">{{ formUpdate.errors.file }}</div>
                        </div>
                        
                        <img :src="props.raffle.file ? props.raffle.file : 'assets/images/no-image.png' " alt="Premios" 
                        class="bg-gray-500 rounded w-80"
                        loading="lazy" />
                    </div>

                    <!-- Titulo -->
                    <InputLabel class="text-xl">Premio del premio</InputLabel>
                    <input class="rounded-2xl my-2 w-full" type="text"
                    placeholder="Ingrese titulo del premio"    
                    v-model="formUpdate.title">
                    <div class="p-0 m-0 text-red-500" v-if="formUpdate.errors.title">{{ formUpdate.errors.title }}</div>

                    <!-- Descripción -->
                    <InputLabel class="text-xl">Descripción</InputLabel>
                    <textarea class="rounded-2xl my-2 w-full" v-model="formUpdate.description" 
                    placeholder="Ingrese descripción del premio"></textarea>
                    <div class="p-0 m-0 text-red-500" v-if="formUpdate.errors.description">{{ formUpdate.errors.description }}</div>
    

                    <div class="sm:flex sm:justify-between">
                        <!-- Cantidad limite de boletos a vender -->
                        <div class=" py-2 pr-2">
                            <InputLabel class="text-xl">Limite de bolelos a vender</InputLabel>
                            <input class="w-full rounded-2xl my-2" 
                            placeholder="Ingrese el límite de venta" 
                            type="number"
                            v-model="formUpdate.limit_number">
                            <div class="p-0 m-0 text-red-500" v-if="formUpdate.errors.limit_number">{{ formUpdate.errors.limit_number }}</div>
                        </div>
                        <div class=" py-2 pr-2">
                            <InputLabel class="text-xl">Cantidad mínima de compra</InputLabel>
                            <input class="w-full rounded-2xl my-2" 
                            placeholder="Ingrese la cantidad mínima de compra de boletos" 
                            type="number"
                            v-model="formUpdate.minimum_purchese">
                            <div class="p-0 m-0 text-red-500" v-if="formUpdate.errors.minimum_purchese">{{ formUpdate.errors.minimum_purchese }}</div>
                        </div>
                        <!-- Costo de los boletos -->
                        <div class="py-2">
                            <InputLabel class="text-xl">Costo por boleto</InputLabel>
                            <input class="w-full rounded-2xl my-2" type="number"
                                step="any" 
                                placeholder="Ingrese el costo del boleto"
                                v-model="formUpdate.cost">
                            <div class="p-0 m-0 text-red-500" v-if="formUpdate.errors.cost">{{ formUpdate.errors.cost }}</div>
                        </div>

                    </div>


                    <!-- Fecha de inicio -->
                    <InputLabel class="text-xl">Fecha de incio del sorteo</InputLabel>
                    <input class="rounded-2xl my-2 w-full" type="date" v-model="formUpdate.start_date">
                    <div class="p-0 m-0 text-red-500" v-if="formUpdate.errors.start_date">{{ formUpdate.errors.start_date }}</div>
                  
                    <!-- Fecha de fin -->
                    <InputLabel class="text-xl">Fecha de finalización del sorteo</InputLabel>
                    <input class="rounded-2xl my-2 w-full" type="date" v-model="formUpdate.end_date">
                    <div class="p-0 m-0 text-red-500" v-if="formUpdate.errors.end_date">{{ formUpdate.errors.end_date }}</div>  
             

                    <progress class="w-full" v-if="formUpdate.progress" :value="formUpdate.progress.percentage" max="100">
                        {{ formUpdate.progress.percentage }}%
                    </progress>

                    <!-- submit -->

                    <button :disabled="formUpdate.processing"
                        type="submit"
                        class="w-full text-center ease-in duration-300 bg-verde-500 hover:bg-verde-700 shadow-lg  shadow-verde-500/50 rounded-lg p-2 my-2 text-white text-2xl text-center">
                        Guardar cambios
                    </button>

                </form>

            </div>
        </div>


    </AuthenticatedLayout>
</template>