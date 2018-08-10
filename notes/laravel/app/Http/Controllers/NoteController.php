<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\NoteService;
use App\Note;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class NoteController extends Controller
{
    private $service;

    public function __construct(NoteService $service)
    {
        $this->service = $service;
        Log::info('one message');
    }

    public function allNotes(Request $request)
    {
        $notes = $this->service->readAll();
        $request = response()->json(['results' => $notes]);        
        return $request;
    }

    public function deleteNote($id)
    {
        try  {
            DB::table('notes')->where('id', $id)->delete();    
            return response()->json('note deleted');
        }
        catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function storeNote(Request $request) {
        Log::info($request);
        echo $request;
        // return view('/notes', $request);
        // return $request;
    }
}
