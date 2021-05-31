/**
 * @Autor= Marta Molina Aguilera
 * */
let tarjeta = document.getElementById("tarjeta");
let subTarjeta = document.createElement("div");
let subTarjeta_hija = document.createElement("div");
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

  subTarjeta_hija.appendChild(annadir);
  subTarjeta_hija.appendChild(lanzar);
  subTarjeta.appendChild(subTarjeta_hija);
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
  constructor(id, llegada, duracion, espera, inicio, fin, presente, enEjecucion, terminado) {
    //ints
    this.id = id;
    this.llegada = llegada;
    this.duracion = duracion;
    this.espera = espera;
    this.inicio = inicio;
    this.fin = fin;
    //Boleeans
    this.presente = presente;
    this.enEjecucion = enEjecucion;
    this.terminado = terminado;
  }
  //---SSETTERS
  set setId(valor) {
    this.id = valor;
  }
  set setLLegada(valor) {
    this.llegada = valor;
  }
  set setDuracion(valor) {
    this.llegada = valor;
  }
  set setespera(valor) {
    this.espera = valor;
  }
  set setInicio(valor) {
    this.inicio = valor;
  }
  set setFin(valor) {
    this.fin = valor;
  }
  //boleans
  set setPresente(valor) {
    this.presente = valor;
  }
  set setEnEjecucion(valor) {
    this.enEjecucion = valor;
  }
  set setTerminado(valor) {
    this.terminado = valor;
  }

  //---GETTERS
  get getId() {
    return this.id;
  }
  get getLlegada() {
    return this.llegada;
  }
  get getDuracion() {
    return this.duracion;
  }
  get getEspera() {
    return this.espera;
  }
  get getInicio() {
    return this.inicio;
  }
  get getFin() {
    return this.fin;
  }
  //booleans
  get getPresente() {
    return this.duracion;
  }
  get getEnEjecucion() {
    return this.enEjecucion;
  }
  get getTerminado() {
    return this.terminado;
  }

}

let arrProcesos = new Array();
let Qtum;
function annadirProceso() {
  let llegada = parseInt(document.getElementById("Llegada").value);
  let duracion = parseInt(document.getElementById("Duracion").value);
  document.getElementById("Llegada").value = "";
  document.getElementById("Duracion").value = "";
  //console.log(llegada);   id,llegada,duracion,espera, inicio,fin, presente, enEjecucion,terminado
  let procc = new Proceso("", llegada, duracion, 0, 0, 0, false, false, false);
  arrProcesos.push(procc);
  //console.log(procc);
}
//Ordenar Procesos por llegada
function compararLlegada(a, b) {
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
function compararDuracion(a, b) {
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
//Dar id a cada proceso

/*
 ***************************************************
 ********** +-+-+-+-+-+ +-+-+-+-+-+-+-+-+ **********
 **********|C|R|E|A|R| |G|R|A|F|I|C|A|S| ***********
 ********** +-+-+-+-+-+ +-+-+-+-+-+-+-+-+ *********
 ***************************************************
 */
let contenedorTabla = document.createElement("div");
let contenedorGrafica = document.createElement("div");
contenedorTabla.setAttribute("class", "contenedor");
contenedorGrafica.setAttribute("class", "contenedor");

let tabla = document.createElement("table");
let grafica = document.createElement("table");
tabla.setAttribute("class", "tabla");
grafica.setAttribute("class", "grafica");
contenedorTabla.appendChild(tabla);
contenedorGrafica.appendChild(grafica);

function asignarIdProcYtrs() {
  for (let i = 0; i < arrProcesos.length; ++i) {
    arrProcesos[i].id = "Proceso " + (i + 1);
    let tr = document.createElement("tr");
    tr.setAttribute("id", "Proceso " + (i + 1));
    grafica.appendChild(tr);
  }
}
function nombrarProcesosEnGrafica() {
  for (let k = 0; k < arrProcesos.length; ++k) {
    let trPadre = document.getElementById(arrProcesos[k].id);
    let tdHijo = document.createElement("td");
    tdHijo.innerHTML = arrProcesos[k].id;
    tdHijo.setAttribute("class", "td_texto");
    trPadre.appendChild(tdHijo);
    grafica.appendChild(trPadre);
  }
}
function baseTablaDatos() {
  let promedioTE = 0;
  let promedioTR = 0;
  let promedioE = 0;
  let promedioP = 0;
  let trTitulos = document.createElement("tr");
  trTitulos.setAttribute("class", "header_tabla");
  trTitulos.innerHTML =
    "<td>Proceso</td> <td>Llegada</td> <td>t(T.Ejecución)</td> <td>Inicio</td>  <td>FIN</td>" +
    "<td>T(T.Respuesta)</td> <td>T.Espera</td> <td>Penalización</td>";
  tabla.appendChild(trTitulos);
  for (let i = 0; i < arrProcesos.length; ++i) {
    let trProcc = document.createElement("tr");
    trProcc.setAttribute("id", "datos" + (arrProcesos[i] || {}).id);
    if (i % 2 == 1) { //Para que sombree una fila sí una no
      trProcc.setAttribute("class", "tr_par");
    }
    let tdId = document.createElement("td");
    tdId.innerHTML = (arrProcesos[i] || {}).id;
    trProcc.appendChild(tdId);

    let tdLlegada = document.createElement("td");
    tdLlegada.innerHTML = (arrProcesos[i] || {}).llegada;
    trProcc.appendChild(tdLlegada);

    let tdT = document.createElement("td");
    tdT.innerHTML = (arrProcesos[i] || {}).duracion;
    promedioTE = promedioTE + (arrProcesos[i] || {}).duracion;
    trProcc.appendChild(tdT);

    let tdInicio = document.createElement("td");
    tdInicio.innerHTML = (arrProcesos[i] || {}).inicio;
    trProcc.appendChild(tdInicio);

    let tdFin = document.createElement("td");
    tdFin.innerHTML = (arrProcesos[i] || {}).fin;
    trProcc.appendChild(tdFin);
    //-------T E P
    let tdEjecucion = document.createElement("td");
    tdEjecucion.innerHTML =
      (arrProcesos[i] || {}).duracion + (arrProcesos[i] || {}).espera;
    promedioTR = promedioTR + ((arrProcesos[i] || {}).duracion + (arrProcesos[i] || {}).espera);
    trProcc.appendChild(tdEjecucion);

    let tdEspera = document.createElement("td");
    tdEspera.innerHTML = (arrProcesos[i] || {}).espera;
    promedioE = promedioE + (arrProcesos[i] || {}).espera;
    trProcc.appendChild(tdEspera);

    let tdPenalizacion = document.createElement("td");
    tdPenalizacion.innerHTML = ((arrProcesos[i] || {}).duracion + (arrProcesos[i] || {}).espera) / (arrProcesos[i] || {}).duracion;
    promedioP = promedioP + (((arrProcesos[i] || {}).duracion + (arrProcesos[i] || {}).espera) / (arrProcesos[i] || {}).duracion);
    trProcc.appendChild(tdPenalizacion);

    tabla.appendChild(trProcc);
  }
  promedioTE = (promedioTE / arrProcesos.length).toLocaleString(undefined, { minimumFractionDigits: 2 });
  promedioTR = (promedioTR / arrProcesos.length).toLocaleString(undefined, { minimumFractionDigits: 2 });
  promedioE = (promedioE / arrProcesos.length).toLocaleString(undefined, { minimumFractionDigits: 2 });
  promedioP = (promedioP / arrProcesos.length).toLocaleString(undefined, { minimumFractionDigits: 2 });
  let promedios = document.createElement("ul");
  promedios.innerHTML = `<span><b>Promedios:</b></span><br> <li>Promedio t (T.Ejecucción) = ${promedioTE}</li><li>Promedio T(Tiempo respuesta) = ${promedioTR}</li><li>Promedio espera = ${promedioE}</li><li>Promedio penalización = ${promedioP}</li>`;
  contenedorTabla.appendChild(promedios);

}
/*
 ********************| FIFO |********************
 */
let momento = 0;
function metodoFIFO() {
  subTarjeta_hija.innerHTML = "";
  subTarjeta_hija.appendChild(contenedorTabla);
  subTarjeta_hija.appendChild(contenedorGrafica);

  arrProcesos.sort(compararLlegada);

  asignarIdProcYtrs();
  nombrarProcesosEnGrafica();

  console.log(arrProcesos);
  let i = 0;


  while (arrProcesos[arrProcesos.length - 1].terminado == false || i > arrProcesos.length) {
    let llegadaProcActual = arrProcesos[i].getLlegada;
    console.log(`I-> ${i} Momento -> ${momento}`);
    //console.log(arrProcesos);
    let duracionExam = arrProcesos[i].duracion - 1;

    if (llegadaProcActual <= momento) {
      arrProcesos[i].enEjecucion = true;
      arrProcesos[i].presente = false;
      arrProcesos[i].inicio = momento;
      let duracionBucle = arrProcesos[i].duracion;
      for (let j = 0; j < duracionBucle; ++j) {
        pintarColumna(j, momento);

        if (j == duracionExam) {
          console.log(`Cambiar TERMINADO proceso: ${i} en momento ${momento}`);
          arrProcesos[i].fin = momento + 1;
          arrProcesos[i].terminado = true;
          arrProcesos[i].enEjecucion = false;
          console.log(arrProcesos);
          ++i;
        }
        ++momento;
      }
    } else {
      for (let k = 0; k < arrProcesos.length; ++k) {
        let llegadaExam = arrProcesos[k].llegada;
        let terminadoSiNo = arrProcesos[k].terminado;
        if (llegadaExam <= momento && terminadoSiNo == false) {
          arrProcesos[j].presente = true;
        }
        let trPadre = document.getElementById(arrProcesos[k].id);
        let tdHijo = document.createElement("td");
        console.log(tdHijo);
        /*poner class ejecucion-> blanco*/
        tdHijo.setAttribute("class", "td_NoPresente");
        trPadre.appendChild(tdHijo);
      }
      ++momento;
    }
  }
  baseTablaDatos();
}

//Shortest Jod First
function metodoSJF() {
  subTarjeta_hija.innerHTML = "";
  subTarjeta_hija.appendChild(contenedorTabla);
  subTarjeta_hija.appendChild(contenedorGrafica);

  arrProcesos.sort(compararLlegada);

  asignarIdProcYtrs();
  nombrarProcesosEnGrafica();
  console.log(arrProcesos);

  let i = 0;
  let momento = 0;
  while (arrProcesos[arrProcesos.length - 1].terminado == false || i > arrProcesos.length) {
    //buscar presentes y comparar duración



  }
}

function metodoRoundRobin() { }

function establecerPresentes(col) {
  for (let i = 0; i < arrProcesos.length; ++i) {
    let llegadaExam = arrProcesos[i].llegada;
    let terminadoSiNo = arrProcesos[i].terminado;

    if (llegadaExam == momento && terminadoSiNo == false) {
      console.log(`Cambiar a presente proceso: ${col} en momento ${momento}`);
      (arrProcesos[i] || {}).presente = true;
      console.log(arrProcesos[col]);
    }
  }
}
function pintarColumna(col, momento) {
  establecerPresentes(col);
  for (let k = 0; k < arrProcesos.length; ++k) {
    console.log(`Momento -> ${momento}`);
    let trPadre = document.getElementById(arrProcesos[k].id);
    let tdHijo = document.createElement("td");

    if (arrProcesos[k].enEjecucion == true) {
      /*poner class ejecucion-> verde*/
      tdHijo.setAttribute("class", "td_enEjecucion");
    } else if (
      arrProcesos[k].enEjecucion == false &&
      arrProcesos[k].presente == true &&
      arrProcesos[k].terminado == false
    ) {
      /*poner class ejecucion-> gris*/
      tdHijo.setAttribute("class", "td_enEspera");
      ++arrProcesos[k].espera;
    } else {
      /*poner class ejecucion-> blanco*/
      tdHijo.setAttribute("class", "td_NoPresente");
    }
    trPadre.appendChild(tdHijo);
  }
}
