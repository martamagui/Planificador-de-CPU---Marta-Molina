/*Autor= Marta Molina*/
let tarjeta = document.getElementById("tarjeta");

function cargarIncial() {
  let explicacion = document.createElement("h3");
  explicacion.innerHTML =
    "Lo primero que deberás hacer es seleccionar qué algoritmo te gustaría que organice la ejeccución de tus procesos:";
  let botones = document.createElement("div");
  botones.setAttribute("id", "botones");
  tarjeta.appendChild(explicacion);
  botones.innerHTML =
    '<div id="packFifo" class="pack"><button onclick="vaciarTarjeta("FIFO")">FIFO</button><span>El primer proceso en llegar, será el priemro en ser atendido</span></div>'+
    '<div id="packSJF" class="pack"><button onclick="vaciarTarjeta("SJF")">SJF</button><span>El más corto será el primero en ser atendido.</span></div>'+
    '<div id="packRRobin" class="pack"><button onclick="vaciarTarjeta("Round Robin")">Round Robin</button><span>Se establece un intervalo de tiempo a cada proceso. Una vez este es agotado, pasa al siguiente.</span></div>';
tarjeta.appendChild(explicacion);
tarjeta.appendChild(botones);
}

function vaciarTarjeta(param) {
    if(param=="FIFO"){

    }else if(param=="SJF"){

    }else if(param=="Round Robin"){

    }else{}
    tarjeta.innerHTML="";
}
