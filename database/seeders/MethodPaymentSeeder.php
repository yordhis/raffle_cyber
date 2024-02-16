<?php

namespace Database\Seeders;

use App\Models\MethodPayment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MethodPaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $metodosDePagos = [
            [
                'method_name'=> "Pago Movil",
                'phone'=> "0414-3534569",
                'account'=> null,
                'account_type'=> null,
                'bank'=> "Banco de Venezuela",
                'bank_code'=> "0102",
                'card_id'=> "24823972",
            ],
            [
                'method_name'=> "Transferencia",
                'phone'=> null,
                'account'=> "01054578124512456352",
                'account_type'=> "Corriente",
                'bank'=> "Banco Mercantil",
                'bank_code'=> "0105",
                'card_id'=> "24823972",
            ]
        ];

        foreach ($metodosDePagos as $key => $meth) {
            $methodNew = new MethodPayment($meth);
            $methodNew->save();
        }
    }
}
