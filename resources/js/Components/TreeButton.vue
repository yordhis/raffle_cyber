<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button
        :type="type"
        class="w-full items-center my-1 px-4 py-6 bg-verde-600 border border-verde-600 rounded-md font-black text-2xl text-white uppercase tracking-widest shadow-sm hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-25 "
    >
        <slot />
    </button>
</template>
