let button = document.getElementById("Clikea");
let resultado = document.getElementById("Resultado")
let contar = 0;
let reset = document.getElementById("quintaclase")
let bajar = document.getElementById("bajar")

bajar.onclick = function() {
    contar --
    resultado.innerText = contar
}



button.onclick = function() {
    contar ++
    resultado.innerText = contar;
}


reset.onclick = function() {
    reset.textContent = 0
    contar = -1
}



