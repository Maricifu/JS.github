const horalActual=parseInt(prompt("Hora actua: "));
const cantidadHoras=parseInt(prompt("Cantidad de horas: "));

const horaFutura=(horalActual+cantidadHoras)%12;

console.log("Hora futura es:"+horaFutura);