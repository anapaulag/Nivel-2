/* 
Mejorar el modulo IMDB

El modulo Debera, de forma privada o publica, mostrar/renderizar las 
peliculas en el DOM.
El objeto pelicula ahora Debera tener la propiedad descripcion e imagen
El titulo Debera ser un H3, la descipcion un P y la imagen un img
*/


function Movie (id, title,description,image) {

    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;

}


var IMDB = (function () {

    var moviesList = [];
    var claveLocalStorage = 'moviesList';


    /*
    Toma las peliculas del localStorage (si hay) y las dibuja en el DOM
    */

    var moviespreStorage = function () {

    var data = localStorage.getItem(claveLocalStorage);

        if (data !== null) {

            moviesList = JSON.parse(data);
            
            for (i = 0; i < moviesList.length; i++) {
                
                drawMovie(moviesList[i]);
                
            }

        }
    }

    /*
        Guarda el array de peliculas en localstorage
    */
  
    var saveMoviesList = function (){

        var data = JSON.stringify(moviesList);
        localStorage.setItem('array', data);

    }

    var addText = function (element, text) {

        var textNode = document.createTextNode(text);
        element.appendChild(textNode);

        return element;

    }


     /*
        Dibuja en el DOM la pelicula pasada como parametro
     */
    var drawMovie = function (movie) {

        var ul = document.getElementById("movies");

        var li = document.createElement("li");
        var h3 = document.createElement('h3');
        var img = document.createElement('img');
        var p = document.createElement('p');

        li.setAttribute('id', movie.id);
        li.setAttribute('class', 'list-group-item'); // Bootstrap

        h3 = addText (h3, movie.title);
        p = addText(p, movie.description);

        img.setAttribute('src',  movie.image);

        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(img);
        ul.appendChild(li);

    }


    /*
        Borra del DOM la pelicula pasada como parametro
     */
    var deletemovieDOM = function (movieId) {

        var ul = document.getElementById("movies");
        var li = document.getElementById(movieId);

        ul.removeChild(li);

    }



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
                saveMoviesList();
                drawMovie(movie);                    

                
            }  else {

                alert('La pelicula con id: ' + movie.id + ' ya existe');

            }

    }

    var deleteMovie = function (idToDelete) {


        for (i=0; i < moviesList.length; i++) {

            if (moviesList[i].id === idToDelete) {

                moviesList.splice(i,1);
                deletemovieDOM(idToDelete)
                saveMoviesList();
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
        saveMoviesList();
    }


    var getMoviesList = function (){

        var data = localStorage.getItem ('array');
        moviesList = JSON.parse (dato);

    }


    var cleanIMDB = function () {

        moviesList = []
        localStorage.removeItem(claveLocalStorage);
        
        var moviesDOM = document.getElementById("movies");
        
        while (moviesDOM.firstChild) {
            moviesDOM.removeChild(moviesDOM.firstChild);
        }
        
    }

    moviespreStorage();


    return {

        addMovie: addMovie,
        deleteMovie: deleteMovie,
        cleanIMDB: cleanIMDB,

    }
})();


myMovieC = new Movie (2, 'Freddy Krugger','Peli de terror','img.jpg');
myMovieA = new Movie (0, 'Naufrago','Peli de un hombre perdido en una isla','img.jpg');
myMovieB = new Movie (1, 'Titanic','Peli de un barco que se hunde','img.jpg');

// Para probar:

// IMDB.addMovie (myMovieA)
// IMDB.addMovie (myMovieB)
// IMDB.addMovie (myMovieC)

// IMDB.deleteMovie(0)

// IMDB.cleanIMDB()