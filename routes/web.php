<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ComprasController;
use App\Http\Controllers\MethodPaymentController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RaffleController;
// use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

    //Rutas a las que se permitirá acceso
    Route::get('/', [PageController::class, 'index'])->name('page.index');
    Route::get('/comprar/{idRaffle}', [ComprasController::class, 'getFormPago'])->name('compras.comprar');
    Route::get('/finalizado/{idCompra}', [ComprasController::class, 'getFinalizado'])->name('compras.finalizada');
    Route::resource('/compras', ComprasController::class)->names('compras');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    
    Route::put('/raffles/{idRaffles}/updateStatus', [RaffleController::class, "updateStatus"])->name('raffles.updateStatus');
    Route::put('/pagos/confirmed', [PaymentController::class, 'confirmed'])->name('pagos.confirmed');
    Route::put('/pagos/decline', [PaymentController::class, 'decline'])->name('pagos.decline');

    Route::resource('/method_payments', MethodPaymentController::class)->names('method_payments');
    Route::resource('/pagos', PaymentController::class)->names('pagos');
    Route::resource('/clientes', ClienteController::class)->names('clientes');
    Route::resource('/raffles', RaffleController::class)->names('raffles');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
