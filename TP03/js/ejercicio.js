var numeroA = prompt ('Ingrese un numero');
numeroA = parseInt (numeroA);
var numeroB = prompt ('Ingrese otro numero');
numeroB = parseInt (numeroB);
var operacion = prompt ('que operacion desea hacer?');
var operacionesTipo = ['sumar', 'restar', 'multiplicar','dividir'];

function sumar () {
	var resultado = (numeroA + numeroB);
	console.log(resultado);
}

function restar (numeroA, numeroB) {
	var resultado = (numeroA - numeroB);
	console.log(resultado);
}

function multiplicar (numeroA, numeroB) {
	var resultado = (numeroA * numeroB);
	console.log(resultado);
}

function dividir (numeroA, numeroB) {
	var resultado = (numeroA / numeroB);
	console.log(resultado);
}

switch (operacion) {
	case operacionesTipo[0]:
		sumar (numeroA,numeroB);
		break;
	case operacionesTipo[1]:
		restar (numeroA,numeroB);
		break;	
	case operacionesTipo[2]:
		multiplicar (numeroA,numeroB);
		break;
	case operacionesTipo[3]:
		dividir (numeroA,numeroB);
		break;
}