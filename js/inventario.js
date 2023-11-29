function buscarMaterial() {
    var nombreMaterial = document.getElementById("nombre_material_buscar").value;
    var tabla = document.getElementById("tabla_inventario");
    var filas = tabla.getElementsByTagName("tr");

    // Ocultar todas las filas excepto la cabecera
    for (var i = 1; i < filas.length; i++) {
        filas[i].style.display = "none";
    }

    // Buscar y mostrar la fila que coincide
    for (var i = 1; i < filas.length; i++) {
        var celda = filas[i].getElementsByTagName("td")[1]; // Asume que el nombre está en la segunda columna
        if (celda) {
            if (celda.textContent.toUpperCase() === nombreMaterial.toUpperCase()) {
                filas[i].style.display = "";
                break; // Sale del bucle después de encontrar la coincidencia
            }
        }
    }
}


function mostrarFormulario(modo) {
    var formulario = document.getElementById("formulario-insumo");
    formulario.setAttribute('data-modo', modo);
    // Limpia el formulario aquí si es necesario
    document.getElementById('fondoOpaco').style.display = 'flex';
    formulario.style.display = 'block';
}


function guardarInsumo() {
    var nombreMaterial = document.getElementById("nombre_material").value;
    var cantidad = document.getElementById("cantidad_material").value; // Asegúrate de que este ID es correcto
    var modo = document.getElementById("formulario-insumo").getAttribute("data-modo");

    if (modo === "agregar") {
        agregarMaterial(nombreMaterial, cantidad);
    } else {
        var codigoMaterial = "002"; // Necesitas obtener el código del material a modificar
        modificarMaterial(codigoMaterial, nombreMaterial, cantidad);
    }

    document.getElementById('fondoOpaco').style.display = 'none';
    document.getElementById('formulario-insumo').style.display = 'none';
}
var materialCounter = tabla.rows.length;
function agregarMaterial(nombreMaterial, cantidad) {
    console.log("Agregando material"); // Para depuración
    var tabla = document.getElementById("tabla_inventario").getElementsByTagName('tbody')[0];
    var nuevaFila = tabla.insertRow(-1); // Asegúrate de que se inserta al final
    var codigoNuevoMaterial = '0' + (tabla.rows.length); // Código único
    nuevaFila.insertCell(0).innerHTML = codigoNuevoMaterial;
    nuevaFila.insertCell(1).innerHTML = nombreMaterial;
    nuevaFila.insertCell(2).innerHTML = cantidad;
    // Agrega más celdas si es necesario
}

function modificarMaterial(codigoMaterial, nombreMaterial, cantidad) {
    console.log("Modificando material"); // Para depuración
    var filas = document.getElementById("tabla_inventario").getElementsByTagName('tbody')[0].rows;
    for (var i = 0; i < filas.length; i++) {
        var fila = filas[i];
        if (fila.cells[0].innerHTML === codigoMaterial) {
            fila.cells[2].innerHTML = cantidad;
            break;
        }
    }
}

// Suponiendo que esto se llama cuando el usuario envía el formulario para agregar un material
function onFormSubmit() {
    var nombreMaterial = document.getElementById("inputNombreMaterial").value; // Asume que tienes un input con este id
    var cantidad = document.getElementById("inputCantidad").value; // Asume que tienes un input con este id

    agregarMaterial(nombreMaterial, cantidad);
}

document.getElementById("formulario-insumo").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío real del formulario
    var modo = this.getAttribute("data-modo");
    var nombreMaterial = document.getElementById("nombre_material").value;
    var cantidad = document.getElementById("cantidad_material").value;

    if (modo === "agregar") {
        agregarMaterial(nombreMaterial, cantidad);
    } else {
        var codigoMaterial = // Obtén el código del material a modificar
        modificarMaterial(codigoMaterial, nombreMaterial, cantidad);
    }

    this.style.display = 'none';
    document.getElementById('fondoOpaco').style.display = 'none';
});
