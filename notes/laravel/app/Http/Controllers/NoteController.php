<?php

namespace App\Http\Controllers;

use App\Services\NoteService;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    private $service;

    public function __construct(NoteService $service)
    {
        $this->service = $service;
    }

    public function allNotes()
    {
        $notes = $this->service->readAll();
        $res = response()->json(['results' => $notes]);
        return $res;
    }

    public function deleteNote(Request $res)
    {
        echo 'asdas';
        // $res->delete();
        echo "<pre>" . print_r($res);
        // return view('notes', $res);
    }
}
