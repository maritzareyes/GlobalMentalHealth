<?php


$db = pg_connect("host=localhost port=5432 dbname=mentalHealth user=postgres password=Wizardof0z");
$query = "INSERT INTO mh VALUES ('$_POST[name]','$_POST[reason]',
'$_POST[email]','$_POST[message]')";
$result = pg_query($query);

?>
