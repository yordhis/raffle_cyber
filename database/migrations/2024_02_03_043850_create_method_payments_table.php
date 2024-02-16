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
        Schema::create('method_payments', function (Blueprint $table) {
            $table->id();
            $table->string('method_name', 255);
            $table->string('phone', 55)->nullable();
            $table->string('account', 55)->nullable(); // numero de cuenta o correo zelle
            $table->string('account_type', 155)->nullable();
            $table->string('bank', 255)->nullable();
            $table->string('bank_code', 8)->nullable();
            $table->string('card_id', 55);
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('method_payments');
    }
};
