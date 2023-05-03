var cantidadvehiculos = parseInt(prompt("ingrese la cantidad de vehiculos que posee"))
var arraycategorias = []
for (i=1; i<=cantidadvehiculos; i++) {
    var autocategoria = parseInt(prompt("ingrese la categoria correspondiente a su auto numero "+i+":\n1\n2\n3"))
    if (autocategoria == 1) {
        arraycategorias[i] = "10%"
    } else {
        if (autocategoria == 2) {
            arraycategorias[i] = "7%"
        } else {
            if (autocategoria == 3) {
                arraycategorias[i] = "5%"
            } else {
                alert("categoria no valida")
            }
        }
    }
}
alert("los descuentos son:")
for (i=1; i<=cantidadvehiculos; i++) {
    alert("auto nº"+i+": "+arraycategorias[i])
}