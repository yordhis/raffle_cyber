<template>
    <div class="relative mb-6" data-te-input-wrapper-init>
        <label :for="nameInput" 
        :class="clasesInput ? clasesInput :'peer block rounded'">
           <slot name="title"/>
        </label>
                <input
                :type="type"
                :class="clasesInput ? clasesInput :'peer block rounded border'"
                :id="nameInput"
                :name="nameInput"
                :placeholder="placeholder" />
    </div>

</template>

<script setup>

    defineProps({
        nameInput:String,
        placeholder:String,
        type: String,
        clasesInput: String,
        clasesLabel: String,
    });
</script>