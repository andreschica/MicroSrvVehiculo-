const EventoClass = require('../../../entities/Evento');
const Evento = EventoClass();

module.exports = (EventoRepository,VehiculoRepository,sequelize) => {

    async function Execute(fechaHora,tipoEvento,notas,idVehiculo) {

        const t = await sequelize.transaction();
        // Crea nuevo objeto de vehiculo
        let nuevoEvento = new Evento(fechaHora,tipoEvento,notas,idVehiculo);
        // persiste vehiculo
        nuevoEvento = await EventoRepository.add(nuevoEvento,t);
        let vehiculo = await VehiculoRepository.obtenerPorId(idVehiculo);
        await VehiculoRepository.actualizarEstado(vehiculo,tipoEvento,t);
        await t.commit();
        return 'Evento agregado con éxito'; //Mirar otra respuesta
    }
    return {
        Execute
    };
};
