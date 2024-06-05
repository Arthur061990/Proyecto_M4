const express = require('express');
const router = express.Router()
const api_reservas_Controller = require('../controllers/api_reservas');
const api_reserva_id_Controller = require('../controllers/api_Reserva_id');
const api_reservas_hoy_Controller = require('../controllers/api_Reservas_hoy');
const api_reservas_cambio_id_Controller = require('../controllers/api_Reservas_cambio_id');
const api_eliminar_Controller = require('../controllers/api_eliminar');
const api_todas_reservas_Controller = require('../controllers/api_todas_reservas');
const api_reserva_fecha = require('../controllers/api_reserva_fecha');
/*
    POST-API/RESERVAS:
*/
    router.post("/api/reservas", api_reservas_Controller.nuevaReserva);
/*
    GET-API/RESERVA_ID:
*/
    router.get("/api/reservas/:id", api_reserva_id_Controller.api_reserva_id);
/*
    GET-API/RESERVAS_HOY:
*/
    router.get("/api/reservas_hoy", api_reservas_hoy_Controller.reservas_hoy);
/*
    GET-API/RESERVAS_HOY:
*/
    router.put("/api/reservas_cambio/:id", api_reservas_cambio_id_Controller.api_reservas_cambio_id);
/*
    DELETE-API/ELIMINAR/:ID:
*/
    router.delete("/api/reservas_eliminar/:id", api_eliminar_Controller.eliminar_Reserva);
/*
    GET-API/TODAS_RESERVAS
*/
    router.get("/api/todas_reservas", api_todas_reservas_Controller.todas_reservas);
/*
    GET-API/RESERVAS_FECHA
*/
    router.get("/api/reservas_fecha/:id", api_reserva_fecha.reservas_fecha);


module.exports = router