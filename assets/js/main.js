var arr=[ { nombre : "Arabela",   apellido : "Rojas",     rol : "T.A",        cumpleanios : "23 de enero" },
	          { nombre : "Michelle",  apellido : "Seguil",    rol : "T.A",        cumpleanios : "25 de noviembre" },
	          { nombre : "Meche",     apellido : "Zubieta",   rol : "T.A",        cumpleanios : "02 de marzo" },
	          { nombre : "Papu",      apellido : "Rivariola", rol : "Psicóloga",  cumpleanios : "10 de octubre" },
	          { nombre : "Gian",      apellido : "Corzo",     rol : "Profesor",   cumpleanios : "23 de enero" } ];


	var mensaje="";

	function imprimir(){
	  for (var carac in arr) {
	    mensaje +="<li>Nombre:"   + arr[carac].nombre + "<br>" +
	            "<li>Apellido:" + arr[carac].apellido    + "<br>" +
	            "<li>Rol:" + arr[carac].rol + "<br>"+
	            "<li>Cumpleaños:" + arr[carac].cumpleanios + "<br>" + "<br>";

	  }
	  document.getElementById('print').innerHTML=mensaje;

	}
