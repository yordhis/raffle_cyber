<?php

namespace App\Http\Controllers;

use App\Models\Compras;
use App\Http\Requests\StoreComprasRequest;
use App\Http\Requests\UpdateComprasRequest;
use App\Models\Cliente;
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
        return Inertia::render('LandingPage/RegistrarCliente');
    }
    
    public function getFormParticipar()
    {
        return Inertia::render('LandingPage/Raffle');
        
    }

    public function getFormPago()
    {
        return Inertia::render('LandingPage/Pago');
    }

    public function getFinalizado()
    {
        return Inertia::render('LandingPage/Finalizado');
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
            'order_code' => 'required | unique:compras', 
            'client_id' => 'required | numeric', 
            'raffle_id' => 'required | numeric', 
            'tasa' => 'required | numeric', 
            'total' => 'required | numeric', 
            'payment_date' => 'required | date',
            'payment_method_id' => 'required | numeric', 
            'reference_number' => 'required | numeric',  
        ]);

        Compras::create($compraValidada);

        // $datosDeCompra = [
        //     "client" => Cliente::find($compraValidada['client_id']),
        //     "raffle" => Raffle::find($compraValidada['raffle_id']),
        //     "payment_method" => MethodPayment::find($compraValidada['payment_method_id']),
        //     "data" => $compraValidada
        // ];


        Inertia::render('LandingPage/Finalizado');

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
