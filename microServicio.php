<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
date_default_timezone_set('America/Santiago');

require_once('./conexion.php');

function prueba($nameInstitution,$commune,$address,$telefono,$director,$emailDirector,$contac,$emailContac,$telePhoneContact){
	
	

	$exe = mysql_query($conexion, 'CALL createSchool($nameInstitution,$commune,$address,$telefono,$director,$emailDirector,$contac,$emailContac,$telePhoneContact')or die("Query fail: " . mysqli_error());
	
}

?>