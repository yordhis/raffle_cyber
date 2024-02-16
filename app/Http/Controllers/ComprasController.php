<?php

namespace App\Http\Controllers;

use App\Mail\GraciasMailable;
use App\Mail\NotificarMailable;
use Illuminate\Support\Facades\Mail;
use App\Models\{
    Compras, 
    Cliente,
    Helper,
    MethodPayment,
    Raffle,
};
use Illuminate\Http\Request;
use Inertia\Inertia;

class ComprasController extends Controller
{
    public function index()
    {
        return Inertia::render('LandingPage/Raffle');
    }

    public function getFormPago($idRaffle)
    {
        $raffle = Raffle::find($idRaffle);
        if(!$raffle) return to_route('page.index');

        $methodPayments = MethodPayment::orderBy('created_at', 'desc')->get();
        return Inertia::render('LandingPage/Pago', [
            "raffle" => $raffle,
            "methodPayments" => $methodPayments,
        ]);
    }

    public function getFinalizado($idCompra)
    {

        $compra = Compras::find($idCompra);
        $datosDeCompra = [
            "client" => Cliente::find($compra['client_id']),
            "sorteo" => Raffle::find($compra['raffle_id']),
            // "payment_method" => MethodPayment::find($compraValidada['payment_method_id']),
            "data" => $compra
        ];

        return Inertia::render('LandingPage/Finalizado',[
            "compra" => $datosDeCompra
        ]);
    }

    public function store(Request $request)
    {
       
        $compraValidada = $request->validate([
            // Data Cliente
            'name' => 'required | max:255',
            'card_id' => 'required | numeric',
            'phone' => 'required | max:50',
            'email' => 'required | email',
            
            // Data Pago
            // 'order_code' => 'required | unique:compras', 
            // 'client_id' => 'required | numeric', 
            'raffle_id' => 'required | numeric', 
            'tasa' => 'required | numeric', 
            'total' => 'required | numeric', 
            'amount' => 'required | numeric', 
            'payment_date' => 'required | date',
            'payment_method_id' => 'required | numeric', 
            'file' => 'required', 
            'reference_number' => 'required | numeric',  
        ]);
      
        $compraValidada['file'] = Helper::setFile($request, 'captures');

        // Crear cliente
        $cliente = Cliente::firstOrCreate(
            [
                "card_id" => $compraValidada['card_id'],
            ],
            [
                "name" => $compraValidada['name'],
                "card_id" => $compraValidada['card_id'],
                "phone" => $compraValidada['phone'],
                "email" => $compraValidada['email']
            ]
        );

        if($cliente){
            $compra = Compras::create([
                'order_code' => Helper::getCodigo('compras', 'order_code'), 
                'client_id' => $cliente->id, 
                'raffle_id' => $compraValidada['raffle_id'], 
                'tasa' => $compraValidada['tasa'],
                'total' => floatval($compraValidada['total']), 
                'amount' => intval($compraValidada['amount']), 
                'payment_date' => $compraValidada['payment_date'],
                'payment_method_id' => $compraValidada['payment_method_id'],
                'file' => $compraValidada['file'], 
                'reference_number' => $compraValidada['reference_number'], 
            ]);

            /** Enviar correo */
            Mail::to($request->email)
            ->send( new GraciasMailable);
    
            $data = [
                "name" => $request->name,
                "end_date" => Raffle::find($request->raffle_id)->end_date,
                "title" => Raffle::find($request->raffle_id)->title,
                "amount" => $request->amount,
                "total" => $request->total
            ];
            Mail::to('adminitradorDeJaviierdu@gmail.com')
            ->send( new NotificarMailable($data));
    
            /** Redireccionar a la vista finalizar */
            return to_route('compras.finalizada', $compra->id);
        }


    }

}
