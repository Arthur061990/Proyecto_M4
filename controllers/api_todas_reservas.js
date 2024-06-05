
// Accede a la variable global
const data = require('../data.js');

//app.post("/api/reservas", (request, res) => {
const hotel = global.hotel;
const reservas = global.reservas;

//app.get("/api/reservas", (req, res) => {
function todas_reservas(req, res) {
    res.json(global.reservas)
};

module.exports = { todas_reservas };