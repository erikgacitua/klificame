<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
date_default_timezone_set('America/Santiago');

require_once('./conexion.php');
	
function prueba($nameInstitution,$commune,$address,$telefono,$director,$emailDirector,$contac,$emailContac,$telePhoneContact,$conexion){
	
	try{

		mysql_query("CALL sp_createSchool('$nameInstitution','$commune','$address','$telefono','$director','$emailDirector','$contac','$emailContac','$telePhoneContact')",$conexion)or die(mysql_error());
			
			return "true";

		} catch (Exception $e){
			return "false";
		}
}

?>