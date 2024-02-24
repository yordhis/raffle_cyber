<?php

namespace App\Http\Controllers;

use App\Models\Raffle;
use App\Http\Requests\StoreRaffleRequest;
use App\Http\Requests\UpdateRaffleRequest;
use App\Models\Helper;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class RaffleController extends Controller
{
  
    public function index()
    {
        $raffles = Raffle::orderBy('start_date','asc')->get();
        return Inertia::render('Admin/Sorteo/Index', [
            "raffles" => $raffles
        ]);
    }
    public function getRaffles()
    {
        $raffles = Raffle::orderBy('start_date','asc')->get();
        return $raffles;
    }

    public function create()
    {
        return Inertia::render('Admin/Sorteo/Create');
    }


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

            return to_route('raffles.index');
            
       
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
      
        return Inertia::render('Admin/Sorteo/Edit', ['raffle' => $raffle]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Raffle $raffle)
    {
  
        
        $sorteoValidado = $request->validate([
            "title" => "required | max:255",
            "description" => "required",
            "cost" => "required | numeric",
            "start_date" => "required | date",
            "end_date" => "required | date",
            "limit_number" => "required | numeric",
            "minimum_purchese" => "required | numeric",
            "file" => ""
        ]);
        
        if($request->file) {
            return $sorteoValidado;
            $sorteoValidado['file'] = Helper::setFile($request, 'sorteos');
            Helper::removeFile($raffle->file);
        }else{
            $sorteoValidado['file'] = $raffle->file;
        }
        
        $raffle->update($sorteoValidado);
        
        return to_route('raffles.index');

    }

    public function updateStatus( $id )
    {
        $resultado = Raffle::where('id', $id)->update([ "status" => !Raffle::find($id)->status]);
        to_route('raffles.index');
     
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Raffle $raffle)
    {
        Helper::removeFile($raffle->file);
        $raffle->delete();
        to_route('raffles.index');
    }
}
