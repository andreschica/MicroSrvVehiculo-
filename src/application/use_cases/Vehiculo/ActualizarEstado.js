const VehiculoClass = require('../../../entities/Vehiculo');
const Vehiculo = VehiculoClass();

module.exports = (VehiculoRepository) => {

    async function Execute(id,nuevoEstado) {
        let vehiculo = await VehiculoRepository.obtenerPorId(id);
        vehiculo = await VehiculoRepository.actualizarEstado(vehiculo,nuevoEstado);
        return 'Estado de vehiculo actualizada con éxito'; //Mirar otra respuesta
    }
    return {
        Execute
    };
};
