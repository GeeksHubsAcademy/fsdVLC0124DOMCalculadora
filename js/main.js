const pantalla = document.getElementById("pantalla");
const botones = document.getElementsByClassName("boton");
const arrayBotones = Array.from(botones);

let operando1 = 0;
let operando2 = 0;
let operador = "";
let resultado = 0;
let cambio = false;

const operar = (arg1, arg2, oper) => {
  let res = eval(`${arg1} ${oper} ${arg2}`);

  pantalla.innerHTML = res
  operando1 = res
};

arrayBotones.map((item) => {
  item.addEventListener("click", (e) => {
    if (!isNaN(item.innerHTML) || item.innerHTML === ".") {
      if (item.innerHTML !== "." && pantalla.innerHTML == "0") {
        pantalla.innerHTML = e.target.innerHTML;
      } else {
        pantalla.innerHTML += e.target.innerHTML;
      }

    if(operador === ""){
        operando1 = pantalla.innerHTML
    } else {
        if(cambio){
            pantalla.innerHTML = e.target.innerHTML
            cambio = false
        }
        operando2 = pantalla.innerHTML
    }
    } else if (pantalla.innerHTML !== "0") {

      switch (e.target.innerHTML) {
        case "=":
          operar(operando1, operando2, operador);
          break;

        case "c":
          pantalla.innerHTML = "0";
          operando1 = 0;
          operando2 = 0;
          operador = "";
          break;

        default:
            operador = e.target.innerHTML
            cambio = true;
      }
    }
  });
});
