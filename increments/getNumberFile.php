<?php

require_once 'File.php';

$number = File::readFileFirstLine('number.txt');
echo json_encode($number);
