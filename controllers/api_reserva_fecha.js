

// Accede a la variable global
const data = require('../data.js');

//app.post("/api/reservas", (request, res) => {
const hotel = global.hotel;
const reservas = global.reservas;

//app.get("/api/reservas", (req, res) => {
function reservas_fecha(req, res) {

    const fechaBuscada = req.params.fecha;
    const reservasFiltradas = global.reservas.filter(reserva => reserva.fecha_inicio === fechaBuscada);
    if (reservasFiltradas.length > 0) {
        res.status(200).json(reservasFiltradas);
    } else {
        res.status(404).send(`No se encontraron reservas para la fecha ${fechaBuscada}.`);
    }
}

module.exports = { reservas_fecha};