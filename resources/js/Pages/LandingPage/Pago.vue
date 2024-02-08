<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';
import { useForm } from '@inertiajs/vue3';
import InputLabel from '@/Components/InputLabel.vue';
import { getMonitor } from "consulta-dolar-venezuela";
import { ArrowDownIcon, ArrowLongUpIcon, ArrowUpIcon, PlusIcon, MinusIcon } from '@heroicons/vue/20/solid';
import PrimaryButton from '@/Components/PrimaryButton.vue';


const metodosDePagos = [
    {
        id: 1,
        name: "Pago Movil",
        phone: "0414-3534569",
        account: null,
        account_type: null,
        bank: "Banco de Venezuela",
        bank_code: "0102",
        card_id: "24823972",
    },
    {
        id: 2,
        name: "Transferencia",
        phone: null,
        account: "01054578124512456352",
        account_type: "Corriente",
        bank: "Banco Mercantil",
        bank_code: "0105",
        card_id: "24823972",
    }
];

const form = useForm({
    // data Cliente
    name: null, 
    card_id: null,
    phone: null,
    email: null,
    //data pago
    raffle_id: 1,
    amount: 2,
    total: 0,
    tasa: 0,
    payment_date: "",
    payment_method_id: 0,
    file: null,
    reference_number: null,
    // esto no se va almacenar
    monitor_tasa: {},
    rifa: "FERARRI",
    modalInfoMetodoPago: false,
    btnDisabled: false
})



const getTasa = async (elemento) => {
    await getMonitor("BCV", "lastUpdate").then(res => {
        console.log(res);
        elemento.monitor_tasa = res.bcv
        localStorage.setItem('tasa', res.bcv.price);
    }).catch(err => { console.log(err)
        getTasa(elemento);
    });

    elemento.tasa == 0  ? elemento.tasa = parseFloat(localStorage.getItem('tasa'))
                        : elemento.tasa;

    elemento.total = parseFloat(elemento.tasa) * elemento.amount;
}
// Configuramo la tasa y el total
getTasa(form);

const hanledCantidad = (elemento) => {
    if(elemento.amount < 2) return elemento.amount = 2;
    else elemento.total = parseFloat(elemento.tasa) * elemento.amount;
}

// const hanledBtn = () => form.btnDisabled = true;

const cerrarModalInfoMetodoPago = () => form.modalInfoMetodoPago = false;
const abrirModalDeMetodoDePagos = (idMetodo) => {
        idMetodo? form.modalInfoMetodoPago = true
                : form.modalInfoMetodoPago = false;
};

const hanledCantidadEdit = (accion) =>{
    switch (accion) {
        case "+":
            form.amount++;
            break;
        case "-":
            form.amount--;
            break;
        default:
            form.amount = 2
            break;
    }
    hanledCantidad(form);
};

</script>

<template>
    <ClientLayout title="Realizar pago">
        <template #header></template>

        <section class="">
            <div class="h-full">
                <div class="flex justify-center my-2 ">
                    <span
                        class="p-2 box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white px-2 text-6xl">
                        Realizar pago
                    </span>

                </div>
                <div class="flex justify-center flex-wrap">
                    <div class="bg-white  rounded-2xl p-4 mx-10 my-5">
                        <form @submit.prevent="form.post('/compras')">
                            <!-- Sorteo -->
                            <InputLabel class="text-xl">Premio</InputLabel>
                            <input class="rounded-2xl my-2 w-full bg-orange-500  text-center text-2xl" readonly type="text"
                                v-model="form.rifa">
                            <input class="" readonly type="hidden" v-model="form.raffle_id">
                            <div v-if="form.errors.raffle_id">{{ form.errors.raffle_id }}</div> 

                            <!-- Nombre -->
                            <InputLabel class="text-xl">Nombre Completo</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="text" v-model="form.name"
                            placeholder="Ingrese nombre completo">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>
                            <!-- Cedula -->
                            <InputLabel class="text-xl">Rif o número de identificación</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="text" v-model="form.card_id"
                            placeholder="Ingrese número de identificación">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.card_id">{{ form.errors.card_id }}</div>
                            <!-- Teléfono-->
                            <InputLabel class="text-xl">Teléfono movil</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="text" v-model="form.phone"
                            placeholder="Ingrese número contacto">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.phone">{{ form.errors.phone }}</div>
                            <!-- Correo -->
                            <InputLabel class="text-xl">E-mail</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="text" v-model="form.email"
                            placeholder="Ingrese correo electrónico">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.email">{{ form.errors.email }}</div>

                            <!-- Cantidad de ticket -->
                            <div class="sm:flex sm:justify-between ">
                                <div class=" py-2 pr-2">
                                    <InputLabel class="text-xl">Cantidad de voletos</InputLabel>
                                    <input class="w-full rounded-2xl sm:my-2  text-center text-1xl" type="number"
                                        @input="hanledCantidad(form)" v-model="form.amount">
                                     <div class="p-0 m-0 text-red-500" v-if="form.errors.amount">{{ form.errors.amount }}</div>
                                </div>
                                <div class="xs:flex xs:justify-between sm:invisible ">
                                    <PrimaryButton type="button" class=" mx-10 sm:h-5" 
                                    @click="hanledCantidadEdit('+')">
                                        <PlusIcon style="width: 18px;"></PlusIcon>
                                    </PrimaryButton>
                                    <PrimaryButton type="button" class=" mx-10 sm:h-5" 
                                    @click="hanledCantidadEdit('-')" >
                                        <MinusIcon style="width: 18px;"></MinusIcon>
                                    </PrimaryButton>
                                </div>

                                <div class="py-2">
                                    <InputLabel class="text-xl">Monto a cancelar en BS</InputLabel>
                                    <input class="w-full rounded-2xl my-2  text-center " readonly type="number"
                                        v-model="form.total">
                                     <div class="p-0 m-0 text-red-500" v-if="form.errors.total">{{ form.errors.total }}</div>
                                </div>

                            </div>

                            <div class="flex justify-between">
                                <div class="border p-2 mx-2">Tasa {{ form.monitor_tasa.title }}: {{ form.tasa }} Bs</div>
                                <div class="border p-2 mx-2">Costo por voleto: 2$</div>
                            </div>

                            <!-- Fecha de pago -->
                            <InputLabel class="text-xl">Fecha de pago</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="date" v-model="form.payment_date">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.payment_date">{{ form.errors.payment_date }}</div>
                            <!-- Teléfono-->
                            <InputLabel class="text-xl">Método de pago</InputLabel>
                            <select class="rounded-2xl my-2 w-full" id="select_metodo_pago"
                                v-model="form.payment_method_id"
                                
                                @change="abrirModalDeMetodoDePagos(form.payment_method_id)">
                                <option disabled value="0" >SELECCIONE MÉTODO DE PAGO</option>
                                <option v-for="item in metodosDePagos" :key="item.id" :value="item.id" >
                                    {{ item.name }} 
                                </option>

                            </select>
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.payment_method_id">{{ form.errors.payment_method_id }}</div>
                            <button v-if="!form.modalInfoMetodoPago" 
                                type="button"
                                @click="abrirModalDeMetodoDePagos(form.payment_method_id)"
                                class="w-full text-center ease-in duration-300 bg-gray-950 hover:bg-orange-700 shadow-lg  shadow-green-500/50 rounded-lg p-2 my-2 text-white text-sm text-center">
                                Ver datos de pago
                            </button>
                            
                            
                            <InputLabel class="text-xl">Agrega capture o vauche de pago</InputLabel>
                            <input class="rounded-2xl my-2 p-4 w-full block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-green-50 file:text-black-700
                                        hover:file:bg-orange-100" accept="image/*"  type="file"
                            @input="form.file = $event.target.files[0]" 
                            >
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.file">{{ form.errors.file }}</div>
                            
                            <InputLabel class="text-xl">Número de referencia del pago</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="number" v-model="form.reference_number"
                            placeholder="Ingrese número de referencia">
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.reference_number">{{ form.errors.reference_number }}</div>

                                <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                {{ form.progress.percentage }}%
                                </progress>

                            <!-- submit -->

                            <button
                           
                                class="w-full text-center ease-in duration-300 bg-green-500 hover:bg-orange-700 shadow-lg  shadow-green-500/50 rounded-lg p-2 my-2 text-white text-2xl text-center">
                                Registrar pago
                            </button>

                        </form>

                    </div>

                    <!-- Modal de información de método de pago -->
                    <div v-if="form.modalInfoMetodoPago" class="p-4 m-5 xs:p-0 rounded fixed top-10">

                        <div class=" p-6 max-w-sm mx-auto bg-gray-950 rounded-xl shadow-lg flex items-center space-x-0">
                            <div class="p-2">
                                <div class="text-2xl font-medium text-white text-center">Datos del método:</div>
                                <p class="text-slate-950 text-2xl text-center text-white "> 
                                    {{ metodosDePagos[form.payment_method_id - 1].name }}
                                </p>

                                <!-- TELEFONO -->
                                <p class="text-slate-300 text-center"> {{ metodosDePagos[form.payment_method_id - 1].phone ?
                                    "Teléfono" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    metodosDePagos[form.payment_method_id - 1].phone ?
                                    metodosDePagos[form.payment_method_id - 1].phone : "" }}</p>
                                <!--CIERRE TELEFONO -->


                                <p class="text-slate-300  text-center">{{ metodosDePagos[form.payment_method_id - 1].account ?
                                    "Cuenta Bancaria" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    metodosDePagos[form.payment_method_id - 1].account ?
                                    metodosDePagos[form.payment_method_id - 1].account : "" }}</p>


                                <p class="text-slate-300  text-center">{{
                                    metodosDePagos[form.payment_method_id - 1].account_type ?
                                    "Tipo de cuenta" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    metodosDePagos[form.payment_method_id - 1].account_type ?
                                    metodosDePagos[form.payment_method_id - 1].account_type : "" }}</p>


                                <p class="text-slate-300  text-center">{{ metodosDePagos[form.payment_method_id - 1].bank ?
                                    "Banco" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    metodosDePagos[form.payment_method_id - 1].bank ?
                                    metodosDePagos[form.payment_method_id - 1].bank : "" }}</p>

                                <p class="text-slate-300 text-center">{{ metodosDePagos[form.payment_method_id - 1].bank_code
                                    ?
                                    "Código" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    metodosDePagos[form.payment_method_id - 1].bank_code ?
                                    metodosDePagos[form.payment_method_id - 1].bank_code : "" }}</p>


                                <p class="text-slate-300 text-center">{{ metodosDePagos[form.payment_method_id - 1].card_id ?
                                    "Documento de identidad" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    metodosDePagos[form.payment_method_id - 1].card_id ?
                                    metodosDePagos[form.payment_method_id - 1].card_id : "" }}</p>

                                <p class="text-center text-white">
                                    <button class="bg-red-600 p-2 m-2 rounded-xl "
                                    @click="cerrarModalInfoMetodoPago()"
                                    >Cerrar</button>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    </section>




</ClientLayout>
</template>
