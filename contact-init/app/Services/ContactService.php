<?php

namespace App\Services;

use App\Contact;
use Illuminate\Http\Request;

class ContactService
{

    public function readAll()
    {
        return Note::all();
    }

    public function save(Contact $contact)
    {
        $contact->save();
    }
}
