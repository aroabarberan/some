<?php

include(dirname(__FILE__) . '/library/DataBase/DataBasePDO.php'); 

$db = new DataBasePDO();
$db->setTable('notes');
$results = $db->readAll();

$notes = [];

foreach ($results as $result) {
    $notes[] = [
        'id' => $result['id'],
        'title' => $result['title'],
        'content' => $result['content'],
    ];
}


echo json_encode($notes);