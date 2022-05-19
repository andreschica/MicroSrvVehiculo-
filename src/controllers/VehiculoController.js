const AgregarVehiculo = require('../application/use_cases/Vehiculo/AgregarVehiculo');
const ActualizarRuta = require('../application/use_cases/Vehiculo/ActualizarRuta');
const ListarVehiculos = require('../application/use_cases/Vehiculo/ListarVehiculos');
const ActualizaEstado = require('../application/use_cases/Vehiculo/ActualizarEstado');
const ListarVehiculosEstado = require('../application/use_cases/Vehiculo/ListarVehiculosEstado');

module.exports = (dependecies) => {
    const { vehiculoRepository } = dependecies.DatabaseService;

    const agregarNuevoVehiculo = (req, res, next) => {
        // inicializa caso de uso
        const AgregarVehiculoCommand = AgregarVehiculo(vehiculoRepository);
        // extrae propiedades de vehiculo
        const { name, licensePlate, assignedRoute } = req.body;
        // llama al caso de uso
        AgregarVehiculoCommand.Execute(name, licensePlate, assignedRoute).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    const actualizarRutaVehiculo = (req, res, next) => {
        const ActualizarRutaCommand = ActualizarRuta(vehiculoRepository);
        const { id, assignedRoute } = req.body;
        // llama al caso de uso
        ActualizarRutaCommand.Execute(id, assignedRoute).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    
    const listarVehiculos = (req, res, next) => {
        const ListarCommand = ListarVehiculos(vehiculoRepository);
        // llama al caso de uso
        ListarCommand.Execute().then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    const actualizaEstadoVehiculo = (req, res, next) => {
        const ActualizaEstadoCommand = ActualizaEstado(vehiculoRepository);
        const { id, nuevoEstado } = req.body;
        // llama al caso de uso
        ActualizaEstadoCommand.Execute(id, nuevoEstado).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    const listarVehiculosEstado = (req, res, next) => {
        const ListarVehiculosEstadoCommand = ListarVehiculosEstado(vehiculoRepository);
        const idStatus = req.params.idStatus;
        // llama al caso de uso
        ListarVehiculosEstadoCommand.Execute(idStatus).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    return {
        agregarNuevoVehiculo,
        actualizarRutaVehiculo,
        listarVehiculos,
        actualizaEstadoVehiculo,
        listarVehiculosEstado
    };
};
