const VehiculoClass = require('../../../entities/Vehiculo');
const Vehiculo = VehiculoClass();

module.exports = (VehiculoRepository) => {

    async function Execute(idStatus) {
        let vehiculos = await VehiculoRepository.listarPorEstado(idStatus);
        return vehiculos;
    }
    return {
        Execute
    };
};
