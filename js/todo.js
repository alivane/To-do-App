//Mis Variables

var botonTexto = document.getElementById("botonTexto");
var texto = document.getElementById("texto");
var lista = document.getElementById("lista");
var fondo = document.getElementById('fondo');
var fondo1 = document.getElementById('fondo1');
var fondo2 = document.getElementById('fondo2');
var cambiar = document.getElementById('color');



//FUNCTIONS

function agregarTexto(){
	var letras = texto.value ;
	var li = document.createElement('li');
	var span = document.createElement('span');
	var p = document.createTextNode( letras );
	var button = document.createElement('button');
	span.addEventListener('click',tachar);
	if(letras == ""){
		texto.setAttribute("placeholder","Añade una tarea VALIDA !!!");
	}else{
		button.setAttribute("class","btn-danger");
		button.addEventListener("click", elminarItem);
		var buttonTexto = document.createTextNode('x');
		button.appendChild(buttonTexto);
		span.appendChild(p);
		li.appendChild(span);
		li.appendChild(button);
		lista.appendChild(li);
		texto.setAttribute("placeholder","Ingresa una tarea");
		texto.value="";
		}
	
}
function tachar(){
	this.setAttribute('class','tachar');
}
function elminarItem(evento){
	console.log('elminarItem');
    var li = evento.target.parentNode;
    lista.removeChild(li);
} 

function eliminarTodo(){
	lista.innerHTML = "";
}

function cambio(){
	cambiar.setAttribute('class','cambiarFondo');

}

function cambio1(){
	cambiar.setAttribute('class','cambiarFondo1');

}

function cambio2(){
	cambiar.setAttribute('class','cambiarFondo2');

}


//EVENTOS

fondo.addEventListener('click',cambio);
fondo1.addEventListener('click',cambio1);
fondo2.addEventListener('click',cambio2);
botonTexto.addEventListener("click", agregarTexto );

