<script setup>
import NavLink from '@/Components/NavLink.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { TableCellsIcon, PlusCircleIcon, PencilSquareIcon, TrashIcon, TicketIcon, CheckIcon, EyeIcon, EyeDropperIcon } from '@heroicons/vue/20/solid';
import SectionTitle from '@/Components/SectionTitle.vue';
import { useForm} from '@inertiajs/inertia-vue3';
import DangerButton from '@/Components/DangerButton.vue';
import WarningButton from '@/Components/WarningButton.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import axios from 'axios';

const hanledActivarSorteo = ref(true);

console.log(hanledActivarSorteo);
defineProps({
    message: { type: String, default: "" },
    status: { type: Number, default: "" },
    raffles: { type: Object }
});


const formDelete = useForm({
    id: ""
})
const formUpdateStatus = useForm({
    id: ""
})

const hanledUpdateStatus =  (idSorteo, sorteo) =>{
    const alerta = Swal.mixin({
        buttonsStyling: true
    });
    alerta.fire({
        title: 'Seguro que desea cambiar el estatus del sorteo ' + sorteo.title,
        icon: 'question', showCancelButton: true,
        confirmButtonText: 'si, Cambiar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            console.log(idSorteo);
            formUpdateStatus.put(route('raffles.updateStatus', idSorteo));
        }
    })

    return sorteo.status;
    
}

const ok = (message) =>{
    Swal.fire({
        title:"Actualizando Estatus",
        text: message,
        icon:'success'
    })
}

const hanledDelete = (id, name) => {
    const alerta = Swal.mixin({
        buttonsStyling: true
    });
    alerta.fire({
        title: 'Seguro que desea eliminar el sorteo de ' + name,
        icon: 'question', showCancelButton: true,
        confirmButtonText: 'si, Eliminar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            console.log(id);
           formDelete.delete(route('raffles.destroy', id));
        }
    })
}
</script>

<template>
    <AuthenticatedLayout title="Sorteos">
        <template #header>
            <div class="flex flex-wrap justify-between">
                <div>
                    <SectionTitle>
                        <template #title>
                            <div class="text-4xl">
                                Listas de raffles creados
                            </div>
                        </template>
                        <template #description>
                            En la siguiente lista puede visualizar, editar y eliminar los raffles creados.
                            {{ message  }}

                        </template>
                    </SectionTitle>
                </div>
                <div>
                    <NavLink :href="route('raffles.create')" class="text-orange-600">
                        <PlusCircleIcon></PlusCircleIcon>
                        Crear Sorteo
                    </NavLink>
                </div>
            </div>
        </template>


    <div class="flex flex-wrap justify-center">

        <div v-for="sorteo in raffles" :key="sorteo.id" class="bg-white flex flex-col w-80 p-2 m-2">
            <div
                class="w-70">
                <img :src="sorteo.file ? sorteo.file : 'assets/images/no-image.png' " alt="Premios" class=""
                    loading="lazy" />
            </div>
            <div class=" w-80 p-4">
                <SectionTitle><template #title>{{ sorteo.title }}</template></SectionTitle>
                <p class="text-green-500 text-2xl font-semibold">Costo: {{ sorteo.cost }} $</p>
                <p class="text-orange-500">Descripción:</p>
                <p >{{ sorteo.description }}</p>
                <p class="text-orange-500">
                    Fecha de Inicio: 
                    <span class="text-green-600">{{ sorteo.start_date }}</span>
                </p>
                <p class="text-orange-500">
                    Fecha de Finalización: 
                    <span class="text-red-600">{{ sorteo.end_date }}</span>
                </p>
               
                <p class="text-orange-500">
                    Limite de boletos: 
                    <span class="text-red-600">{{ sorteo.limit_number }}</span>
                </p>
                <p class="text-orange-500">
                    Mínimo de venta de boletos: 
                    <span class="text-red-600">{{ sorteo.minimum_purchese }}</span>
                </p>

                <p class="text-orange-500">
                    Estatus del sorteo: 
                    <span :class="sorteo.status ? 'bg-green-500 text-white p-1 rounded-2xl'
                                                : 'bg-red-500 text-white p-1 rounded-2xl'
                                ">
                                {{ sorteo.status ? 'ACTIVO' : "INACTIVO" }}
                    </span>
                </p>
            </div>
            <div class="flex flex-wrap">
                <div class="mx-1">
                    <NavLink :href="route('raffles.edit', sorteo.id)" >

                        <WarningButton >
                            <PencilSquareIcon style="width: 20px;"></PencilSquareIcon>
                            Editar
                        </WarningButton>
                    </NavLink>
                </div>
                <div class="mt-1">
                    <DangerButton 
                    @click="hanledDelete(sorteo.id, sorteo.title)">
                        <TrashIcon style="width: 20px;"></TrashIcon>
                        Eliminar
                    </DangerButton>
                </div>
                <div class="ml-8 mt-5" >
                    <button type="button" 
                        
                        @click="sorteo.status = hanledUpdateStatus(sorteo.id, sorteo)"
                        :class="sorteo.status ? 'bg-orange-500 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                                    : 'bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                                    " 
                        role="switch" 
                        aria-checked="false" 
                        aria-labelledby="switch-1-label">
                        <span class="sr-only">Estatus</span>
                        <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" -->
                        <span aria-hidden="true" 
                        :class="sorteo.status ? 'translate-x-3.5 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                                    : 'translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>

</AuthenticatedLayout></template>