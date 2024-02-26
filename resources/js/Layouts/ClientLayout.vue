<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import { HomeIcon } from '@heroicons/vue/20/solid';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import Footer from '@/Components/Home/Footer.vue';

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};


</script>

<template>
    <div>

        <Head :title="title" />

        <Banner />

    <div class="min-h-screen bg-stone-950">

        <nav class="bg-orange-600 shadow-lg w-full">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('page.index')">
                                    <ApplicationMark class="block h-9 w-auto" />
                                </Link>
                            </div>
                        
                            <div class="space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink :href="route('page.index')"
                                class="invisible sm:visible text-white text-xl">
                                    Sorteo Activo
                                </NavLink>
                            </div>


                            
                            
                        </div>
                        <div class="mt-2">
                            <NavLink :href="route('page.index')"
                            class="visible sm:invisible text-orange-200 text-xl">
                                <HomeIcon style="width: 35px;"/>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
               
        </nav>

         

        <!-- Page Heading -->
        <header v-if="$slots.header" class="shadow ">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <slot name="header" />
            </div>
        </header>

        <!-- Page Content -->
        <main>
            <slot />
        </main>


        
    </div>
</div></template>
