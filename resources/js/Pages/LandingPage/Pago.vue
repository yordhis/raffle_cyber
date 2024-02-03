<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';
import BarraDePasos from '@/Components/Partials/BarraDePasos.vue';
import { useForm } from '@inertiajs/vue3'
import InputLabel from '@/Components/InputLabel.vue';
import { getMonitor } from "consulta-dolar-venezuela";

const metodosDePagos = [
    {
        id:1,
        name:"Pago Movil",
        phone:"0414-3534569",
        account:null,
        account_type:null,
        bank:"Banco de Venezuela",
        bank_code:"0102",
        card_id:"24823972",
    },
    {
        id:2,
        name:"Transferencia",
        phone:null,
        account:"01054578124512456352",
        account_type:"Corriente",
        bank:"Banco Mercantil",
        bank_code:"0105",
        card_id:"24823972",
    }
];

const form = useForm({
  rifa: "FERARRI", 
  client_id: 1, 
  raffle_id: 1, 
  payment_method_id: null,
  payment_date: null,
  tasa: 0, 
  amount: 2, 
  total: 0,
  monitor_tasa: {} 
})

const getTasa =  async (elemento) =>{
    await getMonitor("BCV", "lastUpdate").then(res=>{
        elemento.monitor_tasa = res.bcv
        elemento.tasa = res.bcv.price
        elemento.total = parseFloat(res.bcv.price) * elemento.amount;
    });
} 

getTasa(form)

const hanledCantidad = (elemento) =>{
    elemento.total = parseFloat(elemento.tasa) * elemento.amount;
}




</script>

<template><ClientLayout title="Realizar pago">

    
        <template #header>

           <BarraDePasos/>

        </template>

  <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 

    <section class="">
        <div class="h-full">
            <div class="flex justify-center my-2 ">
                <span class="p-2 box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white px-2 text-6xl">
                    Realizar pago
                </span>
                
            </div>
            <div class="flex justify-center">
                <div class="bg-white  rounded-2xl p-4 mx-10 my-5">
                    <form @submit.prevent="form.post('/compras')">
                            <!-- Rifa -->
                            <InputLabel class="text-xl">Premio</InputLabel>
                            <input class="rounded-2xl my-2 w-full bg-orange-500  text-center text-2xl" readonly type="text" v-model="form.rifa">
                            <input class="" readonly type="hidden" v-model="form.raffle_id">
                            <!-- <div v-if="form.errors.email">{{ form.errors.email }}</div> -->
                            
                            <!-- Cantidad de ticket -->
                            <div class="flex justify-between">
                                <div class="py-2 pr-2">
                                    <InputLabel class="text-xl">Cantidad de voletos</InputLabel>
                                    <input class="rounded-2xl my-2  text-center text-1xl" type="number" 
                                    @change="hanledCantidad(form)"
                                    v-model="form.amount">
                                    <!-- <div v-if="form.errors.password">{{ form.errors.password }}</div> -->
                                </div>
                                <div class="py-2">
                                    <InputLabel class="text-xl">Monto a cancelar en BS</InputLabel>
                                    <input class="rounded-2xl my-2  text-center " readonly type="number" v-model="form.total">
                                    <!-- <div v-if="form.errors.password">{{ form.errors.password }}</div> -->
                                </div>

                            </div>

                            <div class="flex justify-between">
                                <div class="border p-2 mx-2">Tasa {{ form.monitor_tasa.title  }}: {{ form.tasa }} Bs</div>
                                <div class="border p-2 mx-2">Costo por voleto: 2$</div>
                            </div>

                            <!-- Fecha de pago -->
                            <InputLabel class="text-xl">Fecha de pago</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="date" v-model="form.payment_date">
                            <!-- <div v-if="form.errors.password">{{ form.errors.password }}</div> -->
                            <!-- Teléfono-->
                            <InputLabel class="text-xl">Método de pago</InputLabel>
                    
                            <select class="rounded-2xl my-2 w-full" id="select_metodo_pago" 
                            v-model="form.payment_method_id"
                            >
                            <!-- <option  value="">SELECCIONE METODO DE PAGO</option> -->
                            <option v-for="item in metodosDePagos" 
                            :key="item.id"
                            :value="item.id"
                            selected
                            >{{  item.name }}</option>
                            
                            </select>

                            

                            <InputLabel class="text-xl">Número de referencia del pago</InputLabel>
                            <input class="rounded-2xl my-2 w-full" type="number" v-model="form.email">
                            <!-- submit -->
                        
                            <button class="w-full text-center ease-in duration-300 bg-green-500 hover:bg-orange-700 shadow-lg  shadow-green-500/50 rounded-lg p-2 my-2 text-white text-2xl text-center">
                                Registrar pago
                            </button>
                            
                    </form>
                    
                </div>   
                
                <div v-if="form.payment_method_id" class="p-4 m-1 rounded  w-50">
                    
                    <div class=" p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-0">
                                    <!-- <img class="h-20 w-20" src="/assets/images/payment_method_1.jpeg" alt="image-pay"> -->
                                   
                                 
                                    <div class="p-2">
                                        <div class="text-2xl font-medium text-black text-center">Datos del método:</div>
                                        <p class="text-slate-950 text-2xl text-center"> {{ metodosDePagos[form.payment_method_id-1].name }}</p>
                                        
                                        <!-- TELEFONO -->
                                        <p class="text-slate-300 text-center"> {{ metodosDePagos[form.payment_method_id-1].phone ? 
                                                                                    "Teléfono" : "" }}</p>
                                        <p class="text-orange-500 text-2xl text-center">{{ metodosDePagos[form.payment_method_id-1].phone ? 
                                                                metodosDePagos[form.payment_method_id-1].phone : "" }}</p>
                                        <!--CIERRE TELEFONO -->

                                                                
                                        <p class="text-slate-300  text-center">{{ metodosDePagos[form.payment_method_id-1].account ? 
                                                                "Cuenta Bancaria" : "" }}</p>
                                        <p class="text-orange-500 text-2xl text-center">{{ metodosDePagos[form.payment_method_id-1].account ? 
                                                                metodosDePagos[form.payment_method_id-1].account : "" }}</p>


                                        <p class="text-slate-300  text-center">{{ metodosDePagos[form.payment_method_id-1].account_type ? 
                                                                "Tipo de cuenta" : "" }}</p>
                                        <p class="text-orange-500 text-2xl text-center">{{ metodosDePagos[form.payment_method_id-1].account_type ? 
                                                                metodosDePagos[form.payment_method_id-1].account_type : "" }}</p>


                                        <p class="text-slate-300  text-center">{{ metodosDePagos[form.payment_method_id-1].bank ? 
                                                                "Banco" : "" }}</p>
                                        <p class="text-orange-500 text-2xl text-center">{{ metodosDePagos[form.payment_method_id-1].bank ? 
                                                                metodosDePagos[form.payment_method_id-1].bank : "" }}</p>

                                        <p class="text-slate-300 text-center">{{ metodosDePagos[form.payment_method_id-1].bank_code ? 
                                                               "Código" : "" }}</p>
                                        <p class="text-orange-500 text-2xl text-center">{{ metodosDePagos[form.payment_method_id-1].bank_code ? 
                                                                metodosDePagos[form.payment_method_id-1].bank_code : "" }}</p>


                                        <p class="text-slate-300 text-center">{{ metodosDePagos[form.payment_method_id-1].card_id ? 
                                                                "Documento de identidad": "" }}</p>
                                        <p class="text-orange-500 text-2xl text-center">{{ metodosDePagos[form.payment_method_id-1].card_id ? 
                                                                metodosDePagos[form.payment_method_id-1].card_id : "" }}</p>

                                    </div>
                                </div>
                                
                            </div> 
            </div>    
        </div>
    </section>




</ClientLayout></template>
