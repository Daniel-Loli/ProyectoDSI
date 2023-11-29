function buscarPedido() {
    // La función ahora se usa para demostrar cómo se podría actualizar la tabla con productos reales.
    alert('Simulación de búsqueda de pedido');
}

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

// Si quieres cerrar el formulario, puedes agregar un botón de cierre y manejarlo aquí
