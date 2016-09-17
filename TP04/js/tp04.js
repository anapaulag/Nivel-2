function Pelicula (ID, titulo, descripcion, anio, duracion, actors, director) {
	
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.anio = anio;
	this.duracion = duracion;
	this.actors = [] ;
	this.director = director;


this.editarTitulo = function (titulo) {
	this.titulo = titulo;
}

this.editarDescripcion = function (descripcion) {
	this.descripcion = descripcion;
}

this.editarAnio = function (anio) {
	this.anio = anio;
}

this.editarDuracion = function (duracion) {
	this.duracion = duracion;
}

this.editarDirector = function (director) {
	this.director = director;
	}

this.agregarActor = function (actors) {
	var actor = prompt ('ingrese un actor');

	this.actors.push(actor);
	}
}

var naufrago = new Pelicula ('09887', 'Naufrago', 'hombre que vive en una isla', 
							'2000','120', 'Tom Hanks', 'Spilberg');




