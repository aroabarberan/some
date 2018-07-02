<?php

namespace App\Http\Controllers;

class ContactController extends Controller
{
    private $service;

    public function __construct(ContactService $contactService)
    {
        $this->service = $contactService;
    }

    public function create()
    {
        return view('contact.create');
    }

}
