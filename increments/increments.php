<?php

require_once 'File.php';
$file = 'number.txt';
$number = File::readFileFirstLine($file);

echo json_encode($number);

$number += 1;
File::writeLineFile('number.txt', $number);

