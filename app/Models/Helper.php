<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Helper extends Model
{

    /**
     * Creador de vectores o talonario de rifa
     * @param totalVector number int - Recibe la cantidad de números o matrises a genrar
     * @param format string - Recibe el formato o longitud de digitos de los numeros de la tickera
     * 
     * @return vectorRaffle array numeric out: [0000,0001,...]
     */
    public static function setVector($totalVector, $format = "0000")
    {
        $vectorRaffle = [];
        for ($i = 0; $i <= $totalVector; $i++) {
            $ticket = strlen($i) == 1 ? "000" . $i
                : substr($format, strlen($i),  strlen($i)) . $i;
            array_push($vectorRaffle,  $ticket);
        }
        return $vectorRaffle;
    }

    /** 
     * Marcar los ticket como vendidos y retorn un nuevo array con los tickets vendidos
     * @param ticketSold array_number - se obtiene de la DB y debe ser un array de numeros
     * @param vectorRaffle array 
     * @return vectorRaffle array
     */
    public static function setMarkSold($ticketSold, $vectorRaffle)
    {
        foreach ($ticketSold as $key => $tick) {
            $vectorRaffle[$tick] = "sold";
        }
        return $vectorRaffle;
    }

    /**
     * obtener la cantidad de los tickets disponibles
     * @param vectorRaffle array 
     * @return number int
     */
    public static function getTicketAviables($vectorRaffle)
    {
        $counter = 0;
        foreach ($vectorRaffle as $key => $ticket) if ($ticket != 'sold') $counter++;
        return $counter;
    }

    /**
     * Asignador de ticket del sorteo
     * @param amount number int - Recibe la cantidad de números a asignar 
     * @param vectorRaffle array - Recibe el talonario o tickera
     * @return arrayTicketAssign array - Retorna los tickets asignados al cliente 
     */
    public static function setAssignTicket($amount, $vectorRaffle)
    {
        // print_r($vectorRaffle);
        $arrayTicketAssign = [];
        $numberAssign = 0;
        $amountAviableOfTicket = Helper::getTicketAviables($vectorRaffle);

        if ($amount >= $amountAviableOfTicket) return false; // Esto hace referencia a que se terminaron los tickets o que la cantidad solicitada sobrepasa la disponible

        do {
            for ($i = 0; $i < $amount - $numberAssign; $i++) {
                $ticket = mt_rand(0, count($vectorRaffle) - 1);
                if ($vectorRaffle[$ticket] != 'sold' && $vectorRaffle[$ticket] != 'assign') {
                    array_push($arrayTicketAssign, $vectorRaffle[$ticket]);
                    $vectorRaffle[$ticket] = "assign";
                    $numberAssign++;
                }
            }
        } while ($numberAssign < $amount);

        return $arrayTicketAssign;
    }


    public static function getCodigo($table, $campo)
    {
        $codigo = "00000000";
        $ultimoCodigo = DB::table($table)->max($campo);
        if ($ultimoCodigo) {
            $nuevoCodigo = intval($ultimoCodigo) + 1;
            $codigo = Str::substr("00000000", Str::length($nuevoCodigo), Str::length($codigo)) . $nuevoCodigo;
        } else {
            $codigo = Str::substr($codigo, 1, Str::length($codigo)) . "1";
        }
        return $codigo;
    }

    /**
     * Esta funcion se encarga de guardar la imagen en el store en la direccion public/fotos
     * recibe los siguientes parametros
     * @param request  Estes es el elemento global de las peticiones y se accede a su metodo file y atributo file
     * @return url Retorna la direccion donde se almaceno la imagen
     */
    public static function setFile($request, $directory)
    {
        // Movemos la imagen a storage/app/public/fotos
        $imagen = $request->file('file')->store("public/{$directory}");

        // configuramos la url de /public a /storage
        $url = Storage::url($imagen);

        // Retorna la URL de la imagen
        return $url;
    }

    /**
     * Eliminamos la imagen o archivo anterior
     * @param url se solicita la url del archivo para removerlo de su ubicacion
     */
    public static function removeFile($url)
    {
        $paths = str_replace('storage', 'public', $url);
        if (Storage::delete($paths)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param range_a number
     * @param range_b number
     * @param generateAmount number 
     * - Esto hace referencia a la cantidad de ticket que se van a generar
     * @param format string 
     * - Esto hace referencia en que formato lo desea si de 4 digitos o de 6
     * 
     * @return array  out: [0015,9563]
     */
    public static function getRandomNumberOFTicket($range_a, $range_b, $generateAmount = 2, $format = "0000")
    {
        $arrayTicket = [];
        for ($i = 0; $i < $generateAmount; $i++) {
            $numberTicket = mt_rand($range_a, $range_b);
            $codigo = Str::substr($format, Str::length($numberTicket), Str::length($numberTicket)) . $numberTicket;
        }
    }
}
