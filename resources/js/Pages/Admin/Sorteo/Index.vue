<script setup>
import NavLink from '@/Components/NavLink.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { TableCellsIcon, PlusCircleIcon, PencilSquareIcon, TrashIcon, TicketIcon, CheckIcon, EyeIcon, EyeDropperIcon } from '@heroicons/vue/20/solid';
import SectionTitle from '@/Components/SectionTitle.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import DangerButton from '@/Components/DangerButton.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import Swal from 'sweetalert2';

defineProps({ 
    respuesta: { type:Array, default:[] },
    raffles: {type:Object} 
});

const form =  useForm({ 
    id: ''
})

const hanledDelete = (id, name) =>{
        const alerta = Swal.mixin({
            buttonsStyling:true
        });
        alerta.fire({
            title:'Seguro que desea eliminar el sorteo de ' + name,
            icon:'question', showCancelButton:true,
            confirmButtonText:'si, Eliminar',
            cancelButtonText:'Cancelar',
        }).then((result)=>{
            if(result.isConfirmed){
                console.log(id);
                form.delete(route('sorteos.destroy', id));
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
                      <template #title><div class="text-4xl">
                          Listas de sorteos creados
                        </div></template>
                        <template #description>
                            En la siguiente lista puede visualizar, editar y eliminar los sorteos creados.
                            {{ respuesta.mensaje ? respuesta.mensaje : ''  }}
                        
                        </template>
                  </SectionTitle>
                </div>
                <div>
                    <NavLink :href="route('sorteos.create')"
                    class="text-orange-600">
                        <PlusCircleIcon></PlusCircleIcon>
                        Crear Sorteo
                    </NavLink>
                </div>
            </div>
        </template>

        <div class=" flex justify-center flex-wrap">
            <div class="bg-white  rounded-2xl p-4  my-5">
                <table class="border-collapse border border-slate-400">
                    <thead>
                        <tr>
                            <th class="border border-slate-300 p-2">N#</th>
                            <th class="border border-slate-300 p-2">Titulo</th>
                            <th class="border border-slate-300 p-2">Fecha de inicio</th>
                            <th class="border border-slate-300 p-2">Fecha de finalización</th>
                            <th class="border border-slate-300 p-2">Compra mínima</th>
                            <th class="border border-slate-300 p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr class="hover:bg-gray-100" v-for="raffle, i in raffles" :key="raffle.id">
                            <td class="border border-slate-300 p-2">{{ (i+1) }}</td>
                            <td class="border border-slate-300 p-2">{{ raffle.title }}</td>
                            <td class="border border-slate-300 p-2">{{ raffle.start_date }}</td>
                            <td class="border border-slate-300 p-2">{{ raffle.end_date }}</td>
                            <td class="border border-slate-300 p-2">{{ raffle.minimum_purchese }}</td>
                            <td class="border border-slate-300 p-2">
                                 
                                <SecondaryButton class="bg-yellow-500 px-4 py-2 rounded">
                                    <NavLink :href="route('sorteos.edit', raffle.id)"
                                    class="">
                                        <PencilSquareIcon class="text-white" style="width: 25px;"></PencilSquareIcon>
                                    </NavLink>
                                </SecondaryButton>

                                <DangerButton class="mx-1" @click="$event => hanledDelete(raffle.id, raffle.title)">
                                    <TrashIcon  class="text-white-500" style="width: 25px;">
                                    </TrashIcon>
                                </DangerButton>
                                
                           
                                
                                    <PrimaryButton class="mx-1">
                                        <EyeIcon class="text-white-500" style="width: 25px;"/>

                                    </PrimaryButton>
                                
                            </td>
                          
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    
    </AuthenticatedLayout>
</template>