<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import NavLink from '@/Components/NavLink.vue';
import { TableCellsIcon, PlusCircleIcon, PencilSquareIcon, TrashIcon, TicketIcon, CheckIcon, EyeIcon, EyeDropperIcon, ArchiveBoxArrowDownIcon } from '@heroicons/vue/20/solid';
import SectionTitle from '@/Components/SectionTitle.vue';

import { Head, useForm} from '@inertiajs/inertia-vue3';
import { nextTick, ref } from 'vue';
import DangerButton from '@/Components/DangerButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import WarningButton from '@/Components/WarningButton.vue';
import InputLabel from '@/Components/InputLabel.vue';
import InputError from '@/Components/InputError.vue';
import TextInput from '@/Components/TextInput.vue';
import Modal from '@/Components/Modal.vue';
import Swal from 'sweetalert2';
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination';


const nameInput = ref(null);
const modal = ref(false);
const title = ref('');
const operation = ref(1);
const id = ref('');

defineProps({
    message: { type: String, default: "" },
    status: { type: Number, default: "" },
    clients: { type: Object }
});


const form = useForm({
    name:'', card_id:'', email:'', phone:''
});

const formPage = useForm({});

const onPageClick = (event) =>{
    formPage.get(route('clientes.index', {page:event}));
};

const openModal =  (op, name, card_id, email, phone, cliente)=>{
    modal.value = true;
    nextTick(() => nameInput.value.focus());
    operation.value = op;
    id.value = cliente;

    if(op == 1){
        title.value = "Crear";
    }else{
        title.value = "Editar";
        form.name = name;
        form.card_id = card_id;
        form.email = email;
        form.phone = phone;
    }

};

const closeModal = () => {
    modal.value= false;
    form.reset();
}

const save = () =>{
    if(operation.value == 1){
        form.post(route('clientes.store'),{
            onSuccess: () => { ok('Cliente Creado') }
        });
    }else{
        form.put(route('clientes.update', id.value),{
            onSuccess: () => { ok('Cliente Editado') }
        })
    }
};


const formDelete = useForm({
    id: ""
})



const ok = (message) =>{
    form.reset();
    closeModal();
    Swal.fire({ title:message, icon:'success'});
}

const hanledDelete = (id, name) => {
    const alerta = Swal.mixin({
        buttonsStyling: true
    });
    alerta.fire({
        title: 'Seguro que desea eliminar a el cliente ' + name + ' ?',
        icon: 'question', showCancelButton: true,
        confirmButtonText: 'si, Eliminar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            console.log(id);
           formDelete.delete(route('clientes.destroy', id), {
                onSuccess: () => {ok('Cliente Eliminado')}
           });
        }
    })
}

</script>

<template>
    <AuthenticatedLayout title="Clientes">
        <template #header>
            <div class="flex flex-wrap justify-between">
                <div>
                    <SectionTitle>
                        <template #title>
                            <div class="text-4xl">
                                Listas de clientes
                            </div>
                        </template>
                        <template #description>
                            En la siguiente lista puede visualizar, editar y eliminar los clientes creados.
                            {{ message  }}

                        </template>
                    </SectionTitle>
                </div>
                <div>
                   
                    <button @click="openModal(1)" class="flex flex-wrap text-orange-600">
                        <PlusCircleIcon style="width: 55px;"></PlusCircleIcon>
                        Registrar Cliente
                    </button>
                </div>
            </div>
        </template>


    <div class="overflow-x-auto p-5">
    <table class="min-w-full  shadow-sm border-gray-200 ">
            <thead class="px-3 py-2 font-semibold text-left bg-gray-100 border-b">
                <tr>
                    <th class="border border-gray-400 px-2 py-2">Nombre completo</th>
                    <th class="border border-gray-400 px-2 py-2">Cédula</th>
                    <th class="border border-gray-400 px-2 py-2">Correo</th>
                    <th class="border border-gray-400 px-2 py-2">Teléfono</th>
                    <th class="border border-gray-400 px-2 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody class="bg-white ">
                <tr v-for="client in clients.data" :key="client.id">
                    <td class="border border-gray-400 px-2 py-2">{{ client.name  }}</td>
                    <td class="border border-gray-400 px-2 py-2">{{ client.card_id  }}</td>
                    <td class="border border-gray-400 px-2 py-2">{{ client.email  }}</td>
                    <td class="border border-gray-400 px-2 py-2">{{ client.phone  }}</td>
                    <td class="border border-gray-400 px-2 py-2">
                        <WarningButton @click="openModal(2, client.name, client.card_id, client.email, client.phone, client.id)">
                            <PencilSquareIcon style="width: 15px;"></PencilSquareIcon>
                        </WarningButton>
                        <DangerButton class="mx-1" @click="hanledDelete(client.id, client.name)">
                            <TrashIcon style="width: 15px;"></TrashIcon>
                        </DangerButton>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" >
                        <VueTailwindPagination
                        :current="clients.current_page" :total="clients.total"
                        text-before-input="Ir a la pagina"
                        text-after-input="Ir"
                        :per-page="clients.per_page"
                        @page-changed="$event => onPageClick($event)"
                        ></VueTailwindPagination>
                    </td>
                </tr>
            </tfoot>
        </table>

        
    </div>
    
        <Modal :show="modal" @close="closeModal" class="">
            <div class="flex flex-wrap justify-center">

                <h2 class="w-full bg-orange-500 text-3xl font.medium text-gray-900 p-2">{{ title }}</h2>
                <div class="mt-1 p-3" >
                    <InputLabel for="name" value="Nombre completo:"></InputLabel>
                    <TextInput id="name" ref="nameInput" 
                    v-model="form.name" type="text" class="m-2 "
                    placeholder="Ingrese nombre"></TextInput>
                    <InputError :message="form.errors.name" class="mt-2"></InputError>
                </div>
                <div class="mt-1 p-3" >
                    <InputLabel for="card_id" value="Rif o Documento de identidad:"></InputLabel>
                    <TextInput id="card_id"  
                    v-model="form.card_id" type="text" class="m-2 "
                    placeholder="Ingrese número de documento"></TextInput>
                    <InputError :message="form.errors.card_id" class="mt-2"></InputError>
                </div>
                <div class="mt-1 p-3" >
                    <InputLabel for="email" value="E-mail:"></InputLabel>
                    <TextInput id="email"  
                    v-model="form.email" type="text" class="m-2 "
                    placeholder="Ingrese correo electrónico"></TextInput>
                    <InputError :message="form.errors.email" class="mt-2"></InputError>
                </div>
                <div class="mt-1 p-3" >
                    <InputLabel for="phone" value="Teléfono:"></InputLabel>
                    <TextInput id="phone"  
                    v-model="form.phone" type="text" class="m-2 "
                placeholder="Ingrese número de teléfono"></TextInput>
                    <InputError :message="form.errors.phone" class="mt-2"></InputError>
                </div>
    
                <PrimaryButton :disabled="form.processing" @click="save" class="flex w-full mx-20">
                    <ArchiveBoxArrowDownIcon style="width: 25px;" class="mx-2"></ArchiveBoxArrowDownIcon>Guardar
                </PrimaryButton>
            </div>
        </Modal>
 

</AuthenticatedLayout></template>