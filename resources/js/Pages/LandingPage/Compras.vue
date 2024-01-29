<script setup>
import ClientLayout from '@/Layouts/ClientLayout.vue';
import Footer from '@/Components/Home/Footer.vue';
import CustomFormSection from "@/Components/ComponentForm/CustomFormSection.vue";
import CustomInput from "@/Components/ComponentForm/CustomInput.vue";



</script>

<template><ClientLayout title="Registrar">

    
        <template #header>

            <div class="w-full  dark:bg-neutral-600">
                <label for="progreso">¡Estas en el primer paso! Registrate</label>
                <div
                    class="bg-indigo-500 rounded p-0.5 text-center  font-medium leading-none text-white text-2xl"
                    style="width: 25%">
                    25%
                </div>
    
            </div>

        </template>

  <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 

    <section class="">
        <div class="h-full">
            <!-- Left column container with background-->
            <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div
                    class="shrink-1  grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                    <img
                    src="/assets/images/ferrari_new.png"
                    class="w-full"
                    alt="Premio" />
                </div>

            <!-- Formulario -->
                <div class=" md:mb-0 md:w-6/12 lg:w-6/12 xl:w-6/12">
                    <CustomFormSection clases="flex flex-col bg-white items-center justify-start lg:justify-start rounded-xl m-3 p-3">
                        <template #title>
                            Registra tus datos de contacto
                        </template>

                        <!-- Inputs -->
                        <CustomInput placeholder="Ingrese nombre completo" type="text" nameInput="name">
                            <template #title>Nombre Completo</template>
                        </CustomInput>
                        <CustomInput placeholder="Ingrese Cédula o Rif" type="number" nameInput="card_id">
                            <template #title>Cédula o Rif</template>
                        </CustomInput>
                        <CustomInput placeholder="Ingrese número de teléfono" type="text" nameInput="phone">
                            <template #title>Teléfono</template>
                        </CustomInput>
                        <CustomInput placeholder="Ingrese correo electrónico" type="text" nameInput="email">
                            <template #title>Correo electrónico</template>
                        </CustomInput>


                        <!-- Cierre Inputs -->
                     

                        <template #accionar>
                            Guardar y continuar
                        </template>
                    </CustomFormSection>
                </div>
            </div>
        </div>
    </section>




</ClientLayout></template>
