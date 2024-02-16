<?php

namespace App\Http\Controllers;


use App\Mail\ConfirmadoMailable;
use App\Mail\GraciasMailable;
use App\Mail\RechazadoMailable;
use Illuminate\Support\Facades\Mail;
use App\Models\{
    Boleto,
    Compras, 
    Cliente,
    Helper,
    MethodPayment,
    Raffle,
};
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class PaymentController extends Controller
{
 
    public function index()
    {
        $payments = Compras::select(
        'compras.client_id', 'compras.raffle_id',  'compras.payment_method_id', 'compras.file as vauche','compras.*',
        'payment_date', 'compras.id as pay_id',
        'method_payments.*',
        'clientes.id', 'clientes.name', 'clientes.card_id', 'clientes.email', 'clientes.phone',
        'raffles.id', 'raffles.*'
       )
        ->join('clientes', 'clientes.id', '=','compras.client_id')
        ->join('raffles', 'raffles.id', '=','compras.raffle_id')
        ->join('method_payments', 'method_payments.id', '=','compras.payment_method_id')
        ->orderBy('order_code', 'desc')->paginate(10);

        foreach ($payments as $key => $pay) {
            $boletosArray = [];
            $boletos = Boleto::select('lottery_number')
            ->where(['client_id'=>$pay->client_id, 'raffle_id'=>$pay->raffle_id])->get();
            foreach ($boletos as $key => $bol) {
                array_push($boletosArray, $bol['lottery_number'] );
            } 
            $pay['boletos'] = implode('-',$boletosArray);
        }

        //  return $payments;
        $methods = MethodPayment::all();
        return Inertia::render('Admin/Payments/Index',[
            "payments" => $payments,
            "methods" => $methods
        ]);
    }

    public function confirmed(Request $request)
    {
       $boletosVendidosArray = [];
        /** consultar los boletos comprados */
        $boletosVendidos = Boleto::where('raffle_id', $request->raffle_id)->get();
        foreach ($boletosVendidos as $key => $boleto) {
           array_push($boletosVendidosArray, $boleto['lottery_number']);
        }
        // return $boletosVendidosArray;
        /** Creamos el talonario o vector de numeros */
        $vector = Helper::setVector($request->limit_number);

        /** Marcar los boletos vendidos */
        $vector = Helper::setMarkSold($boletosVendidosArray,$vector);
        
        /** Asignar boletos */
        $boletos =  Helper::setAssignTicket($request->amount, $vector);
        if($boletos){
            /** Actualizamos el estatus del pago a 1 = confirmado */
            Compras::where('order_code', $request->order_code)->update(['payment_status' => 1]);

            /** Guardamos los boletos en la DB como vendidos */
            foreach ($boletos as $key => $boleto) {
                Boleto::create([
                    "client_id" => $request->client_id,
                    "raffle_id" => $request->raffle_id,
                    "lottery_number" => $boleto,
                ]);
            }

            /** enviamos el correo confirmando el pago y entregando los números */
            $data = [
                "title" => $request->title,
                "description" => $request->description,
                "end_date" => $request->end_date,
                "boletos" => $boletos
            ];
            Mail::to($request->email)
            ->send(new ConfirmadoMailable($data));

            return to_route('pagos.index', [
                "message" => "Se ha confirmado el pago y enviado el correo con los números de boletos: " . implode('-', $data['boletos']),
                "status" => Response::HTTP_OK
            ]);
        }else{
            $message = "La cantidad solicitada de boletos por el 
                cliente sobrepasa la cantidad disponible de boletos 
                del sorteo, cantidad disponible: ". Helper::getTicketAviables($vector);
            return to_route('pagos.index', [
                "message" => $message,
                "status" => Response::HTTP_NOT_FOUND
            ]);
        }
     
    }

    public function decline(Request $request)
    {
        /** Eliminamos los boletos asignados en caso de que se halla confirmado el pago por error */
        $boletosComprados = explode('-',$request->boletos);
        if(count($boletosComprados)){
            foreach ($boletosComprados as $key => $boleto) {
                Boleto::where('lottery_number', $boleto)->delete();
            }
        }
        /** Actualizamos el estatus de pago a rechazado = 2 */
        Compras::where('order_code', $request->order_code)->update(['payment_status' => 2]);
        
        /** Eviamos el correo de rechazo de pago */
        $data = [
            "title" => $request->title,
            "description" => "SU PAGO NO PUDO SER CONFIRMADO, POR LO TANTO RECHAZAMOS EL PAGO.",
            "end_date" => date('d/m/Y'),
            "boletos" => $boletosComprados
        ];
        Mail::to($request->email)
        ->send(new RechazadoMailable($data));
     
        /** Redireccionamos al index de pagos */
        return to_route('pagos.index', [
            "message" => "El pago de {$request->name} fue rechazado y sus boletos fueron liberados, 
                        que son los siguiente: " . implode('-',$boletosComprados),
            "status" => Response::HTTP_OK
        ]);
    }


 
    public function store(Request $request)
    {
        
    }

    public function edit(string $id)
    {
        //
    }


    public function update(Request $request, string $id)
    {
    
    }

    public function destroy(Request $request)
    {

        /** Eliminamos los boletos asignados en caso de que se halla confirmado el pago por error */
        $boletosComprados = explode('-',$request->boletos);
        if(count($boletosComprados)){
            foreach ($boletosComprados as $key => $boleto) {
                Boleto::where('lottery_number', $boleto)->delete();
            }
        }

        $pago = Compras::where('order_code', $request->order_code)->get();
        Helper::removeFile($pago[0]->file);
        Compras::where('order_code', $request->order_code)->delete();
        return to_route('pagos.index', [
            "message" => "El pago se eliminó correctamente.",
            "status" => Response::HTTP_OK
        ]);
    }
}
