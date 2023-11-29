function mostrarFormulario(formularioId) {
    // Oculta todos los formularios
    document.getElementById('registroForm').style.display = 'none';
    document.getElementById('pedidoForm').style.display = 'none';

    // Muestra el formulario correspondiente al ID proporcionado
    document.getElementById(formularioId).style.display = 'block';
}

function agregarClienteATabla() {
    // Obten los valores del formulario
    var nombre = document.getElementById('clienteNombre').value;
    var apellidos = document.getElementById('clienteApellidos').value;
    var dni = document.getElementById('clienteDNI').value;
    var direccion = document.getElementById('clienteDireccion').value;
    var telefono = document.getElementById('clienteTelefono').value;
    var correo = document.getElementById('clienteCorreo').value;

    // Crea una nueva fila en la tabla
    var tabla = document.getElementById('tablaBody');
    var nuevaFila = tabla.insertRow();
    var celda;

    // Inserta las celdas con los valores
    celda = nuevaFila.insertCell(); celda.innerHTML = tabla.rows.length;
    celda = nuevaFila.insertCell(); celda.innerHTML = nombre;
    celda = nuevaFila.insertCell(); celda.innerHTML = apellidos;
    celda = nuevaFila.insertCell(); celda.innerHTML = dni;
    celda = nuevaFila.insertCell(); celda.innerHTML = direccion;
    celda = nuevaFila.insertCell(); celda.innerHTML = telefono;
    celda = nuevaFila.insertCell(); celda.innerHTML = correo;
    
    // Agrega valores ficticios para las columnas restantes
    celda = nuevaFila.insertCell(); celda.innerHTML = "2"; // Cantidad
    celda = nuevaFila.insertCell(); celda.innerHTML = "4 días"; // Tiempo de entrega
    celda = nuevaFila.insertCell(); celda.innerHTML = "Luces espectaculares"; // Detalles del producto
    celda = nuevaFila.insertCell(); celda.innerHTML = "130"; // Precio
    celda = nuevaFila.insertCell(); celda.innerHTML = "260"; // Total

    // Celdas para acciones
// ...

    // Celdas para acciones
    celda = nuevaFila.insertCell();
    celda.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';

// ...

}


// Función para manejar el evento de envío del formulario
function registrarCliente(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    agregarClienteATabla();
    mostrarFormulario(''); // Oculta el formulario
}

function eliminarFila(btn) {
    // Encuentra la fila más cercana al botón y la elimina
    var fila = btn.closest('tr');
    fila.remove();
    actualizarNumeracion();
}

function actualizarNumeracion() {
    // Obtiene todas las filas de la tabla (excepto el encabezado)
    var filas = document.querySelectorAll('#tablaBody tr');
    // Actualiza la numeración
    filas.forEach((fila, index) => {
        fila.cells[0].innerHTML = index + 1;
    });
}


function editarFila(btn) {
    var fila = btn.closest('tr');
    var celdas = fila.getElementsByTagName('td');

    document.getElementById('clienteNombreEdit').value = celdas[1].textContent;
    document.getElementById('clienteApellidosEdit').value = celdas[2].textContent;
    document.getElementById('clienteDNIEdit').value = celdas[3].textContent;
    document.getElementById('clienteDireccionEdit').value = celdas[4].textContent;
    document.getElementById('clienteTelefonoEdit').value = celdas[5].textContent;
    document.getElementById('clienteCorreoEdit').value = celdas[6].textContent;
    // Continúa asignando los valores a los campos restantes...

    // Guardar el índice de la fila para usarlo más tarde
    document.getElementById('indiceEdicion').value = fila.rowIndex;

    // Muestra el formulario de edición
    document.getElementById('formularioEdicion').style.display = 'block';
}
function actualizarCliente() {
    var indice = document.getElementById('indiceEdicion').value;
    var fila = document.getElementById('tablaBody').rows[indice - 1];
    var celdas = fila.getElementsByTagName('td');

    celdas[1].textContent = document.getElementById('clienteNombreEdit').value;
    celdas[2].textContent = document.getElementById('clienteApellidosEdit').value;
    celdas[3].textContent = document.getElementById('clienteDNIEdit').value;
    celdas[4].textContent = document.getElementById('clienteDireccionEdit').value;
    celdas[5].textContent = document.getElementById('clienteTelefonoEdit').value;
    celdas[6].textContent = document.getElementById('clienteCorreoEdit').value;
    // Continúa actualizando los campos restantes...

    // Oculta el formulario de edición
    document.getElementById('formularioEdicion').style.display = 'none';
}



