<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::delete('/notes/{id}', function($id) {
//     header('Access-Control-Allow-Methods : POST, GET, OPTIONS, PUT, DELETE');
//     try  {
//         DB::table('notes')->where('id', $id)->delete();    
//         return response()->json('note deleted');
//     }
//     catch (Exception $e) {
//         return response()->json($e->getMessage(), 500);
//     }
// });

// Route::post('/notes', 'Api\Auth\NoteController@store');