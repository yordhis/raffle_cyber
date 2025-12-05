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

</script>

<template>
    <AuthenticatedLayout title="Sorteos">
        <template #header>
            <div class="flex flex-wrap justify-between">
                <div>
                  <SectionTitle>
                      <template #title><div class="text-4xl">
                          Sorteo
                        </div></template>
                        <template #description>
                            En la siguiente lista puede visualizar, editar y eliminar los sorteos creados.
                            {{ respuesta.mensaje ? respuesta.mensaje : ''  }}
                        
                        </template>
                  </SectionTitle>
                </div>
                <div>
                    <NavLink :href="route('sorteos.create')"
                    class="text-verde-600">
                        <PlusCircleIcon></PlusCircleIcon>
                        Crear Sorteo
                    </NavLink>
                </div>
            </div>
        </template>

       
    
    </AuthenticatedLayout>
</template>