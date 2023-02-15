<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\MunicipalityController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PlacesController;
use App\Http\Controllers\RoomsController;
use App\Http\Controllers\ZonesController;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\ExcelController;

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

Route::get('/', function () {
    return view('home');
});

Auth::routes(['verify' => true, 'remember_me' => false]);

Route::group(['middleware' => ['auth', 'verified', 'log', 'throttle:web']], function () {
    Route::group(['middleware' => ['has.role:Administrador']], function () {
        // Apis
        Route::resource('/api/web/department', DepartmentController::class);
        Route::resource('/api/web/municipality', MunicipalityController::class);
        Route::resource('/api/web/user', UserController::class);
        Route::resource('/api/web/role', RoleController::class);
        Route::resource('/api/web/place', PlacesController::class);
        Route::delete('/api/web/place', [PlacesController::class, 'destroy']);
        Route::resource('/api/web/room', RoomsController::class);
        Route::delete('/api/web/room', [RoomsController::class, 'destroy']);
        Route::resource('/api/web/zone', ZonesController::class);
        Route::delete('/api/web/zone', [ZonesController::class, 'destroy']);
        Route::resource('/api/web/event', EventsController::class);
        Route::delete('/api/web/event', [EventsController::class, 'destroy']);

        // Views
        Route::get('/departments', function () {
            return view('department.index');
        });

        Route::get('/municipalities', function () {
            return view('municipality.index');
        });

        Route::get('/users', function () {
            return view('user.index');
        });

        Route::get('/zones', function () {
            return view('zone.index');
        });

        Route::get('/places', function () {
            return view('place.index');
        });

        Route::get('/rooms', function () {
            return view('room.index');
        });

        Route::get('/events', function () {
            return view('event.index');
        });
    });

    //Reports
    Route::get('generate-pdf', [PDFController::class, 'generatePDF']);

    //Excel
    Route::get('export', [ExcelController::class, 'export']);

    Route::get('/home', [HomeController::class, 'index'])->name('home');
});

Auth::routes(['verify' => true, 'login' => true, 'reset' => true, 'register' => true]);

Route::get('/api/web/room/byPlaceName/{place}', [RoomsController::class, 'byPlaceName']);
// Route::post('/api/web/zone/allZones', [ZonesController::class, 'allZones']);
Route::post('/api/web/event/scheduleEvents', [EventsController::class, 'scheduleEvents']);
Route::post('api/web/event/eventById', [EventsController::class, 'eventById']);

Route::post('import', [ExcelController::class, 'import']);
