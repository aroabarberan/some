<?php

namespace App\Http\Controllers;


use App\Exceptions\NoteNotFoundException;
use App\Note;
use App\Services\NoteService;
use Illuminate\Validation\UnauthorizedException;


use Illuminate\Http\Request;

class NoteController extends Controller
{
    private $service;

    public function __construct(NoteService $service) {
        $this->service = $service;
    }

    public function index() {
        $notes = $this->service->readAll();
        
        return view('index', ['notes' => $notes, 'json' => json_encode($notes)]);
    }
}
