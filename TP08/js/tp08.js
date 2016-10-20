/* 
Mejorar el modulo IMDB

1) Crear un formulario que tenga los campos titulo, descripcion y 
uno donde poder ingresar un link a la imagen.
2) Este formulario tendra que tener un boton ("agregar"), 
el cual debera permitir al modulo IMDB agregar una pelicula.
3) Este formulario Debera tener tambien un boton ("mostrar todos"),
el cual Debera permitir al modulo IMDB mostrar todas las peliculas.
4) Incluir otros botones para poder ordenar por AZ ZA e ID y mostrarlos
En caso de encontrarse peliculas persistidas tendran que volver a renderizarse
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
        localStorage.setItem(claveLocalStorage, data);

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


    var movieExists = function (movie) {

        var position = -1; 

        for(i = 0; i < moviesList.length && position === -1; i++) { 

            if (moviesList[i].id === movie.id) { 
                position = i; 

            }

        }

        return position;

    }

    var generateMovieId = function () {

        var id = -1;

        // moviesList[0]
        // id: 7
        // title: 


        // moviesList[1]
        // id: 4
        // title: 



        for (i = 0; i < moviesList.length; i++) {

            if (moviesList[i].id > id) {

                id = moviesList[i].id;

            }

        }

        return id + 1;

    }

    var createMovie = function () {

        var id = generateMovieId();
        var title = document.getElementById('titulo').value;
        var description = document.getElementById('descripcion').value;
        var image = document.getElementById('imagen').value;

        var movie = new Movie(id, title, description, image);

        addMovie(movie);

    }    

    var addMovie = function (movie) {

        // var position = movieExists(movie);

        //     if (position === -1) {

        moviesList.push(movie);
        saveMoviesList();
        drawMovie(movie);                    

                
            // }  else {

            //     alert('La pelicula con id: ' + movie.id + ' ya existe');

            // }

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

    var deletemoviesDOM = function () {

        var moviesDOM = document.getElementById("movies");
        
        while (moviesDOM.firstChild){
            moviesDOM.removeChild(moviesDOM.firstChild)

        }
    }




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
        deletemoviesDOM();
        moviespreStorage();

    }


    var compareTitleAz = function (a,b) {

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


    var titleOrderAz = function () {

        moviesList.sort(compareTitleAz);
        saveMoviesList();
        deletemoviesDOM();
        moviespreStorage();
    }


    var compareTitleZa = function (a,b) {

        var result;

        if (a.title < b.title) {

            result = 1;
        };

        if (a.title === b.title) {

            result = 0;
        };

        if (a.title > b.title) {

            result = -1;
        };


        return result;

    }


    var titleOrderZa = function () {

        moviesList.sort(compareTitleZa);
        saveMoviesList();
        deletemoviesDOM();
        moviespreStorage();
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

    var hideShow = function (){

        var mymovies = document.getElementById('movies');
            if (mymovies.style.display === 'none') {
                mymovies.style.display = 'block';
                document.getElementById("buttonHideShow").innerHTML = "Ocultar Peliculas";
            } else {
                mymovies.style.display = 'none';
                document.getElementById("buttonHideShow").innerHTML = "Mostrar Peliculas";
            }

    }

   
    var begin = function () {
    
        moviespreStorage();
        document.getElementById("buttonAddMovie").onclick= createMovie;
        document.getElementById("buttonHideShow").onclick= hideShow;
        document.getElementById("orderId").onclick= idOrder;
        document.getElementById("orderAz").onclick= titleOrderAz;
        document.getElementById("orderZa").onclick= titleOrderZa;


    }

    return {

        begin: begin

    } 


})();

window.onload = IMDB.begin;

/*myMovieC = new Movie (2, 'Freddy Krugger','Peli de terror','img.jpg');
myMovieA = new Movie (0, 'Naufrago','Peli de un hombre perdido en una isla','img.jpg');
myMovieB = new Movie (1, 'Titanic','Peli de un barco que se hunde','img.jpg');*/

