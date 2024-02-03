<script setup>
    import { computed, useSlots} from 'vue';
    import { useForm } from '@inertiajs/inertia-vue3';
    // import { useForm } from '@inertiajs/vue3'


    defineProps({
        clases: String
    });

    

const form = useForm({
    name: String,
    card_id: String,
    email: String,
    phone: String,
})


</script>


<template>
  

    <form  @submit.prevent="form.post('clientes.store')" >
        <!--Sign in section-->
        <div class="flex flex-col items-center justify-center lg:justify-start ">
            <p class="mb-2 text-2xl">
                <slot name="title" />
            </p>
        </div>

        <div :class="clases ? clases : 'flex flex-col bg-indigo-100 items-center justify-center lg:justify-start' ">
             
            <slot/>
    
            <!-- Login button -->
            <div class="text-center lg:text-left">
                <button
                type="button"
                class="inline-block rounded bg-indigo-500 p-2 text-white"
                data-te-ripple-init
                data-te-ripple-color="light"
               
                >
                <slot  name="accionar" />
                </button>
    
            </div>
        </div>
        
   

    </form>


</template>



<style></style>