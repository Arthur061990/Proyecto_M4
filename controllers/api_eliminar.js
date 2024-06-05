
/*
    DELETE-API/ELIMINAR/:ID:
    *
    Como viajero, quiero hacer eliminar una reserva
    *
    *
*/


// Accede a la variable global
const data = require('../data.js');

//app.post("/api/reservas", (request, res) => {
const hotel = global.hotel;
const reservas = global.reservas;
    
function eliminar_Reserva(req, res) {

    const idBuscado = parseInt(req.params.id);
    const reservaEncontrada = reservas.find(reserva => reserva.numeroReserva === idBuscado);
    if (reservaEncontrada) {
        const index = global.reservas.findIndex(reserva => reserva.numeroReserva === idBuscado);
                if (index !== -1) {
                    global.reservas.splice(index, 1);
                    res.status(200).send(`Reserva con ID ${idBuscado} eliminada correctamente.`);
                    return true;  // Indica que la reserva fue eliminada
                } else {
                    res.status(404).send(`No se encontró una reserva con ID ${idBuscado}.`);
                    return false;  // Indica que no se encontró la reserva
                }
    } else {
        res.status(404).send(`No se encontró una reserva con ID ${idBuscado}.`);
    }

}

module.exports = { eliminar_Reserva};