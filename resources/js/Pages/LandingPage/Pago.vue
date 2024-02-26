<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';
import { useForm } from '@inertiajs/vue3';
import InputLabel from '@/Components/Partials/InputLabelCustom.vue';
import { getMonitor } from "consulta-dolar-venezuela";
import { PlusIcon, MinusIcon } from '@heroicons/vue/20/solid';
import MovilButton from '@/Components/Partials/MovilButton.vue';
import TextInputLabel from '@/Components/TextInputLabel.vue';
const props = defineProps({
    raffle: { type: Object },
    methodPayments: { type: Object },
});



const form = useForm({
    // data Cliente
    name: null,
    card_id: null,
    phone: null,
    email: null,
    //data pago
    raffle_id: props.raffle.id,
    amount: 2,
    total: 0,
    tasa: 0,
    payment_method_id: 0,
    file: null,
    reference_number: null,
    // esto no se va almacenar
    monitor_tasa: {},
    sorteo: props.raffle.title,
    modalInfoMetodoPago: false,
    btnDisabled: false
});

const getTasa = async (elemento) => {
    await getMonitor("BCV", "lastUpdate").then(res => {
        elemento.monitor_tasa = res.bcv
        localStorage.setItem('tasa', res.bcv.price);
    }).catch(err => {
        console.log(err)
        getTasa(elemento);
    });

    elemento.tasa == 0 ? elemento.tasa = parseFloat(localStorage.getItem('tasa'))
        : elemento.tasa;

    elemento.total = parseFloat(elemento.tasa) * elemento.amount;
};
// Configuramo la tasa y el total
getTasa(form);

/** Validamos la cantidad */
const hanledCantidad = (elemento) => {
    if (elemento.amount < 2) return elemento.amount = 2;
    else elemento.total = (parseFloat(elemento.tasa) * elemento.amount).toFixed(2);
};

const cerrarModalInfoMetodoPago = () => form.modalInfoMetodoPago = false;
const abrirModalDeMetodoDePagos = (idMetodo) => {
    idMetodo ? form.modalInfoMetodoPago = true
        : form.modalInfoMetodoPago = false;
};

const hanledCantidadEdit = (accion) => {
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


        <section class="">
            <div class="h-full">

                <div class="flex justify-center flex-wrap">
                    <div class="rounded-2xl p-1 mx-5 my-5">
                        <form @submit.prevent="form.post('/compras')" novalidate>
                            <h1 class="text-4xl text-center text-orange-400">Comprar Boleto</h1>
                            <!-- Sorteo -->
                            <p class="p-2 my-2 text-indigo-100 text-center border-dashed border-2 border-orange-400">
                                {{ form.sorteo }}
                            </p>

                            <!-- Id del sorteo (id_raffle) -->
                            <input class="" readonly type="hidden" v-model="form.raffle_id">
                            <div v-if="form.errors.raffle_id">{{ form.errors.raffle_id }}</div>

                            <!-- Nombre -->
                            <div class="inputBox mt-6">
                                <input class="" type="text" v-model="form.name" required="required">
                                <span class="">Nombre completo</span>
                            </div>
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.name">{{ form.errors.name }}</div>

                            <!-- Cedula -->
                            <div class="inputBox mt-6">
                                <input class="" type="text" v-model="form.card_id" required="required">
                                <span class="">Rif o número de identificación</span>
                            </div>
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.card_id">{{ form.errors.card_id }}</div>

                            <!-- Teléfono-->
                            <div class="inputBox mt-6">
                                <input class="" type="text" v-model="form.phone" required="required">
                                <span class="">N° de teléfono</span>
                            </div>
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.phone">{{ form.errors.phone }}</div>

                            <!-- Correo -->
                            <div class="inputBox mt-6">
                                <input  type="email" v-model="form.email" required="required">
                                <span>Correo eletrónico</span>
                            </div>
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.email">{{ form.errors.email }}</div>

                            <!-- Cantidad de ticket -->
                            <div class="sm:flex sm:justify-between ">

                                <div class="inputBox mt-6">
                                    <input class="" type="number" @input="hanledCantidad(form)" v-model="form.amount"
                                        required="required">
                                    <span class="">Cantidad de voletos</span>
                                </div>
                                <div class="p-0 m-0 text-red-500" v-if="form.errors.amount">{{ form.errors.amount }}</div>

                                <!-- Botones para screen movil -->
                                <div class="flex justify-between sm:invisible mt-2">
                                    <MovilButton type="button" class=" sm:h-5" @click="hanledCantidadEdit('-')">
                                        <MinusIcon style="width: 18px;"></MinusIcon>
                                    </MovilButton>
                                    <MovilButton type="button" class=" sm:h-5" @click="hanledCantidadEdit('+')">
                                        <PlusIcon style="width: 18px;"></PlusIcon>
                                    </MovilButton>
                                </div>

                                <div class="py-2">
                                    <div class="inputBox mt-2">
                                        <input class="" type="text" v-model="form.total" readonly required="true">
                                        <span class="">Total Bs</span>
                                    </div>
                                    <div class="p-0 m-0 text-red-500" v-if="form.errors.total">{{ form.errors.total }}</div>
                                </div>

                            </div>

                            <div class="flex justify-between text-white mt-4">
                                <div class="border border-orange-300 p-2">Tasa {{ form.monitor_tasa.title }}: {{ form.tasa
                                }} Bs</div>
                                <div class="border border-orange-300 p-2">Costo por voleto: 2$</div>
                            </div>

                            <!-- Método de pago -->
                            <div class="inputBox mt-6">
                                <select class="rounded-2xl my-2 w-full" id="select_metodo_pago"
                                    v-model="form.payment_method_id"
                                    @change="abrirModalDeMetodoDePagos(form.payment_method_id)">
                                    <option disabled value="0">SELECCIONE MÉTODO DE PAGO</option>
                                    <option v-for="item in methodPayments" :key="item.id" :value="item.id">
                                        {{ item.name }}
                                    </option>
                                </select>
                                <span>MÉTODO DE PAGO</span>
                            </div>
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.payment_method_id">{{ form.errors.payment_method_id }}</div>

                            <button v-if="!form.modalInfoMetodoPago && form.payment_method_id != 0" type="button"
                                @click="abrirModalDeMetodoDePagos(form.payment_method_id)"
                                class="w-full text-center ease-in duration-300 bg-gray-950 hover:bg-orange-700 shadow-lg  shadow-orange-500/50 rounded-lg p-2 my-2 text-white text-sm text-center">
                                Ver datos de pago
                            </button>

                            <!-- Subida del vauche -->
                            <div class="inputBox mt-5">
                                <input class="" accept="image/*" type="file" 
                                @input="form.file = $event.target.files[0]">
                                <span>Agregar comprobante</span>
                            </div>
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.file">{{ form.errors.file }}</div>

                            <div class="inputBox mt-6">
                                <input type="number" v-model="form.reference_number"
                                required>
                                <span>N° referencia del pago</span>
                            </div>
                            <div class="p-0 m-0 text-red-500" v-if="form.errors.reference_number">{{
                                form.errors.reference_number }}</div>

                            <progress v-if="form.progress" :value="form.progress.percentage" class="w-full" max="100">
                                {{ form.progress.percentage }}%
                            </progress>

                            <!-- submit -->

                            <button
                                class="mt-4 w-full text-center ease-in duration-300 bg-orange-500 hover:bg-neutral-900 shadow-lg  shadow-neutral-500/50 rounded-lg p-2 my-2 text-neutral-900 text-2xl">
                                NOTIFICAR PAGO
                            </button>

                        </form>

                    </div>

                    <!-- Modal de información de método de pago -->
                    <div v-if="form.modalInfoMetodoPago" class="p-4 m-5 xs:p-0 rounded fixed top-10">

                        <div class=" p-6 max-w-sm mx-auto bg-gray-950 rounded-xl shadow-lg flex items-center space-x-0">
                            <div class="p-2">
                                <div class="text-2xl font-medium text-white text-center">Datos del método:</div>
                                <p class="text-slate-950 text-2xl text-center text-white ">
                                    {{ methodPayments[form.payment_method_id - 1].name }}
                                </p>

                                <!-- TELEFONO -->
                                <p class="text-slate-300 text-center"> {{ methodPayments[form.payment_method_id - 1].phone ?
                                    "Teléfono" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    methodPayments[form.payment_method_id - 1].phone ?
                                    methodPayments[form.payment_method_id - 1].phone : "" }}</p>
                                <!--CIERRE TELEFONO -->


                                <p class="text-slate-300  text-center">{{ methodPayments[form.payment_method_id - 1].account
                                    ?
                                    "Cuenta Bancaria" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    methodPayments[form.payment_method_id - 1].account ?
                                    methodPayments[form.payment_method_id - 1].account : "" }}</p>


                                <p class="text-slate-300  text-center">{{
                                    methodPayments[form.payment_method_id - 1].account_type ?
                                    "Tipo de cuenta" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    methodPayments[form.payment_method_id - 1].account_type ?
                                    methodPayments[form.payment_method_id - 1].account_type : "" }}</p>


                                <p class="text-slate-300  text-center">{{ methodPayments[form.payment_method_id - 1].bank ?
                                    "Banco" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    methodPayments[form.payment_method_id - 1].bank ?
                                    methodPayments[form.payment_method_id - 1].bank : "" }}</p>

                                <p class="text-slate-300 text-center">{{ methodPayments[form.payment_method_id -
                                    1].bank_code
                                    ?
                                    "Código" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    methodPayments[form.payment_method_id - 1].bank_code ?
                                    methodPayments[form.payment_method_id - 1].bank_code : "" }}</p>


                                <p class="text-slate-300 text-center">{{ methodPayments[form.payment_method_id - 1].card_id
                                    ?
                                    "Documento de identidad" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    methodPayments[form.payment_method_id - 1].card_id ?
                                    methodPayments[form.payment_method_id - 1].card_id : "" }}</p>


                                <p class="text-slate-300 text-center">{{ methodPayments[form.payment_method_id - 1].titular
                                    ?
                                    "Titular" : "" }}</p>
                                <p class="text-orange-500 text-2xl text-center">{{
                                    methodPayments[form.payment_method_id - 1].titular ?
                                    methodPayments[form.payment_method_id - 1].titular : "" }}</p>

                                <p class="text-center text-white">
                                    <button class="bg-red-600 p-2 m-2 rounded-xl "
                                        @click="cerrarModalInfoMetodoPago()">Cerrar</button>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>




    </ClientLayout>
</template>

<style></style>