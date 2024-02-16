<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Boleto extends Model
{
    use HasFactory;
    protected $fillable = [
        'client_id', 
        'raffle_id', 
        'lottery_number'
    ];
}
