<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MethodPayment extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 
        'titular', 
        'phone',
        'account',
        'account_type',
        'bank',
        'bank_code',
        'card_id'
    ];
}
