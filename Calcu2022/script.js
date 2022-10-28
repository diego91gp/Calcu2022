window.onload = function () {

    var operando1 = 0, operador = "", resultado = 0, operando2 = 0, memoria = 0, op = false;

    const display = document.querySelector("input");
    const digitos = document.querySelectorAll("button.digitos");
    const operadores = document.querySelectorAll("button.operadores");
    const igual = document.querySelector("button.igual");
    const mem = document.querySelectorAll("button.memo");

    igual.addEventListener("click", iguala);
    for (let digito of digitos) {
        digito.addEventListener("click", insertar);
    }
    for (let op of operadores) {
        op.addEventListener("click", opera);
    }
    for (const m of mem) {
        m.addEventListener("click", memoriza);
    }
    function memoriza() {
        op = true;
        switch (this.getAttribute("id")) {
            case ("m1"):
                memoria =  converteEs(display.value);
                document.getElementById("mem1").innerHTML += `<div><input type="radio" id="r1"><label for="r"1>${memoria}</label><i class="fa-solid fa-eraser"></i></div>`;
                break;
            case ("mup"):
                if (document.querySelector(".Memoria").style.top == "-356px") {
                    document.querySelector(".Memoria").style.top = "0px"
                } else {
                    document.querySelector(".Memoria").style.top = "-356px";
                }
                break;
            case "M+":
                memoria = parseFloat(display.value);
                document.getElementById("mem1").innerHTML = memoria;
                break;
            case "M-":
                memoria = parseFloat(display.value);
                document.getElementById("mem1").innerHTML = memoria;
                break;
            case "mdel":
                memoria = 0;
                document.getElementById("mem1").innerHTML = "";
                document.querySelector(".Memoria").style.top = "0px"
                break;
            default:
                break;
        }

    }

    function e() {
        if (display.value == "0" || op == true) {


            display.value = (Math.E.toFixed(3)).replace(".", ",");

        } else {
            display.value = "ERROR";
        }
    }
    function pi() {

        if (display.value == 0 || op == true) {


            display.value = (Math.PI.toFixed(3)).replace(".", ",");

        } else {
            display.value = "ERROR"
        }
    }
    function raiz() {
        resultado = Math.sqrt(operando1);
        display.value = converteEs(resultado)


    }
    function cuadrado() {

        resultado = (operando1 * operando1);
        display.value = converteEs(resultado);
    }
    function inversa() {
        resultado = 1 / operando1;
        display.value = converteEs(resultado);

    }
    function resetea() {
        operando1 = 0;
        operando2 = 0;
        display.value = "0";
        resultado = 0;

    }
    function cambiaSigno() {
        resultado = operando1 * (-1);
        display.value = converteEs(resultado);
    }
    function seno() {
        resultado = Math.sin(operando1);
        display.value = converteEs(resultado);
    }
    function cos() {
        resultado = Math.cos(operando1);
        display.value = converteEs(resultado);
    }
    function tan() {
        resultado = Math.tan(operando1);
        display.value = converteEs(resultado);
    }

    function converteEs(params) {
        if (String(params).includes(",")) {
            return params;
        }
        if (resultado != 0) {

            return Number(params).toLocaleString("de-DE");
        } else {
            let cambia = String(params).replace(/\./g, "");
            return String(Number(cambia).toLocaleString("de-DE"))
        };
    }
    function cambiaComa(params) {
        let cambia = String(params).replace(".", "");
        cambia = cambia.replace(",", ".");
        return parseFloat(cambia);

    }
    function opera() {
        operando1 = cambiaComa(display.value);
        op = true;
        switch (this.textContent) {
            case String.fromCharCode(10232):
                if (display.value.length == 1) {
                    display.value = "0";
                    break;
                } else {
                    display.value = display.value.slice(0, display.value.length - 1);
                    break;
                }
            case (String.fromCharCode(8730)):
                raiz();
                break;
            case ("e"):
                e();
                break;
            case ("x2"):
                cuadrado();
                break;
            case ("1/x"):
                inversa();
                break;
            case (String.fromCharCode(928)):
                pi();
                break;
            case ("C"):
                resetea();
                break;
            case ("CE"):
                    resetea();
                    break;
            case ("e"):
                e();
                break;
            case "sin":
                seno();
                break;
            case "cos":
                cos();
                break;
            case "tan":
                tan();
                break;
            case String.fromCharCode(177):
                cambiaSigno();
                break;
            default:
                operador = this.textContent;
                break;
        }
    }
    function iguala() {
        if (operador == "x") {
            operador = "*";

        } if (operador == String.fromCharCode(247)) {
            operador = "/";

        }
        if (operador == String.fromCharCode(37)) {
            operando1 = operando1 / 100;
            operador = "*";

        }
        operando2 = cambiaComa(display.value);
        resultado = (`${operando1} ${operador} ${operando2}`);
        display.value = converteEs(eval(resultado));
        operador = "";
        operando2 = 0;
        op = false;

    }

    function insertar() {

        if (resultado != 0) {
            resultado = 0;
            display.value = converteEs(this.textContent);
        } else {
            if (display.value == "0" || op == true) {
                if (this.textContent == "," && display.value == "0") {
                    display.value = converteEs(display.value + this.textContent);
                }
                else {
                    display.value = converteEs(this.textContent);
                }
            } else {
                if (String(display.value).includes(",") && this.textContent == ",") {

                } else {
                    display.value = converteEs(display.value + this.textContent);
                }
            }
        }
        op = false;
    }
}
