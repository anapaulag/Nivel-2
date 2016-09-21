function Movie (id, title, description, year, duration, actors, director) {
	
	this.title = title;
	this.description = description;
	this.year = year;
	this.duration = duration;
	this.actors = [];
	this.director = director;


	this.editTitle = function (title) {
		title = title;
	}

	this.editDescription = function (description) {
		description = description;
	}

	this.editYear = function (year) {
		year = year;
	}

	this.editDuration = function (duration) {
		duration = duration;
	}

	this.editDirector = function (director) {
		director = director;
		}

	this.addActor = function () {

		var actor;

		do { 
			
			actor = prompt ('ingrese un actor o ingrese 0 para salir');

			if (actor !== '0') {

				
				this.actors.push(actor);
			}

		} while (actor!=='0')
	}
}

var naufrago = new Movie (15, 'Naufrago', 'hombre que vive en una isla', 
							'2000','120',[], 'Spilberg');

naufrago.addActor ()

naufrago.actors
