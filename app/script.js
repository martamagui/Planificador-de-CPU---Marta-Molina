/**
 * @Autor= Marta Molina Aguilera
 * */
let tarjeta = document.getElementById("tarjeta");
let subTarjeta = document.createElement("div");
subTarjeta.setAttribute("class", "sub_tarjeta en_columns");

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

  let annadir = document.createElement("button");
  annadir.setAttribute("id", "annadir");
  annadir.setAttribute("onclick", "crearProceso");
  annadir.innerHTML = "Añadir";
  let lanzar = document.createElement("button");
  lanzar.setAttribute("id", "lanzar");
  lanzar.setAttribute("onclick", param + "()");
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

  subTarjeta.appendChild(formulario);
  subTarjeta.appendChild(annadir);
  subTarjeta.appendChild(lanzar);
}

//********POO********//
let qtum;
function establecerQtum(pram) {
  qtum = param;
}

//CREAR UN OBJETO CON CADA PROCESO INTRODUCIDO
class Proceso{
  constructor (llegada, duracion, presente, enEjecucion){
    //ints
    this.llegada = llegada;
    this.duracion = duracion;
    //Boleeans
    this.presente = presente;
    this.enEjecucion = enEjecucion;
  }
  //SETTERS
  set setLLegada(valor){
    this.llegada=valor;
  }
  set setDuracion(valor){
    this.llegada=valor;
  }
  set setPresente(valor){
    this.presente=valor;
  }
  set setEnEjecucion(valor){
    this.enEjecucion=valor;
  }
 
}

