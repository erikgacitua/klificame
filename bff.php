<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
date_default_timezone_set('America/Santiago');

require_once('./conexion.php');
require_once('./microServicio.php');

$accion = $_POST['accion'];

if ($accion == "createSchool") {
	
	$nameInstitution = $_POST['institución'];
	$commune = $_POST['comuna'];
	$address = $_POST['direccion'];
	$telefono = $_POST['telefono'];
	$director = $_POST['director'];
	$emailDirector = $_POST['emailDirector'];
	$contac = $_POST['contacto'];
	$emailContac = $_POST['emailContac'];
	$telePhoneContact = $_POST['telePhoneContact'];

	 prueba($nameInstitution,$commune,$address,$telefono,$director,$emailDirector,$contac,$emailContac,$telePhoneContact);
}
?>