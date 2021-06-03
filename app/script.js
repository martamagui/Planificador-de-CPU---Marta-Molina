/**
 * @Autor= Marta Molina Aguilera
 * */
let tarjeta = document.getElementById("tarjeta");
let subTarjeta = document.createElement("div");
let subTarjeta_hija = document.createElement("div");
subTarjeta.setAttribute("class", "sub_tarjeta en_columns");
subTarjeta_hija.setAttribute("class", "sub_tarjeta en_columns");

let annadir = document.createElement("button");
annadir.setAttribute("id", "annadir");
annadir.setAttribute("class", "btn");
annadir.innerHTML = "Añadir";

let lanzar = document.createElement("button");
lanzar.setAttribute("id", "lanzar");
lanzar.setAttribute("class", "btn");
lanzar.innerHTML = "Lanzar";

let txtMensaje = document.createElement("span");
txtMensaje.setAttribute("class", "txt_oculto");




let campos = ["Llegada", "Duracion", "Qtum"];
//VACIAR Y PASAR A LOS CAMPOS DE TEXTO
function mostrarForm(param) {
  console.log(param);
  tarjeta.innerHTML = "";
  let num;
  tarjeta.appendChild(subTarjeta);
  let titulo = document.createElement("h1");
  titulo.setAttribute("class", "st_titulo");

  let explicacion = document.createElement("span");
  explicacion.setAttribute("class", "st_texto");
  let formulario = document.createElement("form");
  subTarjeta_hija.appendChild(formulario);

  if (param == "metodoFIFO") {
    titulo.innerHTML = "FIFO";
    explicacion.innerHTML =
      "El primer proceso en llegar, será el primero en ser atendido.";
    num = 2;
  } else if (param == "metodoSJF") {
    titulo.innerHTML = "SJF (Shortest Job First)";
    explicacion.innerHTML = "El proceso más corto será el primero en ser atendido.";
    num = 2;
  } else if (param == "metodoRoundRobin") {
    titulo.innerHTML = "Round Robin";
    explicacion.innerHTML =
      "Se establece un intervalo de tiempo a cada proceso. Una vez este es agotado, pasa al siguiente aunque el que está siendo ejecutado no haya terminado. Este volvería de nuevo a la cola de espera.";
    num = 3;
  } else {
  }
  subTarjeta.appendChild(titulo);
  subTarjeta.appendChild(explicacion);
  //cossas dek for
  for (let i = 0; i < num; ++i) {
    let dInput = document.createElement("div");
    dInput.setAttribute("class", ("div_" + campos[i]));
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

  lanzar.setAttribute("onclick", param + "()");
  annadir.setAttribute("onclick", "annadirProceso( '" + param + "')");
  subTarjeta_hija.appendChild(txtMensaje);
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
function annadirProceso(param) {
  let llegada = parseInt((document.getElementById("Llegada").value) === "" ? 0 : (document.getElementById("Llegada").value));
  let duracion = parseInt((document.getElementById("Duracion").value) === "" ? 0 : (document.getElementById("Duracion").value));
  if (duracion <= 0) {
    txtMensaje.setAttribute("class", "txt_error");
    txtMensaje.innerHTML = "La duración debe ser superior a 0.";
    //txtCorrecto.setAttribute("class", "txt_oculto");
  } else {
    txtMensaje.setAttribute("class", "txt_correcto");
    txtMensaje.innerHTML = "Añadido.";
    //console.log(llegada);   id,llegada,duracion,espera, inicio,fin, presente, enEjecucion,terminado
    let procc = new Proceso("", llegada, duracion, 0, 0, 0, false, false, false);
    arrProcesos.push(procc);
    if (param == 'metodoRoundRobin') {
      establecerQtum()
    }
    //console.log(procc);
  }
  document.getElementById("Llegada").value = "";
  document.getElementById("Duracion").value = "";
}
let qtum;
function establecerQtum() {
  qtum = parseInt(document.getElementById("Qtum").value);
  console.log(`Qtum:::: ${qtum}`)
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
    tdPenalizacion.innerHTML = Number.parseFloat(((arrProcesos[i] || {}).duracion + (arrProcesos[i] || {}).espera) / (arrProcesos[i] || {}).duracion).toFixed(2);
    promedioP = promedioP + (((arrProcesos[i] || {}).duracion + (arrProcesos[i] || {}).espera) / (arrProcesos[i] || {}).duracion);
    trProcc.appendChild(tdPenalizacion);

    tabla.appendChild(trProcc);
  }
  promedioTE = Number.parseFloat(promedioTE / arrProcesos.length).toFixed(2);
  promedioTR = Number.parseFloat(promedioTR / arrProcesos.length).toFixed(2);
  promedioE = Number.parseFloat(promedioE / arrProcesos.length).toFixed(2);
  promedioP = Number.parseFloat(promedioP / arrProcesos.length).toFixed(2);
  let promedios = document.createElement("ul");
  promedios.innerHTML = `<span><b>Promedios:</b></span><br> <li>Promedio t (T.Ejecucción) = ${promedioTE}</li><li>Promedio T(Tiempo respuesta) = ${promedioTR}</li><li>Promedio espera = ${promedioE}</li><li>Promedio penalización = ${promedioP}</li>`;
  contenedorTabla.appendChild(promedios);

}
function prepararPantallaTablas() {
  subTarjeta_hija.innerHTML = "";
  subTarjeta_hija.appendChild(contenedorTabla);
  subTarjeta_hija.appendChild(contenedorGrafica);
}
/*
 ********************| FIFO |********************
 */
let momento = 0;
function metodoFIFO() {
  prepararPantallaTablas();
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
      establecerEnejecucion(i);
      let duracionBucle = arrProcesos[i].duracion;

      for (let j = 0; j < duracionBucle; ++j) {

        pintarColumna(j, momento);

        if (j == duracionExam) {
          establecerTerminado(i);
          ++i;
        }
        ++momento;
      }
    } else {
      for (let k = 0; k < arrProcesos.length; ++k) {
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
  prepararPantallaTablas();
  //Primero ordena por llegada y luego duración
  arrProcesos.sort(compararDuracion);
  arrProcesos.sort(compararLlegada);

  asignarIdProcYtrs();
  nombrarProcesosEnGrafica();
  console.log(arrProcesos);
  let i = 0;
  let elegido = 0;
  let terminados = false;
  let excluidos = new Array();
  while (terminados == false && i <= arrProcesos.length) {
    console.log(`I-> ${elegido} Momento -> ${momento}`);

    if (arrProcesos[elegido].getLlegada <= momento && excluidos.includes(elegido) == false) {
      establecerEnejecucion(elegido);
      buscarPresentes();
      for (let j = 0; j < arrProcesos[elegido].duracion; ++j) {
        pintarColumna(j, momento);
        ++momento;
      }
      establecerTerminado(elegido);
      excluidos.push(elegido);
      buscarPresentes();

    } else {
      for (let k = 0; k < arrProcesos.length; ++k) {
        let trPadre = document.getElementById(arrProcesos[k].id);
        let tdHijo = document.createElement("td");
        console.log(tdHijo);
        /*poner class ejecucion-> blanco*/
        tdHijo.setAttribute("class", "td_NoPresente");
        trPadre.appendChild(tdHijo);
      }
      ++momento;
      buscarPresentes();
    }
    arrProcesos[elegido].enEjecucion = false;
    arrProcesos[elegido].presente = false;
    for (let n = 0; n < arrProcesos.length; ++n) {//poner como elegido el 1o que esté presente 
      if (arrProcesos[n].presente == true) {
        elegido = n;
        n = arrProcesos.length;
      }
    }
    terminados = true;
    for (let l = 0; l < arrProcesos.length; ++l) {//si algun proceso está presente y dura menos que el anterior elegido, ese pasa a ser el elegido
      if (arrProcesos[l].terminado == false) {
        terminados = false;
        if ((arrProcesos[l].duracion < arrProcesos[elegido].duracion)) {
          if (arrProcesos[l].presente == true) {
            elegido = l;
          }
        }
      }
    }
  }
  baseTablaDatos();//imprimir los datos de la tabla
}






function metodoRoundRobin() {
  prepararPantallaTablas();
  arrProcesos.sort(compararLlegada);

  asignarIdProcYtrs();
  nombrarProcesosEnGrafica();

  let elegido = 0;
  let excluidos = new Array();
  let duraciones = new Array();
  for (let i = 0; i < arrProcesos.length; ++i) {
    duraciones.push(arrProcesos[i].duracion);
  }

  console.log(arrProcesos);
  console.log(duraciones);

  establecerEnejecucion(elegido);


  while (excluidos.length < arrProcesos.length) {
    for (let k = 0; k < arrProcesos.length; ++k) {
      if ((arrProcesos[k].presente == true && k != elegido) && excluidos.includes(k) == false) {
        establecerPausa(elegido);
        elegido = k;
        k = arrProcesos.length + 3;
      }
    }
    if (arrProcesos[elegido].getLlegada <= momento && excluidos.includes(elegido) == false) {
      establecerEnejecucion(elegido);
      let durBucle = (duraciones[elegido] < qtum) ? duraciones[elegido] : qtum;
      console.log(durBucle);
      for (let j = 0; j < durBucle; ++j) {
        pintarColumna();
        ++momento;
      }
      //console.log(`%cDuración antes de la resta ${duraciones[elegido]}`, "background-color: yellow");
      duraciones[elegido] = duraciones[elegido] - durBucle;
      console.log(`%cDuración tras la resta ${duraciones[elegido]}`, "background-color: yellow");

      if (duraciones[elegido] == 0) {
        establecerTerminado(elegido);
        excluidos.push(elegido);
      }
      buscarPresentes();

    } else {
      for (let k = 0; k < arrProcesos.length; ++k) {
        let trPadre = document.getElementById(arrProcesos[k].id);
        let tdHijo = document.createElement("td");
        console.log(tdHijo);
        /*poner class ejecucion-> blanco*/
        tdHijo.setAttribute("class", "td_NoPresente");
        trPadre.appendChild(tdHijo);
      }
      ++momento;
      buscarPresentes();
    }


  }

  console.log(excluidos);
  baseTablaDatos();
}



function buscarPresentes() {
  for (let i = 0; i < arrProcesos.length; ++i) {
    if (arrProcesos[i].llegada == momento && arrProcesos[i].terminado == false) {
      //console.log(`Cambiar a presente proceso: ${col} en momento ${momento}`);
      (arrProcesos[i] || {}).presente = true;
      //console.log(arrProcesos[col]);
    }
  }
}

function establecerEnejecucion(i) {
  arrProcesos[i].enEjecucion = true;
  arrProcesos[i].presente = false;
  arrProcesos[i].inicio = momento;
}

function establecerTerminado(i) {
  console.log(`Cambiar TERMINADO proceso: ${i} en momento ${momento}`);
  arrProcesos[i].fin = momento + 1;
  arrProcesos[i].terminado = true;
  arrProcesos[i].enEjecucion = false;
  //console.log(arrProcesos);
}

function establecerPausa(i) {
  (arrProcesos[i] || {}).presente = true;
  arrProcesos[i].enEjecucion = false;
}

function pintarColumna() {

  buscarPresentes();
  for (let k = 0; k < arrProcesos.length; ++k) {
    //console.log(`Momento -> ${momento}`);
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
