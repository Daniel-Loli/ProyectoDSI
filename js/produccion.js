function buscarPedido() {
    var codigoBuscado = document.getElementById('codigo_pedido').value;
    mostrarTodosLosProductos(); // Restablece la vista de la tabla
    if (codigoBuscado) {
        // Ocultar todas las filas que no coincidan con el código buscado
        var todasLasFilas = document.querySelectorAll('#tabla_pedido tbody tr');
        todasLasFilas.forEach(fila => {
            if (!fila.id.includes(codigoBuscado)) {
                fila.style.display = 'none';
            }
        });
    }
}

function mostrarTodosLosProductos() {
    var todasLasFilas = document.querySelectorAll('#tabla_pedido tbody tr');
    todasLasFilas.forEach(fila => {
        fila.style.display = ''; // Restablece el estilo de visualización
    });
}

// Resto del código...


// Requerimiento 5: Función para generar el reporte final (demostración)
// Requerimiento 5: Función para generar el reporte final (demostración)
function generarReporte() {
    // Aquí puedes implementar la lógica para generar el reporte
    // utilizando la información mostrada en la tabla.
    alert('Reporte generado exitosamente');
}

function generarCostoProduccion() {
    // Puedes implementar la lógica para calcular el costo de producción aquí
    // y mostrarlo en el span con id "costo_produccion".
    // Aquí se usa una demostración simple.
    const costoProduccion = 100; // Simulación de costo de producción
    document.getElementById('costo_produccion').innerText = costoProduccion;
}

function generarOrdenProduccion() {
    // Aquí puedes implementar la lógica para generar la orden de producción.
    alert('Orden de producción generada exitosamente');
}

document.getElementById('crearOrdenBtn').addEventListener('click', function() {
    document.getElementById("container-form").classList.remove("inactive");
    document.querySelector('.overlay').style.visibility = 'visible';
});
        // Mostrar el formulario
        document.getElementById('crearOrdenBtn').addEventListener('click', function() {
            document.getElementById("container-form").style.display = 'block';
            document.querySelector('.overlay').style.display = 'block';
        });

        // Cerrar el formulario
        function closeForm() {
            document.getElementById("container-form").style.display = 'none';
            document.querySelector('.overlay').style.display = 'none';
        }
                // Cerrar el formulario cuando se presione "Escape"
                document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeForm();
            }
        });