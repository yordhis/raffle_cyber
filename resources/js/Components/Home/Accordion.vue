<script setup>
import { ref } from "vue";

const show = ref(false);

const props = defineProps({
    title: String,
});
</script>

<template>
       <!-- component -->
       <div class="my-3 space-y-2">
        
        <div
            class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
            tabindex="1"
        >
            <div class="flex cursor-pointer items-center justify-between"
            @click="show = !show">
                <span> {{  title }} </span>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                    :class="show ? 'h-2 w-3 transition-all duration-500 group-focus:-rotate-180' 
                                 : 'h-2 w-3 transition-all duration-500 group-focus:-rotate-360'
                    "
                />
            </div>
            <div
            :class="show ? ' h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000'
                         : 'h-auto max-h-0 items-center transition-all duration-1000 opacity-0 group-focus:invisible  ' 
            "
            >
                <slot></slot>
            </div>
        </div>


        </div>
</template>

<style></style>