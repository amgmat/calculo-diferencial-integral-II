'use strict'

var formulario = document.querySelector("#comentarios");

formulario.addEventListener('submit', function(){

	var mensaje = document.querySelector('#comentario').value;
	
	if(mensaje.length >= 1 ){
		localStorage.setItem(mensaje);
	}
	
});

var ul = document.querySelector('#pcomentario');
for(var i in localStorage){
	
	if(typeof localStorage[i] == 'string'){
		var li = document.createElement("li");
		li.append(localStorage[i]);
		ul.append(li);
	}
	
}