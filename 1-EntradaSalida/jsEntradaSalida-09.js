/*
Nombre y apellido: Santiago Motta
Ej: E/I 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaro...
	let sueldo;
	let aumento;

	//Capturo los valores y transformo a int
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	//Opero (aumento el 10%)...

	aumento = sueldo * 1.1;

	//Imprimo por ID

	document.getElementById("txtIdResultado").value = aumento;

}

//IDs: txtIdSueldo, txtIdResultado