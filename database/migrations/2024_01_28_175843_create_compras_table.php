<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('compras', function (Blueprint $table) {
            $table->id();
            $table->string('order_code', 11); // codigo de orden de compra
            $table->string('client_id', 11); // quien compra
            $table->string('raffle_id', 11); // que rifa compro
            $table->string('tasa', 11); // tasa del pago
            $table->string('total', 11); // total a pagar
            $table->string('amount', 11); // cantidad de ticket comprados
            $table->string('payment_date', 55); // fecha de pago
            $table->string('payment_method_id', 11); // metodo de pago
            $table->string('reference_number', 12); // numero de refenrecia
            $table->text('file'); // capture del pago
            $table->string('payment_status', 12)->default(0); // 1= pagado 0=Por confirmar 2=Se rechaso  el pago
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('compras');
    }
};
