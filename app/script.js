/**
 * @Autor= Marta Molina Aguilera
 * */
let tarjeta = document.getElementById("tarjeta");
let subTarjeta = document.createElement("div");
let subTarjeta_hija= document.createElement("div");
subTarjeta.setAttribute("class", "sub_tarjeta en_columns");
subTarjeta_hija.setAttribute("class", "sub_tarjeta en_columns");

//VACIAR Y PASAR A LOS CAMPOS DE TEXTO
function mostrarForm(param) {
  console.log(param);
  tarjeta.innerHTML = "";
  let num;
  let campos = ["Llegada", "Duracion", "Qtum"];
  tarjeta.appendChild(subTarjeta);
  let titulo = document.createElement("h1");
  titulo.setAttribute("class", "st_titulo");

  let explicacion = document.createElement("span");
  explicacion.setAttribute("class", "st_texto");
  let formulario = document.createElement("form");
  subTarjeta_hija.appendChild(formulario);

  let annadir = document.createElement("button");
  annadir.setAttribute("id", "annadir");
  annadir.setAttribute("onclick", "annadirProceso()");
  annadir.innerHTML = "Añadir";
  let lanzar = document.createElement("button");
  lanzar.setAttribute("id", "lanzar");
  lanzar.setAttribute("onclick", /*param + "()"*/ "imprimirArray()");
  lanzar.innerHTML = "Lanzar";

  if (param == "metodoFIFO") {
    titulo.innerHTML = "FIFO";
    explicacion.innerHTML =
      "El primer proceso en llegar, será el primero en ser atendido.";
    num = 2;
  } else if (param == "metodoSJF") {
    titulo.innerHTML = "SJF (Shortest Job First)";
    explicacion.innerHTML = "El más corto será el primero en ser atendido.";
    num = 2;
  } else if (param == "metodoRoundRobin") {
    titulo.innerHTML = "Round Robin";
    explicacion.innerHTML =
      "Se establece un intervalo de tiempo a cada proceso. Una vez este es agotado, pasa al siguiente.";
    num = 3;
  } else {
  }
  subTarjeta.appendChild(titulo);
  subTarjeta.appendChild(explicacion);
  
  //cossas dek for
  for (let i = 0; i < num; ++i) {
    let dInput = document.createElement("div");
    let lbl = document.createElement("label");
    let inputTxt = document.createElement("input");
    lbl.setAttribute("for", campos[i]);
    lbl.innerHTML = campos[i] + ": ";
    inputTxt.setAttribute("type", "text");
    inputTxt.setAttribute("id", campos[i]);
    inputTxt.setAttribute("name", campos[i]);

    dInput.appendChild(lbl);
    dInput.appendChild(inputTxt);
    formulario.appendChild(dInput);
  }

  subTarjeta.appendChild(subTarjeta_hija);
  subTarjeta.appendChild(annadir);
  subTarjeta.appendChild(lanzar);
}

/*
************************************************
 ************ _____   ____   ____  *************
 ************ |  __ \ / __ \ / __ \ ************
 ************ | |__) | |  | | |  | |************
 ************ |  ___/| |  | | |  | |************
 ************ | |    | |__| | |__| |************
 ************ |_|     \____/ \____/*************
 ***********************************************
 */

let qtum;
function establecerQtum(pram) {
  qtum = param;
}

//CREAR UN OBJETO CON CADA PROCESO INTRODUCIDO
class Proceso {
  constructor(llegada, duracion, presente, enEjecucion) {
    //ints
    this.llegada = llegada;
    this.duracion = duracion;
    //Boleeans
    this.presente = presente;
    this.enEjecucion = enEjecucion;
  }
  //SETTERS
  set setLLegada(valor) {
    this.llegada = valor;
  }
  set setDuracion(valor) {
    this.llegada = valor;
  }
  set setPresente(valor) {
    this.presente = valor;
  }
  set setEnEjecucion(valor) {
    this.enEjecucion = valor;
  }
  //GETTER
  get getLlegada() {
    return this.llegada;
  }
  get getDuracion() {
    return this.duracion;
  }
  get getPresente() {
    return this.duracion;
  }
  get getEnEjecucion() {
    return this.enEjecucion;
  }
}

let arrProcesos = new Array();
let Qtum;
function annadirProceso() {
  let llegada = parseInt(document.getElementById("Llegada").value);
  let duracion = parseInt(document.getElementById("Duracion").value);
  document.getElementById("Llegada").value = "";
  document.getElementById("Duracion").value = "";
  console.log(llegada);
  let procc = new Proceso(llegada, duracion, false, false);
  arrProcesos.push(procc);
  console.log(procc);
}
function imprimirArray() {
  arrProcesos.sort(compare);
  console.log(arrProcesos);
}

//Ordenar Procesos por llegada
function compareLlegada(a, b) {
  const itemA = a.llegada;
  const itemB = b.llegada;

  let comparison = 0;
  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = -1;
  }
  return comparison;
}

//Ordenar Procesos por duración
function compareDuracion(a, b) {
  const itemA = a.duracion;
  const itemB = b.duracion;

  let comparison = 0;
  if (itemA > itemB) {
    comparison = 1;
  } else if (itemA < itemB) {
    comparison = -1;
  }
  return comparison;
}
/*
***************************************************
********** +-+-+-+-+-+ +-+-+-+-+-+-+-+-+ **********
**********|C|R|E|A|R| |G|R|A|F|I|C|A|S| ***********
********** +-+-+-+-+-+ +-+-+-+-+-+-+-+-+ *********
***************************************************
*/
let contenedorTabla= document.createElement("div");
let contenedorGrafica=document.createElement("div");
contenedorTabla.setAttribute("class","contenedor");
contenedorGrafica.setAttribute("class","contenedor");

let tabla = document.createElement("table");
let grafica= document.createElement("table");
tabla.setAttribute("class", "tabla");
grafica.setAttribute("class", "grafica");
contenedorTabla.appendChild(tabla);
contenedorGrafica.appendChild(grafica);

/*
********************| FIFO |********************
  */                         


function metodoFIFO(){
subTarjeta_hija.innerHTML="";
}