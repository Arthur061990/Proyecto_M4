
/*
    POST-API/RESERVAS:
    *
    Como viajero, quiero hacer una reserva en el hotel "Hotel Paraíso" 
    para el 15 de mayo de 2023. Necesito una habitación 
    doble para dos adultos y un niño.
    *
    *
*/


// Accede a la variable global
const data = require('../data.js');

//app.post("/api/reservas", (request, res) => {
const hotel = global.hotel;
const reservas = global.reservas;
    
function nuevaReserva(request, res) {
    //res.send("Estoy en aala ruta raiz");
    const body = request.body
    const tipo = body.Tipo
    if(tipo == "sencilla"){
        if(hotel.totalDisponibles.sencilla!=0){
        hotel.totalDisponibles.sencilla = hotel.totalDisponibles.sencilla--
        hotel.totalOcupadas = hotel.totalOcupadas++
        const ultimaReserva = reservas[reservas.length - 1];
        const ultimoNumeroReserva = ultimaReserva ? ultimaReserva.numeroReserva : 0;
        const nuevoNumeroReserva = ultimoNumeroReserva + 1;
        const nuevaReserva = {
        fechaReserva: body.Fecha,
        numeroReserva: nuevoNumeroReserva,
        nombre: body.Nombre,
        apellido: body.Apellido,
        fecha_inicio:body.fechaInicio,
        fecha_fin:body.fechaFin,
        total_personas:body.Total
        };
        reservas.push(nuevaReserva);
        res.json({
            error: false,
            message: 'CONFIRMADA LA RESERVA en la fecha habitacion sencilla: '+body.Fecha+' Numero de Reserva: '+nuevoNumeroReserva
        })

        }else{
            res.json({
                error: false,
                message: 'NOOO Tenemos disponibilidad en la fecha en habitacion sencilla'+body.Fecha
            })
        }
    }
    if(tipo == "doble"){
        if(hotel.totalDisponibles.doble!=0){
            hotel.totalDisponibles.doble = hotel.totalDisponibles.doble--
            hotel.totalOcupadas = hotel.totalOcupadas++
            const ultimaReserva = reservas[reservas.length - 1];
            const ultimoNumeroReserva = ultimaReserva ? ultimaReserva.numeroReserva : 0;
            const nuevoNumeroReserva = ultimoNumeroReserva + 1;
            const nuevaReserva = {
                fechaReserva: body.Fecha,
                numeroReserva: nuevoNumeroReserva,
                nombre: body.Nombre,
                apellido: body.Apellido,
                fecha_inicio:body.fechaInicio,
                fecha_fin:body.fechaFin,
                total_personas:body.Total
                };
            reservas.push(nuevaReserva);
            res.json({
                error: false,
                message: 'CONFIRMADA LA RESERVA habitacion doble en la fecha: '+body.Fecha+' Numero de Reserva: '+nuevoNumeroReserva
            })
    
            }else{
                res.json({
                    error: false,
                    message: 'NOOO Tenemos disponibilidad en la fecha habitacion doble'+body.Fecha
                })
            }

    }
    
    console.log(reservas)
}

module.exports = { nuevaReserva };