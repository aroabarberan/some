<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Note;

class NoteServiceProvider extends ServiceProvider
{

    public function readAll() {
        return Note::all();
    }
}
