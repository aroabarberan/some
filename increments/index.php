<?php
$cont = file_get_contents('number.txt');
?>
<form action="" method='post'>
  <input type="submit" value="increments" name='increments'>
</form>

<?php
if (!isset($_POST['increments'])) {
  echo $cont;
  return;
}

$cont += 1;
$f = fopen('number.txt', 'w+');
fwrite($f, $cont);
fclose($f);
echo $cont;
