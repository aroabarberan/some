<?php

namespace App\Services;

use App\Note;
use Illuminate\Http\Request;

class NoteService
{

    public function readAll()
    {
        return Note::all();
        
    }

    public function delete() {
        
    }
}
