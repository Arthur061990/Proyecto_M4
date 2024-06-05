
/*
    PUT-/api/Reservas_cambio_id/:id
    *
    Como huésped, necesito cambiar mi reserva en el hotel "Hotel Paraíso". 
    Originalmente reservé una habitación doble, 
    pero ahora necesito una suite familiar. Mi número de reserva es 12345

    A manera de ejemplo se ira a la reserva y se modificara:
    sencilla a doble
    doble a sencilla
    *
    *
*/

// Accede a la variable global
const data = require('../data.js');

//app.post("/api/reservas", (request, res) => {
const hotel = global.hotel;
const reservas = global.reservas;


function api_reservas_cambio_id(req, res) {
//app.put("/api/reservas/:id", (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const reservaEncontrada = reservas.find(reserva => reserva.numeroReserva === idBuscado);
    if (reservaEncontrada) {
        console.log("Reserva encontrada:", reservaEncontrada);
        //res.json({ reserva: reservaEncontrada });
        if (reservaEncontrada.Tipo=="doble") {
            // Modificar el valor de 'nombre' en la reserva encontrada
            reservaEncontrada.Tipo = "sencilla"
            res.json({ reserva: reservaEncontrada });
        }else{
            reservaEncontrada.Tipo = "doble"
            res.json({ reserva: reservaEncontrada });
            }

    } else {
        console.log("Reserva no encontrada");
        res.json({ mensaje: "Reserva no encontrada" });
    }
};

module.exports = { api_reservas_cambio_id};