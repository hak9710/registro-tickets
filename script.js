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
        descripcion: descripcion || "",
        fecha: fecha,
        precio: parseFloat(precio),
    };

    enviarDatosAlServicioWeb(nuevoTicket);

    cargarTickets();
    document.getElementById("ticketForm").reset();
}

function enviarDatosAlServicioWeb(ticket) {
    var url = "https://script.google.com/macros/s/AKfycbwvvtp9jjciqF_Flyj63KZAq2NKgef9wh1Ehfgs6xA6IkLy4DNZRMX-HZKbEyel16iT/exec"; // Reemplazar con la URL de tu script
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
