//const Vehiculo = require('../../../entities/Vehiculo');
const VehiculoClass = require('../../../entities/Vehiculo');
const Vehiculo = VehiculoClass();

module.exports = (VehiculoRepository) => {

    async function Execute(id,nuevaRuta) {
        let vehiculo = await VehiculoRepository.obtenerPorId(id);
        vehiculo = await VehiculoRepository.actualizarRuta(vehiculo,nuevaRuta);
        return 'Ruta de vehiculo actualizada con éxito'; //Mirar otra respuesta
    }
    return {
        Execute
    };
};
