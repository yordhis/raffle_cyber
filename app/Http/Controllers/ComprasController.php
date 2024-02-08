<?php

namespace App\Http\Controllers;

use App\Models\Compras;
use App\Http\Requests\StoreComprasRequest;
use App\Http\Requests\UpdateComprasRequest;
use App\Models\Cliente;
use App\Models\Helper;
use App\Models\MethodPayment;
use App\Models\Raffle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ComprasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('LandingPage/Raffle');
    }

    public function getFormPago()
    {
        return Inertia::render('LandingPage/Pago');
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
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
        }

        // $datosDeCompra = [
        //     "client" => Cliente::find($compraValidada['client_id']),
        //     "raffle" => Raffle::find($compraValidada['raffle_id']),
        //     // "payment_method" => MethodPayment::find($compraValidada['payment_method_id']),
        //     "data" => $compra
        // ];

        return to_route('compras.finalizada', $compra->id);
        // return Inertia::render('LandingPage/Finalizado', [
        //     "compra"=>$datosDeCompra
        // ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Compras $compras)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Compras $compras)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateComprasRequest $request, Compras $compras)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Compras $compras)
    {
        //
    }
}
