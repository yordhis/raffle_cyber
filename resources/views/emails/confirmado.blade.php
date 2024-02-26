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
                    <th> SU PAGO FUE CONFIRMADO </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 
                        ¡YA ESTÁS PARTICIPANDO! POR:
                    </td>
                </tr>
                <tr>
                    <td> 
                        PREMIOS: {{ $data['title'] }}
                    </td>
                </tr>
                <tr>
                    <td> 
                        DESCRIPCIÓN: {{ $data['description'] }}
                    </td>
                </tr>
                <tr>
                    <td> 
                        FECHA DEL SORTEO: {{ $data['end_date'] }}
                    </td>
                </tr>
                <tr>
                    <td> 
                        USTED ESTA PARTICIPANDO CON LOS SIGUIENTES NÚMEROS: 
                      
                    </td>
                </tr>
                <tr>
                    <td style="font-size: 28px; color:chartreuse;"> 
                        {{ implode('-', $data['boletos']) }}
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <a href="https://javiierdu.com/">
                            <button>SEGUIR COMPRANDO</button>
                        </a>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>

</body>
</html>