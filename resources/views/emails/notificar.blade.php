<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javiierdu.com</title>

    <style>
        body{
            margin-top: 20px;
            width: auto;
            padding: 0px;
            background-color: rgba(0, 0, 0, 0.93);
        }
      
        div{
            margin: 0px;
            width: 100%;
            border: solid  2px rgb(255, 174, 0);
        }
     
        th{
            font-size: 48px; 
            color: aliceblue;
        }
        td{
            color: rgb(248, 157, 19);  
            font-size: 18px;
            text-align: center;
            padding: 3%;
        }
        a :hover{
            background-color: rgb(255, 196, 0);
        }
        button{
            border:0;
            border-radius: 5%;
            background-color: rgba(230, 153, 12, 0.801);
            padding: 15px;
        }
       
    </style>

</head>
<body>
    
    <div>
        <table>
            <thead>
                <tr>
                    <th> Notificación de venta </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 
                        ¡Has realizado una venta! 
                    </td>
                </tr>
                <tr>
                    <td> 
                        Sorteo a participar: {{ $data['title'] }}
                    </td>
                </tr>
                <tr>
                    <td> 
                        Fecha del sorteo: {{ $data['end_date'] }}
                    </td>
                </tr>
                <tr>
                    <td> 
                        Cliente: {{ $data['name'] }}
                    </td>
                </tr>
                <tr>
                    <td> 
                        Cantidad de boletos: {{ $data['amount'] }}
                    </td>
                </tr>
                <tr>
                    <td> 
                        Total cancelado: {{ number_format($data['total'], 2 , ',', '.') }} Bs
                    </td>
                </tr>
                <tr>
                    <td> 
                        Fecha de pago: {{ $data['payment_date'] }} 
                    </td>
                </tr>
                
                <tr>
                    <td> 
                        Si desea confirmar el pago entra al panel de administración en el siguiente botón: 
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <a href="https://javiierdu.com/pagos">
                            <button>Verificar pago</button>
                        </a>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>

</body>
</html>