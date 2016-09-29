/*
tp5
Crear un array de peliculas
Crear una funcion que agrege una pelicula al array de peliculas
La pelicula debera tener un ID y un Titulo
Crear una funcion que evalue antes de agregar que la pelicula no 
fue ingresada previamente
Crear una funcion que ordene las peliculas por Titulo y por ID
Crear una funcion que elimine una pelicula por su ID.
*/

function Movie (id, title) {
	
	this.id = id;
	this.title = title;

}

function VideoLibrary() {
    
        this.moviesList = [];


    this.addMovie = function () {

    	var id = parseInt (prompt ('Ingrese el id de la pelicula'));
		var title = prompt('Ingrese el titulo de la pelicula');
		var movieA = new Movie (id,title);

		var exists = false;

		// Primera iteracion cuando el array esta vacio
		// i = 0
		// this.cars.length = 0

		for (i = 0; i < this.moviesList.length && exists === false; i++) {

	            if (movieA.id === this.moviesList[i].id) {

	                exists = true;
	                alert ('Esta pelicula ya esta en la Videoteca');
	            	                
	            }

		}	

		if (exists === false){
			this.moviesList.push(movieA);
		}
		
	}

	this.deleteMovie = function (idToDelete) {

        for (i=0; i <= this.moviesList.length; i++) {

            if (this.moviesList[i].id === idToDelete) {

                this.moviesList.splice(i,1);
                break;
            };
        };
    };

    this.compareId = function (a,b) {

        var result;

        if (a.id < b.id) {

            result = -1;
        };

        if (a.id === b.id) {

            result = 0;
        };

        if (a.id > b.id) {

            result = 1;
        };


        return result;

    }


    this.idOrder = function () {

        this.moviesList.sort(this.compareId);
        
    }

    //para ordenar por el titulo
    this.compareTitle = function (a,b) {

        var result;

        if (a.title < b.title) {

            result = -1;
        };

        if (a.title === b.title) {

            result = 0;
        };

        if (a.title > b.title) {

            result = 1;
        };


        return result;

    }


    this.titleOrder = function  () {
        
        this.moviesList.sort(this.compareTitle);
        
    }

}

