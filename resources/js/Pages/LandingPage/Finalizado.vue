<script setup>
import ClientLayout from "@/Layouts/ClientLayout.vue";
import Footer from "@/Components/Home/Footer.vue";
import { useForm } from "@inertiajs/vue3";
import BarraDePorcentaje from "@/Components/Partials/BarraDePorcentaje.vue";

import "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js";

const props = defineProps({
    compra: { type: Object },
});

const form = useForm({
    idRaffle: props.compra.data.raffle_id,
});

// CONFETI
let triangle = confetti.shapeFromPath({ path: "M0 10 L5 0 L10 10z" });
let scalar = 2;
let EmojiOne = confetti.shapeFromText({ text: "🥳", scalar });
let EmojiTwo = confetti.shapeFromText({ text: "🎉", scalar });

function startConfetti(long) {
    const angleVal = typeof long === "number" ? long : 90;

    confetti({
        particleCount: 100,
        angle: 90,
        startVelocity: 45,
    });
    confetti({
        particleCount: 100,
        angle: 150,
        startVelocity: 45,
    });

    confetti({
        shapes: [EmojiOne],
        scalar,
        angle: angleVal,
    });
    confetti({
        shapes: [EmojiTwo],
        scalar,
        angle: angleVal + 60,
    });
}
startConfetti();

function getConfeti(long) {
    startConfetti(long);
}

function getComprar() {
    form.get(route("compras.comprar", form.idRaffle));
}
</script>

<template>
    <ClientLayout title="Finalizado">
        <div class="flex-colum justify-center text-center p-4">
            <h1 class="mt-20 text-4xl text-white">
                ¡Ya casi estas participando!
            </h1>
            <span
                class="box-decoration-slice bg-gradient-to-r from-verde-600 to-pink-500 text-white px-2 text-4xl"
            >
                {{ compra.client.name.toUpperCase() }}
            </span>

            <p class="text-verde-400 text-2xl">
                Estamos verificando la transacción de tu pago. Una vez que el
                pago sea confirmado por nuestro sistema, te enviaremos
                inmediatamente tus ¡BOLETOS GANADORES! al correo electrónico
                suministrado. ¡Mucha suerte!
            </p>

            <button
                @click="getConfeti(45)"
                class="p-4 mt-2 bg-verde-600 rounded-xl shadow-sm hover:bg-neutral-900 sm:border"
            >
                🥳 ¡Mas confeti! 🥳
            </button>

            <button
                @click="getComprar()"
                class="p-4 mt-2 bg-verde-600 border-collapse rounded-xl shadow-sm hover:bg-neutral-900 sm:border"
            >
                🎟️ ¡Comprar mas boletos! 🎟️
            </button>

            <BarraDePorcentaje
                title="¡Total de boletos vendidos!"
                :limit_number="compra.sorteo.limit_number"
                :total_sold="compra.sorteo.total_sold"
            />
        </div>
    </ClientLayout>
</template>

<style></style>
