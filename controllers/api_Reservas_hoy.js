
// Accede a la variable global
const data = require('../data.js');

//app.post("/api/reservas", (request, res) => {
const hotel = global.hotel;
const reservas = global.reservas;

//app.get("/api/reservas", (req, res) => {
function reservas_hoy(req, res) {
    //res.send("Estoy en aala ruta raiz");

    //Como gerente del hotel, quiero ver una lista de todas
    // las reservas para hoy para poder planificar el trabajo 
    // del personal de limpieza y recepción.

    

        // Obtener la fecha actual en formato YYYY-MM-DD
        const hoy = new Date().toISOString().slice(0, 10);
        console.log("Fecha de hoy: "+hoy)

        // Filtrar las reservas para obtener las del día de hoy
        const reservasHoy = reservas.filter(reserva => reserva.fechaReserva === hoy);

        // Imprimir las reservas del día de hoy
        console.log('Reservas del día de hoy:');
        reservasHoy.forEach(reserva => {
        //console.log(`Número de Reserva: ${reserva.numeroReserva}`);
        res.json(`Número de Reserva: ${reserva.numeroReserva+"Nombre: "+reserva.nombre+" Apellido: "+reserva.apellido+" Fecha Inicio: "+reserva.fecha_inicio+" Fecha Fin: "+reserva.fecha_fin}`);
        //res.json(${reserva.numeroReserva+" "+reserva.nombre+" "+reserva.apellido+" "+reserva.fecha_inicio+" "+reserva.fecha_fin})
    });

};

module.exports = { reservas_hoy };