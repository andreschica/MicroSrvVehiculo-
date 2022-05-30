const AgregarEvento = require('../application/use_cases/Evento/AgregarEvento');
const PackageDelivery = require('../application/use_cases/GuiasAsignadas/PackageDelivery');

module.exports = (dependecies) => {
    const { eventoRepository } = dependecies.DatabaseService;
    const { guiaAsignadaRepository } = dependecies.DatabaseService;
    const { vehiculoRepository } = dependecies.DatabaseService;
    const { sequelize } = dependecies.DatabaseService;
    const KafkaService  = dependecies.KafkaService;

    const agregarEvento = (req, res, next) => {
        // inicializa caso de uso
        const AgregarEventoCommand = AgregarEvento(eventoRepository,vehiculoRepository,sequelize);
        // extrae propiedades de vehiculo
        const { dateTime,eventTipe,notes,idVehicle } = req.body;
        // llama al caso de uso
        AgregarEventoCommand.Execute(dateTime,eventTipe,notes,idVehicle).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    const packageDelivery = async (req, res, next) => {
        try{
            // inicializa caso de 
            console.log("incia salida vehiculo");
            const PackageDeliveryCommand = PackageDelivery(eventoRepository,guiaAsignadaRepository,vehiculoRepository,KafkaService);
            const { dateTime,notes,idVehicle } = req.body;
            // llama al caso de uso
            const response = await PackageDeliveryCommand.Execute(dateTime,notes,idVehicle);
            res.json(response);
        }catch(err){
            next(err);            
        }
    };

    return {
        agregarEvento,
        packageDelivery
    };
};
