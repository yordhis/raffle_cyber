<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MethodPayment extends Model
{
    use HasFactory;
    protected $fillable = [
        'method_name', 
        'phone',
        'account',
        'account_type',
        'bank',
        'bank_code',
        'card_id'
    ];
}
