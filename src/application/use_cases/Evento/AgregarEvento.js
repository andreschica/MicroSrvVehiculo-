const EventoClass = require('../../../entities/Evento');
const Evento = EventoClass();

module.exports = (EventoRepository,VehiculoRepository) => {

    async function Execute(fechaHora,tipoEvento,notas,idVehiculo) {

        // Crea nuevo objeto de vehiculo
        let nuevoEvento = new Evento(fechaHora,tipoEvento,notas,idVehiculo);
        // persiste vehiculo
        nuevoEvento = await EventoRepository.add(nuevoEvento);
        let vehiculo = await VehiculoRepository.obtenerPorId(idVehiculo);
        await VehiculoRepository.actualizarEstado(vehiculo,tipoEvento);

        return 'Evento agregado con éxito'; //Mirar otra respuesta
    }
    return {
        Execute
    };
};
