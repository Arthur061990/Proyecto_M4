const express = require('express');
const app = express();
app.use(express.json())
const bodyParser = require('body-parser');
const reservasRouter = require('./routes/reservas.routes');

app.use(reservasRouter)


app.listen("3000", (req, res) => {
    console.log("Nos hemos conectado correctamente");
});