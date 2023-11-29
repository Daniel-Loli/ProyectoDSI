function mostrarFormulario(formularioId) {
    // Oculta todos los formularios
    document.getElementById('registroForm').style.display = 'none';
    document.getElementById('pedidoForm').style.display = 'none';

    // Muestra el formulario correspondiente al ID proporcionado
    document.getElementById(formularioId).style.display = 'block';
}