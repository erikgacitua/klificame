$(document).ready(function () {

});

//Acciín del botón para crear instituciones o colegios
function createSchool(){
	
	var nameInstitution = $("#nameInstitution").val();
	var commune = $("#commune option:selected").val();
	var address = $("#address").val();
	var telePhone = $("#telePhone").val();
	var director = $("#director").val();
	var emailDirector = $("#emailDirector").val();
	var contact = $("#contact").val();
	var emailContac = $("#emailContac").val();
	var telePhoneContact = $("#telePhoneContact").val();
	var accion = "createSchool";
	//Se validan los campos obligatorios
	if (nameInstitution == "") {
		alert("Favor ingresar el nombre del colegio o institución");
		$("#nameInstitution").focus();
	}else if (commune == 0){
		alert("Favor seleccionar la comuna del colegio o la institución!");
		$("#commune").focus();
	}else if (address == "") {
		alert("Favor ingresar dirección del establecimiento!");
		$("#address").focus();
	}else if (telePhone == "") {
		alert("Favor ingresar numero de telefono del colegio o institución!");
		$("#telePhone").focus();
	}else if (director == "") {
		alert("Favor ingresar nombre del director!");
		$("#director").focus();
	}else if (emailDirector == "") {
		alert("Favor ingresar correo del director!");
		$("#emailDirector").focus();
	}else if(contact == ""){
		alert("Favor ingresar numero de telefono del contacto!");
		$("#contact").focus();
	}else if(emailContac == ""){
		alert("Favor ingresar un correo del contacto!");
		$("#emailContac").focus();
	}else if(telePhoneContact == ""){
		alert("Favor ingresar un telefono del contacto!");
		$("#telePhoneContact").focus();
	}else{

		var data = $.post("bff.php", { institución: nameInstitution, comuna: commune, direccion: address, telefono: telePhone, director: director, emailDirector: emailDirector, contacto: contact, emailContac: emailContac, telePhoneContact: telePhoneContact, accion: accion});
		data.error(function(){
			console.log("Se callo la wea");
		});
		data.success(function(response){
			alert("Colegio o Institución creada con exito!");
		});
	}

	
}
