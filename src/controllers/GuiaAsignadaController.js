
const AgregarGuias = require('../application/use_cases/GuiasAsignadas/AgregarGuias');
const ActualizarEstadoAsignacion = require('../application/use_cases/GuiasAsignadas/ActualizarEstadoAsignacion');
const ListarGuiasVehiculo = require('../application/use_cases/GuiasAsignadas/ListarGuiasVehiculo');

module.exports = (dependecies) => {
    const { guiaAsignadaRepository } = dependecies.DatabaseService;

    const agregarNuevaAsignacion = (req, res, next) => {
        // inicializa caso de uso
        const AgregarAsignacionCommand = AgregarGuias(guiaAsignadaRepository);
        // extrae propiedades de asignacion de guias
        const { id,assignedDate,idVehicle} = req.body;
        // llama al caso de uso
        AgregarAsignacionCommand.Execute(id,assignedDate,idVehicle,1).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    const actualizarEstadoAsignacion = (req, res, next) => {
        const ActualizarEstadoAsignacionCommand = ActualizarEstadoAsignacion(guiaAsignadaRepository);
        const { id, idStatus } = req.body;
        // llama al caso de uso
        ActualizarEstadoAsignacionCommand.Execute(id, idStatus).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    const obtenerGuiasVehiculo = (req, res, next) => {
        const ListarGuiasVehiculoCommand = ListarGuiasVehiculo(guiaAsignadaRepository);
        const idVehicle = req.params.idVehicle;
        // llama al caso de uso
        ListarGuiasVehiculoCommand.Execute(idVehicle).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    return {
        agregarNuevaAsignacion,
        actualizarEstadoAsignacion,
        obtenerGuiasVehiculo
    };
};
