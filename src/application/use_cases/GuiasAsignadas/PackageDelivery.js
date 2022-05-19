const EventoClass = require('../../../entities/Evento');
const Evento = EventoClass();

module.exports = (EventoRepository,GuiasAsignadasRepository,VehiculoRepository,KafkaService) => {

    async function Execute(dateTime,notes,idVehicle) {
        const tipoEvento = 3;
        let packageDeliveryEvent = new Evento(dateTime,tipoEvento,notes,idVehicle);
        await EventoRepository.add(packageDeliveryEvent);
        let vehiculo = await VehiculoRepository.obtenerPorId(idVehicle);
        VehiculoRepository.actualizarEstado(vehiculo,tipoEvento);
        
        const guiasActivas = await GuiasAsignadasRepository.obtenerGuiasActivasVehiculo(idVehicle);
        await KafkaService.notify(guiasActivas);

        return 'Salida de vehiculo con éxito'; //Mirar otra respuesta
    }
    return {
        Execute
    };
};
