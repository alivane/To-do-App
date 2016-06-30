//Mis Variables

var botonTexto = document.getElementById("botonTexto");
var texto = document.getElementById("texto");
var lista = document.getElementById("lista");

function agregarTexto(){
	var letras = texto.value ;
	var li = document.createElement('li');
	var p = document.createTextNode( letras );
	li.appendChild(p);
	lista.appendChild(li);
	
};
function eliminarTodo(){
	lista.innerHTML = "";
}

//Añadiendo eventos
botonTexto.addEventListener("click", agregarTexto );
/*texto.addEventListener("click", agregarBoton );
lista.addEventListener("click",  );
*/

