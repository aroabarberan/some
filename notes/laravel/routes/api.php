<?php

use Illuminate\Http\Request;
use App\Note;
// use App\Http\Resources\Note as NoteResource;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix'=>'/'], function () {

    Route::get('/notes', function () {
        return Note::all();
    });

    Route::get('/note/{id}', function ($id) {
        return Note::find($id);
    });

    Route::post('/notes', function(Request $request) {
        $note = new Note;
        $note->title = $request['title'];
        $note->content = $request['content'];
        $note->save();
        return "Note created correctly";
    });

    //TODO
    Route::put('/notes/{id}', function(Request $request, $id) {
        $note = Note::find($id);
        $note->update($request->all());
        return "Note updated correctly";
    });

    Route::delete('/note/{id}', function($id) {
        Note::find($id)->delete();
        return "Note delete correctly";
    });
});
