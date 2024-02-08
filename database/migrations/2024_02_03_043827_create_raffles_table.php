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
        Schema::create('raffles', function (Blueprint $table) {
            $table->id();
            $table->string('title',255); // titulo
            $table->string('description',255); // Descripcion
            $table->string('cost',255); // costo por ticket
            $table->string('start_date', 55); // fecha de inicio
            $table->string('end_date', 55); // fecha de finalización
            $table->string('limit_number', 11); // limite de números
            $table->string('minimum_purchese', 11); // el minimo de compra
            $table->string('file',255); // imagen del premio
            $table->boolean('status')->default(1); // activo o inactivo el sorteo 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('raffles');
    }
};
