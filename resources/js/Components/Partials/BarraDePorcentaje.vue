<script setup>
const props = defineProps({
    title:String,
    total_sold: Number,
    limit_number: Number,
});
</script>

<template>
    <div class="w-full">
        <label for="progreso" class="text-white py-5"> {{ title }} </label>
        <div class="w-100 border rounded-2xl p-1 my-2 animate-pulse ">
            <div class="bg-orange-500 rounded-2xl text-center text-white"
                :style="'width:' + total_sold * 100 / limit_number + '%;'">{{
                    ( total_sold * 100 / limit_number ).toFixed(2) }}%</div>
        </div>
    </div>
</template>

<style>
</style>