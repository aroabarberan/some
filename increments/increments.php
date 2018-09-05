<?php

require_once 'File.php';
$file = 'number.txt';
$number = File::readFileFirstLine($file);
?>

<form action="" method='post'>
  <label for="number"><?= $number ?></label>
  <input type="submit" value="increments" name='increments'>
</form>

<?php

if(!isset($_POST['increments'])) return;


echo 'incrementando...';
$number += 1;
File::writeLineFile('number.txt', $number);
