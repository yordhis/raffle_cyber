<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Http\Requests\StoreClienteRequest;
use App\Http\Requests\UpdateClienteRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClienteController extends Controller
{
  
    public function index()
    {
        $clientes = Cliente::orderBy('id', 'desc')->paginate(5);
        return Inertia::render('Admin/Clients/Index', [ 'clients' => $clientes ]);
    }

  
    public function create()
    {
        return Inertia::render('LandingPage/RegistrarCliente');
    }


    public function store(Request $request)
    {
     
        $dataVadidate = $request->validate([
            'name' => 'required | max:255',
            'card_id' => 'required | numeric | unique:clientes',
            'phone' => 'required | max:50',
            'email' => 'required | email'
        ]);

        $cliente = new Cliente($dataVadidate);
        $cliente->save();
        return to_route('clientes.index');


    }

  
    public function show(Cliente $cliente)
    {
        //
    }

    public function edit(Cliente $cliente)
    {
        //
    }

    public function update(Request $request, Cliente $cliente)
    {

        $dataVadidate = $request->validate([
            'name' => 'required | max:255',
            'card_id' => 'required | numeric',
            'phone' => 'required | max:50',
            'email' => 'required | email'
        ]);

        $cliente->update($request->input());
        return to_route('clientes.index');
    }

    public function destroy(Cliente $cliente)
    {
        $cliente->delete();
        return to_route('clientes.index');
    }
}
