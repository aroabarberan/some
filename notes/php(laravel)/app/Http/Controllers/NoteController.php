<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Providers\NoteServiceProvider;

class NoteController extends Controller
{
    private $serviceProvider;

    public function __construct(NoteServiceProvider $noteServiceProvider) {
        $this->serviceProvider = $noteServiceProvider;
    }

    public function index() {
        $notes = $this->serviceProvider->readAll();
        view('index', ['notes' => $notes]);
    }
}
