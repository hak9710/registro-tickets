document.addEventListener("DOMContentLoaded", function () {
    cargarTickets();
});

function registrarTicket() {
    var tipo = document.getElementById("ticketTipo").value;
    var descripcion = document.getElementById("ticketDescripcion").value;
    var fecha = document.getElementById("ticketFecha").value;
    var precio = document.getElementById("ticketPrecio").value;

    if (fecha.trim() === "" || precio.trim() === "") {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    var nuevoTicket = {
        tipo: tipo,
        descripcion: descripcion || "", // Puede ser un string vacío
        fecha: fecha,
        precio: parseFloat(precio), // Convertimos a número
    };

    // Enviar datos al servicio web
    enviarDatosAlServicioWeb(nuevoTicket);

    // Actualizar la interfaz de usuario
    cargarTickets();
    document.getElementById("ticketForm").reset();
}

function enviarDatosAlServicioWeb(ticket) {
    var url = "https://script.google.com/macros/s/AKfycbxzUUbBsNJ6Y1k6y1u_vcwlaEU5LJOsRUkVkDcvzNPgs0aHrBFR8l3-quEoI4cyRlFB/exec"; // Sustituye con la URL de tu script
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(ticket));
}

function reiniciarApp() {
    localStorage.removeItem("tickets");
    location.reload();
}

function cargarTickets() {
    // Implementa la carga de datos desde la hoja de cálculo de Google Sheets aquí
}
