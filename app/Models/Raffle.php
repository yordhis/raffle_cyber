<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Raffle extends Model
{
    use HasFactory;

    protected $fillable =[
        'title', // titulo
        'description', // Descripcion
        'cost', // costo por ticket
        'start_date', // fecha de inicio
        'end_date', // fecha de finalización
        'limit_number',  // limite de números
        'minimum_purchese',  // el minimo de compra
        'file',  // IMAGEN DEL PREMIO
        'status' // activo o inactivo el sorteo
    ];
}
