/*aquí va tu código*/
function guardarComentario(){
	localStorage.nombre = document.getElementById("clave").value;
	localStorage.comentario = document.getElementById("valor").value;

	if((localStorage.nombre != undefined) && (localStorage.comentario != undefined)){
		var cont = document.getElementById("cuadro");
		var div = document.createElement("div");
			div.setAttribute("class", "col-md-12 text-center cuadrado");
			var ident = document.getElementById("cuadro");
			var nom = document.createElement("h3");
	 		nom.setAttribute("class","tit");
	 		var comen = document.createElement("p");
	 		comen.setAttribute("class","com");
	 		var n = document.createTextNode(localStorage.nombre);
			var c = document.createTextNode(localStorage.comentario);

			nom.appendChild(n);
			comen.appendChild(c);

			div.appendChild(nom);
			div.appendChild(comen);
			cont.appendChild(div);
	}
} 

