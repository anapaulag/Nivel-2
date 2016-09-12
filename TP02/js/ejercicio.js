var diaHoy = prompt ('Que dia es hoy?');

var diaSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var tipoDeDia = 'el dia es fin de semana';

for (pos = 0; pos < diaSemana.length; pos++) {
	if (diaHoy === diaSemana[pos]) {
		tipoDeDia = 'el dia es habil';
		break;
		}
	}
alert(tipoDeDia)

