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
            $table->string('order_code', 11);
            $table->string('client_id', 11);
            $table->string('raffle_id', 11);
            $table->string('tasa', 11);
            $table->string('total', 11);
            $table->string('payment_date', 55);
            $table->string('payment_method_id', 11);
            $table->string('reference_number', 12);
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
