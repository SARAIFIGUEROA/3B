var cantidades = parseInt(prompt("cuantas cantidades desea ingresar"))
var mayor = 0
var menor = 0
var neutro = 0
for (i=1; i<=cantidades; i++) {
var mayoromenor = parseFloat(prompt("ingrese el valor de la cantidad nº"+i))
if (mayoromenor>0) {
    mayor++
} else {
    if (mayoromenor<0) {
        menor++
    } else {
        neutro++
    }
}
}
alert("hay "+mayor+" valores mayores a 0, "+menor+" valores menores a 0 y "+neutro+"valores neutros")