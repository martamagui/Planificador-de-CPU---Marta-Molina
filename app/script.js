/** 
 * @Autor= Marta Molina Aguilera
 * */
let tarjeta = document.getElementById("tarjeta");
let subTarjeta = document.createElement("div");
subTarjeta.setAttribute("class", "sub_tarjeta en_columns");
 
//VACIAR Y PASAR A LOS CAMPOS DE TEXTO
function mostrarForm(param) {
  tarjeta.innerHTML="";
  tarjeta.appendChild(subTarjeta);
  let titulo= document.createElement("h1");
  titulo.setAttribute("class", "st_titulo");

  let explicacion=document.createElement("span");
  explicacion.setAttribute("class","st_texto");

    if(param=="FIFO"){
      titulo.innerHTML="FIFO";
      explicacion.innerHTML="El primer proceso en llegar, será el primero en ser atendido.";
      
    }else if(param=="SJF"){
      titulo.innerHTML="SJF (Shortest Job First)";
      explicacion.innerHTML="El más corto será el primero en ser atendido.";

    }else if(param=="Round Robin"){
      titulo.innerHTML="Round Robin";
      explicacion.innerHTML="Se establece un intervalo de tiempo a cada proceso. Una vez este es agotado, pasa al siguiente.";
    }else{}
    subTarjeta.appendChild(titulo);
    subTarjeta.appendChild(explicacion);
}





//********POO********//
let qtum;
function establecerQtum(pram){
  qtum=param;
}
//CREAR UN OBJETO CON CADA PROCESO INTRODUCIDO
function crearProceso(llegada,duracion,prioridad,presente,enEjecucion){
  //ints
  this.llegda=llegada;
  this.duracion=duracion;
  this.prioridad=prioridad;
  //Boleeans
  this.presente=presente;
  this.enEjecucion=enEjecucion

}