/* Crear el modulo IMDB
El array de peliculas tendra que ser privado del modulo
El modulo tendra que poder agregar una pelicula (ID y titulo)
Validar que la pelicula ingresada no se encuentre y en caso de 
encontrarla mostrar un mensaje advirtiendo el error
El modulo tendra que eliminar una pelicula por ID
El modulo tendra que ordernar su array de pelicuas en base a una 
propiedad enviada por paramentro y mostrarlo en consola
El modulo tendra que persistir el array de peliculas en session 
o local storage para que luego se pueda recuperar y seguir agregando 
o eliminando
*/


function Movie (id, title) {

    this.id = id;
    this.title = title;

}


var IMDB = (function () {

    var moviesList = [];

    var movieExists = function (movie) {

        var position = -1; 

        for(i = 0; i < moviesList.length && position === -1; i++) { 

            if (moviesList[i].id === movie.id) { 
                position = i; 

            }

        }

        return position;

    }   

    var addMovie = function (movie) {

            var position = movieExists(movie);

            if (position === -1) {

                moviesList.push(movie);
                savemoviesList();

                
            }  else {

                alert('La pelicula con id: ' + movie.id + ' ya existe');

            }

    }

    var deleteMovie = function (idToDelete) {

        for (i=0; i < moviesList.length; i++) {

            if (moviesList[i].id === idToDelete) {

                moviesList.splice(i,1);
                savemoviesList();
                break;
            };
        };
    };



    var compareId = function (a,b) {

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


    var idOrder = function () {

        moviesList.sort(compareId);
        savemoviesList();
    }


    var savemoviesList = function (){

        var dato = JSON.stringify(moviesList);
        localStorage.setItem('array', dato);

    }

    var getmoviesList = function (){

        var dato = localStorage.getItem ('array');
        moviesList = JSON.parse (dato);

    }

    return {

        addMovie: addMovie,
        deleteMovie: deleteMovie,
        idOrder: idOrder,

    }
})();


myMovieC = new Movie (2, 'Freddy Krugger');
myMovieA = new Movie (0, 'Naufrago');
myMovieB = new Movie (1, 'Titanic');

