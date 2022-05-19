const express = require('express');
const vehiculo = require('./vehiculo');
const guiasAdignadas = require('./guiasAdignadas');
const evento = require('./evento');

const apiRouter = (dependencies) => {
    const routes = express.Router();

    const vehiculoRouter = vehiculo(dependencies);
    const guiasAdignadasRouter = guiasAdignadas(dependencies);
    const eventoRouter = evento(dependencies);

    routes.use('/vehicles', vehiculoRouter);
    routes.use('/assignedGuides', guiasAdignadasRouter);
    routes.use('/event', eventoRouter);
    return routes;

};


module.exports = apiRouter;
