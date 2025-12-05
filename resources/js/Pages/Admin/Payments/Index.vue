<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import NavLink from '@/Components/NavLink.vue';
import { TableCellsIcon, PlusCircleIcon, PencilSquareIcon, TrashIcon, TicketIcon, CheckIcon, EyeIcon, EyeDropperIcon, ArchiveBoxArrowDownIcon, XMarkIcon } from '@heroicons/vue/20/solid';
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
import SelectInput from '@/Components/SelectInput.vue';
import Swal from 'sweetalert2';
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination';


const nameInput = ref(null);
const modal = ref(false);
const title = ref('');
const operation = ref(1);
const id = ref('');

const paramsUri = window.location.search;
const urlParams = new URLSearchParams(paramsUri)

const props = defineProps({
    message: { type: String, default: "" },
    status: { type: Number, default: "" },
    payments: { type: Object },
    methods: { type: Object },
});

const formAlert = useForm({
    message: "",
    status: "",
});

const form = useForm({
        order_code: "", 
        client_id: "", 
        raffle_id: "", 
        tasa: "", 
        total: "", 
        amount: "", 
        payment_date: "",
        payment_method_id: "", 
        reference_number: "", 
        file: "", 
        payment_status: "", 
        // data cliente
        name: "",
        card_id: "",
        email: "",
        phone: "",
        // data sorteo
        title: "",
        description: "",
        cost: "",
        limit_number: "",
        end_date: "",
        boletos: "",
});

const formPage = useForm({});

const onPageClick = (event) =>{
    formPage.get(route('clientes.index', {page:event}));
};

const openModal =  (op,  pay)=>{
    modal.value = true;
    operation.value = op;
    id.value = pay.pay_id;

    if(op == 1){
        title.value = "Verificar pago";
        // datos de compra
        form.pay_id = pay.pay_id; 
        form.order_code = pay.order_code; 
        form.client_id = pay.client_id; 
        form.raffle_id = pay.raffle_id; 
        form.tasa = pay.tasa; 
        form.total = pay.total; 
        form.amount = pay.amount; 
        form.payment_date = pay.payment_date;
        form.payment_method_id = pay.payment_method_id; 
        form.reference_number = pay.reference_number; 
        form.file = pay.vauche; 
        form.payment_status = pay.payment_status; 
        // datos anidados cliente
        form.name = pay.name;
        form.card_id = pay.card_id;
        form.email = pay.email;
        form.phone = pay.phone;
        // datos anidados sorteo
        form.title = pay.title;
        form.description = pay.description;
        form.cost = pay.cost;
        form.limit_number = pay.limit_number;
        form.end_date = pay.end_date;
        form.boletos = pay.boletos;
    }

};

const closeModal = () => {
    modal.value= false;
    form.reset();
}

const save = (status) =>{
    console.log(form.payment_status);
    form.payment_status = status;
    console.log(form.payment_status);
    if(status == 1){
        form.put(route('pagos.confirmed'),{
            onSuccess: () => { ok('Pago confirmado') }
        });
    }else{
        form.put(route('pagos.decline', id.value),{
            onSuccess: () => { ok('Pago rechazado') }
        })
    }
};



const ok = (message) =>{
    form.reset();
    closeModal();
    Swal.fire({ title:message, icon:'success'});
}

/** Alerta global */
const alert = (message, status) =>{
    let icono = "";
    if(status == 200) icono = "success";
    if(status == 404) icono = "error";
    Swal.fire({ title:message, icon:icono});
}

const hanledDelete = (id, pay) => {
    const alerta = Swal.mixin({
        buttonsStyling: true
    });

    form.pay_id = pay.pay_id; 
    form.order_code = pay.order_code; 
    form.client_id = pay.client_id; 
    form.raffle_id = pay.raffle_id; 
    form.boletos = pay.boletos;

    alerta.fire({
        title: '¿Seguro que desea eliminar a el pago del cliente ' + pay.name + ' ?',
        icon: 'question', showCancelButton: true,
        confirmButtonText: 'si, Eliminar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            console.log( pay.pay_id);
            console.log( pay.order_code);
           form.delete(route('pagos.destroy', pay.pay_id), {
                onSuccess: () => {ok('Pago eliminado y rechazado.')}
           });
        }
    })
}

if(urlParams.has('message')){
    formAlert.message = urlParams.get('message');
    formAlert.status = urlParams.get('status');
    alert(formAlert.message, formAlert.status)
}
</script>

<template>
    <AuthenticatedLayout title="Pagos">
        <template #header>
            <div class="flex flex-wrap justify-between">
                <div>
                    <SectionTitle>
                        <template #title>
                            <div class="text-4xl">
                                Listas de pagos
                            </div>
                        </template>
                        <template #description>
                            En la siguiente lista puede visualizar, editar y eliminar los pagos de los boletos.
                        </template>
                    </SectionTitle>
                </div>
                <div>
                   
                    <!-- <button @click="openModal(1)" class="flex flex-wrap text-verde-600">
                        <PlusCircleIcon style="width: 55px;"></PlusCircleIcon>
                        Registrar Cliente
                    </button> -->
                </div>
            </div>
        </template>

    <div class="mx-5 mt-5 flex flex-wrap">
        <!-- <div class="mr-2">
            <InputLabel value="Filtre por el seleclector"></InputLabel>
            <SelectInput :options="[{name:'ORDENAR POR FECHA'}, {name:'ORDENAR POR ESTADO'} ]">
            </SelectInput>
        </div> -->
        <div>
            <InputLabel value="Filtre por cédula o nombre"></InputLabel>
            <TextInput placeholder="Ingrese busqueda"></TextInput>
        </div>
    </div>

    <div class="overflow-x-auto p-5">
    <table class="min-w-full  shadow-sm border-gray-200 ">
            <thead class="px-3 py-2 font-semibold text-left bg-verde-500 border-b">
                <tr>
                    <th class="border border-gray-400 px-2 py-2">N° orden</th>
                    <th class="border border-gray-400 px-2 py-2">Participantes</th>
                    <th class="border border-gray-400 px-2 py-2">Fecha de pago</th>
                    <th class="border border-gray-400 px-2 py-2">Total pagado</th>
                    <th class="border border-gray-400 px-2 py-2">Estado del pago</th>
                    <th class="border border-gray-400 px-2 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody class="bg-white ">
                <tr v-for="pay in payments.data" :key="pay.pay_id">
                    <td class="border border-gray-400 px-2 py-2">{{ pay.order_code  }}</td>
                    <td class="border border-gray-400 px-2 py-2">{{ pay.name  }}<br>C.I.:{{ pay.card_id  }}</td>
                    <td class="border border-gray-400 px-2 py-2">{{ pay.payment_date  }}</td>
                    <td class="border border-gray-400 px-2 py-2">{{ pay.total }}</td>
                    <td class="border border-gray-400 px-2 py-2">
                        <template v-if="pay.payment_status == 1 ">
                            <PrimaryButton>Confirmado</PrimaryButton>
                        </template>
                        <template v-if="pay.payment_status == 2">
                            <PrimaryButton class="bg-red-500">Rechazado</PrimaryButton>
                        </template>
                        <template v-if="pay.payment_status == 0">
                            <PrimaryButton class="bg-red-500" @click="openModal(1, pay)"> Por confirmar</PrimaryButton>
                        </template>
                    </td>
                    <td class="border border-gray-400 px-2 py-2">
                        <PrimaryButton @click="openModal(1, pay)">
                            <EyeIcon style="width: 15px;"></EyeIcon>
                        </PrimaryButton>
                        <DangerButton class="mx-1" @click="hanledDelete(pay.id, pay)">
                            <TrashIcon style="width: 15px;"></TrashIcon>
                        </DangerButton>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="6" >
                        <VueTailwindPagination
                        :current="payments.current_page" :total="payments.total"
                        text-before-input="Ir a la pagina"
                        text-after-input="Ir"
                        :per-page="payments.per_page"
                        @page-changed="$event => onPageClick($event)"
                        ></VueTailwindPagination>
                    </td>
                </tr>
            </tfoot>
        </table>

        
    </div>
    
        <Modal :show="modal" @close="closeModal" class="">
            <div class="flex flex-wrap justify-center">
                <h2 class="w-full bg-verde-500 text-3xl font.medium text-white  p-2">{{ title }}</h2>
                <p class="p-4 bg-gray-200">Al confirmar o rechazar el pago se enviará un correo al cliente de su estatus de pago y si el pago es confirmao le llegará los números de boletos.</p>
                
                <div class="w-70 border-4 border-bottom text-center">
                    <InputLabel class="my-2">VAUCHE</InputLabel>
                    <img :src="form.file ? form.file : 'assets/images/no-image.png' " alt="Premios" class=""
                        loading="lazy" />
                </div>

                <div class="w-full">
                    <div class="divide-y divide-blue-200">
                        <div class="p-2 mx-4 bg-verde-500" v-if="parseInt(form.payment_status) == 1 ">Boletos asignados: {{ form.boletos }}</div>
                        <div class="p-2 mx-4">N° de orden: {{ form.order_code }}</div>
                        <div class="p-2 mx-4">Sorteo: {{ form.title }}</div>
                        <div class="p-2 mx-4">Cliente: {{ form.name }} - C.I.: {{ form.card_id }}</div>
                        <div class="p-2 mx-4">N° teléfono: {{ form.phone }} - E-mail: {{ form.email }}</div>
                        <div class="p-2 mx-4">Tasa: {{ form.tasa }} - Monto cancelado: {{ form.total }}</div>
                        <div class="p-2 mx-4">Cantidad de boletos comprados: {{ form.amount }} </div>
                        <div class="p-2 mx-4">Fecha de pago: {{ form.payment_date }} </div>
                        <div class="p-2 mx-4">N° de referencia del pago: {{ form.reference_number }} </div>
                        <div class="p-2 mx-4">
                            <progress v-if="form.progress" :value="form.progress.percentage" class="w-full" max="100">
                                {{ form.progress.percentage }}%
                            </progress>
                        </div>
                        <div class="p-2 mx-4">Estatus del pago: 
                            <template v-if="form.payment_status == 1 ">
                                <PrimaryButton>Confirmado</PrimaryButton>
                            </template>
                            <template v-if="form.payment_status == 2">
                                <PrimaryButton class="bg-red-500">Rechazado</PrimaryButton>
                            </template>
                            <template v-if="form.payment_status == 0">
                                <PrimaryButton class="bg-red-500"> Por confirmar</PrimaryButton>
                            </template>
                        </div>
                        
                    </div>
                  
               
                </div>


            </div>
    
            <div class="flex justify-between">
                <template v-if="form.payment_status == 0 || form.payment_status == 2 ">
                    <PrimaryButton :disabled="form.processing" @click="save(1)" class="flex mx-4">
                        <CheckIcon style="width: 25px;" class="mx-2"></CheckIcon>Confirmar pago
                    </PrimaryButton>
                </template>

                <DangerButton :disabled="form.processing" @click="save(2)" class="flex mx-4">
                    <XMarkIcon style="width: 25px;" class="mx-2 "></XMarkIcon> Rechazar pago
                </DangerButton>

            </div>
        </Modal>
 

</AuthenticatedLayout></template>