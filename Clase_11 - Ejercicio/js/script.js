/* 
jQuerizar el ejericio 8
*/

function Noticia(id, titulo, descripcion, imagen) {

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;

}

var Diario = (function () {

    // Atributos privados
    var noticias = [];
	var claveLocalStorage = 'noticias';

    /*
        Permite precargar las noticias por localstorage
    */
    var precargarNoticias = function () {
		
        var datos = localStorage.getItem(claveLocalStorage);

        if (datos !== null && datos !== '') {

            noticias = JSON.parse(datos);
			
			for (i = 0; i < noticias.length; i++) {
				
				dibujarNoticia(noticias[i]);
				
			}

		}

	}

	/*
		Guarda el array de noticias en localstorage
	*/
	var guardarNoticias = function () {

		var datos = JSON.stringify(noticias);
		localStorage.setItem(claveLocalStorage, datos);

	}
	
	/*
		Agrega el texto al elemento utilizando un nodoTexto
		Retorna el elemento con el nodoTexto agregado
	 */
    var agregarTexto = function (elemento, texto) {

        var nodoTexto = document.createTextNode(texto);
        elemento.appendChild(nodoTexto);

        return elemento;

    }

    var modificarNoticia = function (noticia) {

    	//var POSICION_TITULO = 2;
    	//var POSICION_DESCRIPCION = 3;
    	//var POSICION_IMAGEN = 4;

    	var posicion = obtenerPosicionNoticia(noticia.id);
    	//var noticiaDOM = document.getElementById(noticia.id);

    	noticias[posicion].titulo = noticia.titulo;
    	noticias[posicion].descripcion = noticia.descripcion;
    	noticias[posicion].imagen = noticia.imagen;
    	//noticiaDOM.childNodes[POSICION_TITULO].innerHTML = noticia.titulo;
    	//noticiaDOM.childNodes[POSICION_DESCRIPCION].innerHTML = noticia.descripcion;
    	//noticiaDOM.childNodes[POSICION_IMAGEN].setAttribute('src', noticia.imagen);
		$('#' + noticia.id + ' h3').html(noticia.titulo);
		$('#' + noticia.id + ' p').html(noticia.descripcion);
		$('#' + noticia.id + ' img').attr('src', noticia.imagen);
	
    	guardarNoticias();
    	limpiarFormulario();


    	vincularFormulario();
    	
    }

    var limpiarFormulario = function () {

    	var boton = $ ("#boton").html('Agregar')
    						   .on('click', function (){crearNoticia;});

		//var boton = document.getElementById('boton');
    	//boton.innerHTML = 'Agregar';
    	//boton.onclick = crearNoticia;


    	$ ("#titulo").val('');
    	$ ("#descripcion").val('');
    	$ ("#imagen").val('');

		//document.getElementById('titulo').value = '';
		//document.getElementById('descripcion').value = '';
		//document.getElementById('imagen').value = '';

    }

    var cargarNoticia = function (noticia) {

    	$ ('#titulo').val(noticia.titulo);
    	$ ('#descripcion').val(noticia.descripcion);
    	$ ('#imagen').val(noticia.imagen);
   
	   	//document.getElementById('titulo').value = noticia.titulo;
	   	//document.getElementById('descripcion').value = noticia.descripcion;
	   	//document.getElementById('imagen').value = noticia.imagen;
	   	
	   	var boton = $('#boton').html('Modificar')
							   .off('click')
	   						   .on('click', function(){

   						 			noticia.titulo = $('#titulo').val();				
   						 			noticia.descripcion = $('#descripcion').val();
   						 			noticia.imagen = $('#imagen').val();

   						 			modificarNoticia(noticia);
	   						 	});

		//var boton = document.getElementById('boton');

	   	//boton.innerHTML = 'Modificar'
	   	
		//boton.onclick = function () {

			//noticia.titulo = document.getElementById("titulo").value;
	   		//noticia.descripcion = document.getElementById("descripcion").value;
	   		//noticia.imagen = document.getElementById("imagen").value;

	   		

	}

	/*
		Dibuja en el DOM la noticia pasada como parametro
	 */
	var dibujarNoticia = function (noticia) {
	
		$('<li/>').attr('id', noticia.id)
				  .addClass('list-group-item')
			      .appendTo('#noticias');

		$('<h3/>').html(noticia.titulo)
				  .appendTo('#' + noticia.id);

		$('<p/>').html(noticia.descripcion)
				 .appendTo('#' + noticia.id);

		$('<img/>').attr('src', noticia.imagen)
				   .appendTo('#' + noticia.id);

		var botonEliminar = $('<button/>').addClass('btn btn-default btn-xs')
										  .html('Borrar')
										  .on('click', function () { eliminarNoticia(noticia.id); })
										  .appendTo('#' + noticia.id);
		
		var botonModificar = $('<button/>').addClass('btn btn-default btn-xs')
										   .html('Modificar')
										   .on('click', function() { cargarNoticia(noticia); })
										   .appendTo('#' + noticia.id);

		var icono = $('<span/>').addClass('glyphicon glyphicon-remove')
								.appendTo(botonEliminar);

		var iconoModificar = $('<span/>').addClass('glyphicon glyphicon-pencil')
										 .appendTo(botonModificar);

		//var li = document.createElement("li");
		//var h3 = document.createElement('h3');
		//var img = document.createElement('img');
		//var p = document.createElement('p');
		//var botonEliminar = document.createElement("button");
		//var botonModificar = document.createElement("button");
		//var icono = document.createElement("span");
		//var iconoModificar = document.createElement("span");
		//botonEliminar.setAttribute('class', 'btn btn-default btn-xs');
		//botonEliminar.innerHTML = 'Borrar';
		//botonModificar.setAttribute('class', 'btn btn-default btn-xs');
		//botonModificar.innerHTML = 'Modificar';
		//botonEliminar.onclick = function () {eliminarNoticia(noticia.id);} 
		//botonModificar.onclick = function () {cargarNoticia(noticia);}

		//icono.className ="glyphicon glyphicon-remove";
		//botonEliminar.appendChild(icono);

		//iconoModificar.className ="glyphicon glyphicon-pencil";
		//botonModificar.appendChild(iconoModificar);

		//li.setAttribute('id', noticia.id);
		//li.setAttribute('class', 'list-group-item'); // Bootstrap

		//h3 = agregarTexto(h3, noticia.titulo);
		//p = agregarTexto(p, noticia.descripcion);

		//img.setAttribute('src',  noticia.imagen);

		//li.appendChild(botonEliminar);
		//li.appendChild(botonModificar);
		//li.appendChild(h3);
		//li.appendChild(p);
		//li.appendChild(img);
		
		// Por ultimo se hace append del li en ul
		//div.appendChild(li);

	}

    /*
		Borra del DOM la noticia pasada como parametro
	 */
    var borrarNoticiaDOM = function (id) {

    	$("#" + id).remove();
    	
        //var ul = document.getElementById("noticias");
        //var li = document.getElementById(id);
        //ul.removeChild(li);

    }

    // Si la noticia existe en el array de noticias devuelve la posicion 
    // donde se encuentra (0, 1, 2, etc.)
    // En caso contrario devuelve -1;
    var obtenerPosicionNoticia = function (id) {

        var posicion = -1; 
        
        // La condicion del for lee: 'Mientras haya elementos en el array de noticias por recorrer y la posicion sea -1
        for(i = 0; i < noticias.length && posicion === -1; i++) { 

            if (noticias[i].id === id) { 
                
                // Si los ids coinciden me guardo el contenido de la variable i en la variable posicion
                posicion = i; 

            }

        }

        return posicion;

    }

    var agregarNoticia = function (noticia) {

		noticias.push(noticia);

		guardarNoticias();

		dibujarNoticia(noticia);

		limpiarFormulario();
		
    }
	
    var eliminarNoticia = function (id) {

        var posicion = obtenerPosicionNoticia(id);

		// Borra 1 elemento desde la posicion
		noticias.splice(posicion, 1);

		guardarNoticias();

		borrarNoticiaDOM(id);

    }

    var limpiarNoticiasDOM = function () {

		$('#noticias').empty();

    }

	var limpiarDiario = function () {

		noticias = []
		localStorage.removeItem(claveLocalStorage);
		
		limpiarNoticiasDOM();

	}

	var construirComparador = function (atributo, ordenamientoAscendente) {

		return function (elementoA, elementoB) {

			var resultado;

			if (elementoA[atributo] > elementoB[atributo]) {
				resultado = 1;

			}

			if (elementoA[atributo] === elementoB[atributo]) {
				resultado = 0;

			}

			if (elementoA[atributo] < elementoB[atributo]) {
				resultado = -1;

			}

			if (ordenamientoAscendente === false) {
				resultado = -resultado;

			}

			return resultado;

		}

	}

	var ordenarNoticias = function (atributo, ordenamientoAscendente) {

		var comparador = construirComparador(atributo, ordenamientoAscendente);

		noticias.sort(comparador);

		guardarNoticias();
		limpiarNoticiasDOM();
		precargarNoticias();

	}

	/*

		Busca en el array de noticias la noticia con el id mas grande y devuelve ese id incrementado en una unidad.

	*/
	var generarNuevoId = function () {

		var id = 0;

		if (noticias.length !== 0) {
			
			var atributo = 'id';
			var ordenamientoAscendente = false;
			var comparador = construirComparador(atributo, ordenamientoAscendente);
			var copiaNoticias = noticias;

			copiaNoticias.sort(comparador);

			id = copiaNoticias[0].id + 1;

		}

		return id;
		
	}
	
	var mostrarOcultarListado = function () {
	
		var listado = document.getElementById('noticias');
		var ordenadores = document.getElementById('ordenadores');
		
		if (listado.className == '') {

			listado.className = 'hidden';
			ordenadores.className = 'hidden';
			this.textContent = 'Mostrar Noticias';

		} else {

			listado.className = '';
			ordenadores.className = 'btn-group';
			this.textContent = 'Ocultar Noticias';

		}
		
	}

	var crearNoticia = function () {

		var id = generarNuevoId();
		var titulo = $("#titulo").val();
		var descripcion = $("#descripcion").val();
		var imagen = $("#imagen").val();

		//var titulo = document.getElementById('titulo').value;
		//var descripcion = document.getElementById('descripcion').value;
		//var imagen = document.getElementById('imagen').value;

		var noticia = new Noticia(id, titulo, descripcion, imagen);

		agregarNoticia(noticia);

	}

	var vincularFormulario = function () {

		$("#boton").off('click')
					.on('click',function() {crearNoticia();})

		//var boton = document.getElementById('boton');
		//boton.onclick = crearNoticia;

	}
	
	var vincularOrdenamientos = function () {

		$("#id").on('click',function(){

			var atributo = 'id';
			var ordenamientoAscendente = true;

			ordenarNoticias(atributo, ordenamientoAscendente);

		})

		$("#az").on('click',function(){

			var atributo = 'titulo';
			var ordenamientoAscendente = true;

			ordenarNoticias(atributo, ordenamientoAscendente);

		})

		$("#za").on('click',function() {

			var atributo = 'titulo';
			var ordenamientoAscendente = false;

			ordenarNoticias(atributo, ordenamientoAscendente);

		})		

		//var ordenarPorId = document.getElementById('id');
		//var ordenarPorAZ = document.getElementById('az');
		//var ordenarPorZA = document.getElementById('za');

		//ordenarPorId.onclick = function () {
			
			//var atributo = 'id';
			//var ordenamientoAscendente = true;

			//ordenarNoticias(atributo, ordenamientoAscendente);

		//}

		//ordenarPorAZ.onclick = function () {
			
			//var atributo = 'titulo';
			//var ordenamientoAscendente = true;

			//ordenarNoticias(atributo, ordenamientoAscendente);

		//}

		//ordenarPorZA.onclick = function () {
			
			//var atributo = 'titulo';
			//var ordenamientoAscendente = false;

			//ordenarNoticias(atributo, ordenamientoAscendente);

		//}

		
	}

	var vincularBotonListado = function () {

		$("#mostrarOcultarListado").on('click', function(){mostrarOcultarListado();})

		//var boton = document.getElementById('mostrarOcultarListado');
		//boton.onclick = mostrarOcultarListado;

	}
	
	var iniciar = function () {

		vincularFormulario();
		vincularOrdenamientos();
		vincularBotonListado();
		precargarNoticias();

	}

    // El 'agregarNoticia' de la izquierda es el nombre del atributo de nuestro objeto literal.
    // El 'agregarNoticia' de la derecha es el valor que tendra el atributo. Es la funcion que tenemos declarada

    // El 'eliminarNoticia' de la izquierda es el nombre del atributo de nuestro objeto literal.
    // El 'eliminarNoticia' de la derecha es el valor que tendra el atributo. Es la funcion que tenemos declarada
    return {

        /* Esto se hace ahora a traves de los eventos del formulario.
		agregarNoticia: agregarNoticia,
        eliminarNoticia: eliminarNoticia,*/
		limpiarDiario: limpiarDiario,
		iniciar: iniciar

    };

})()

// Para limpiar el diario pueden hacer lo siguiente:
// Esto borra el array de noticias, limpia localstorage y quita todas las noticias del DOM.
// Diario.limpiarDiario()

$(document).ready(function () {

	Diario.iniciar();

});