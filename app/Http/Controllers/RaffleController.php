<?php

namespace App\Http\Controllers;

use App\Models\Raffle;
use App\Http\Requests\StoreRaffleRequest;
use App\Http\Requests\UpdateRaffleRequest;
use App\Models\Helper;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class RaffleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $raffles = Raffle::all();
        return Inertia::render('Admin/Sorteo/Index', [
            "raffles" => $raffles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Sorteo/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
            $sorteoValidado = $request->validate([
                "title" => "required | max:255",
                "description" => "required",
                "cost" => "required | numeric",
                "start_date" => "required | date",
                "end_date" => "required | date",
                "limit_number" => "required | numeric",
                "minimum_purchese" => "required | numeric",
                "file" => "required"
            ]);

            $sorteoValidado['file'] = Helper::setFile($request, 'sorteos');
            
            $resultado = Raffle::create($sorteoValidado);
            if( $resultado ):
                $mensaje = "El sorteo se creo correctamente y esta activo."; 
                $responseHttp = Response::HTTP_CREATED;
            else:
                $mensaje = "El sorteo NO se creo, vuelve a intentar."; 
                $responseHttp = Response::HTTP_FOUND;
            endif;
            
            $respuesta = [
                "mensaje" => $mensaje,
                "estatus" => $responseHttp,
            ];

            return Inertia::render('Admin/Sorteo/Index', ["respuesta"=>$respuesta]);
            
       
    }

    /**
     * Display the specified resource.
     */
    public function show(Raffle $raffle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Raffle $raffle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRaffleRequest $request, Raffle $raffle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Raffle $raffle, $id)
    {
        
        Raffle::where('id', $id)->delete();

        to_route('sorteos.index');
    }
}
