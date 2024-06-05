/*
    GET-/api/reservas/:id
    *
    Como recepcionista, necesito verificar 
    los detalles de la reserva del huésped que acaba de 
    llegar al hotel. Su número de reserva es 12345.
    *
    *
*/

// Accede a la variable global
const data = require('../data.js');

//app.post("/api/reservas", (request, res) => {
const hotel = global.hotel;
const reservas = global.reservas;


function api_reserva_id(req, res) {
//app.get("/api/reservas/:id", (req, res) => {
    const idBuscado = parseInt(req.params.id);
    const reservaEncontrada = reservas.find(reserva => reserva.numeroReserva === idBuscado);
    if (reservaEncontrada) {
        console.log("Reserva encontrada:", reservaEncontrada);
        res.json({ reserva: reservaEncontrada });
    } else {
        console.log("Reserva no encontrada");
        res.json({ mensaje: "Reserva no encontrada" });
    }
};

module.exports = { api_reserva_id};