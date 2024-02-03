<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compras extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_code', 
        'client_id', 
        'raffle_id', 
        'tasa', 
        'total', 
        'payment_date',
        'payment_method_id', 
        'reference_number', 
        'payment_status', 
    ];
}
